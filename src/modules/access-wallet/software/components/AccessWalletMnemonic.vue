<template>
  <mew-stepper :items="stepperItems" :on-step="step">
    <!--
    =====================================================================================
      Step 1: Enter mnemonic
    =====================================================================================
    -->
    <template v-if="step === 1" #stepperContent1>
      <v-sheet color="white" class="border-radius--10px pa-4 pa-md-10">
        <v-row class="align-end justify-start mb-3 mb-md-5">
          <v-col cols="12">
            <!--
            =====================================================================================
              Title
            =====================================================================================
            -->
            <div class="subtitle-1 font-weight-bold grey--text">STEP 1.</div>
            <div class="headline font-weight-bold">
              Enter your Mnemonic Phrase
            </div>
            <p class="mb-3">
              Please type the mnemonic phrase you wrote down in the right order.
            </p>
            <!--
            =====================================================================================
             Select number of words
            =====================================================================================
            -->
            <div class="d-flex flex-row-reverse pb-4">
              <v-select
                v-model="length"
                style="max-width: 150px"
                hide-details
                dense
                item-text="label"
                item-value="value"
                :items="mnemonicOptions"
                label=""
                outlined
              ></v-select>
            </div>
            <!--
            =====================================================================================
             Enter Phrase Block
            =====================================================================================
            -->
            <phrase-block class="mb-8">
              <v-row>
                <v-col
                  v-for="n in length"
                  :key="`mnemonicInput${n}`"
                  cols="6"
                  lg="3"
                  md="3"
                  sm="4"
                >
                  <v-text-field
                    :ref="`mnemonicInput${n}`"
                    v-model="phrase[n]"
                    :name="`mnemonicInput${n}`"
                    :label="`${n}.`"
                  ></v-text-field>
                </v-col>
              </v-row>
            </phrase-block>
            <!--
            =====================================================================================
             Extra Word
            =====================================================================================
            -->
            <mew-expand-panel
              :has-dividers="true"
              :panel-items="extraWordPanel"
              :idx-to-expand="null"
            >
              <template #panelBody1>
                <mew-input
                  v-model="extraWord"
                  type="password"
                  label="Enter Extra word"
                  placeholder="Enter your extra word"
                />
              </template>
            </mew-expand-panel>
            <!--
            =====================================================================================
             Next Button
            =====================================================================================
            -->
            <v-row dense class="align-center justify-center pt-4">
              <v-col cols="12" sm="4">
                <mew-button
                  has-full-width
                  title="Next"
                  btn-size="xlarge"
                  :disabled="!isValidMnemonic"
                  @click.native="unlockBtn"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-sheet>
    </template>
    <!--
    =====================================================================================
      Step 2: Select Derivation Path
    =====================================================================================
    -->
    <template v-if="step === 2" #stepperContent2>
      <v-sheet color="white" class="border-radius--10px pa-4 pa-md-10">
        <v-row class="align-end justify-start">
          <v-col cols="12">
            <!--
            =====================================================================================
              Title
            =====================================================================================
            -->
            <div class="subtitle-1 font-weight-bold grey--text">STEP 2.</div>
            <div class="headline font-weight-bold">
              Select HD Derivation Path
            </div>
            <p class="mb-5">
              Please select HD Derivation Path that you you want to interact
              with or enter a custom one.
            </p>

            <mew-select
              v-model="selectedPath"
              label="Select Path"
              :has-filter="true"
              :items="parsedPaths"
              filter-placeholder="Search Path"
            />
          </v-col>
        </v-row>
        <!--
        =====================================================================================
          Add Custom Path
        =====================================================================================
        -->
        <mew-expand-panel
          is-toggle
          :has-dividers="true"
          :idx-to-expand="null"
          :panel-items="[
            {
              name: 'Add custom path'
            }
          ]"
        >
          <template #panelBody1>
            <mew-input
              v-model="customPathName"
              label="Enter Alias"
              placeholder="Enter custom path alias"
            />
            <mew-input
              v-model="customPathValue"
              label="Enter Path"
              placeholder="m/44'/1'/0'/0"
            />
            <v-row class="align-center justify-center mb-5">
              <mew-button
                btn-size="small"
                title="Add Path to List"
                btn-style="outline"
                :disable="!selectedPath"
                @click.native="saveCustomPath"
            /></v-row>
          </template>
        </mew-expand-panel>
        <!--
        =====================================================================================
          Back/Next Buttons
        =====================================================================================
        -->
        <app-btn-row
          class="my-2"
          :next-btn-method="nextStepThree"
          :back-btn-method="backStepOne"
          :next-disable="!selectedPath"
        /> </v-sheet
    ></template>
    <!--
    =====================================================================================
      Step 3: Select Address and Network
    =====================================================================================
    -->
    <template v-if="step === 3" #stepperContent3>
      <v-sheet color="white" class="border-radius--10px pa-4 pa-md-10">
        <v-row class="align-end justify-start">
          <v-col cols="12">
            <!--
            =====================================================================================
              Title
            =====================================================================================
            -->
            <div class="subtitle-1 font-weight-bold grey--text">STEP 3.</div>
            <div class="headline font-weight-bold">
              Select Address and Network
            </div>
            <p class="mb-5">
              Please select address that you want to interact with and network.
            </p>
          </v-col>
        </v-row>
        <mew-expand-panel :interactive-content="true" :panel-items="panelItems">
          <!--
          =====================================================================================
            Panel: Select Address
          =====================================================================================
          -->
          <template #panelBody1>
            <div>
              <v-radio-group v-model="selectedAddress">
                <!--
                =====================================================================================
                  Table - Header
                =====================================================================================
                -->
                <v-row dense class="table-header">
                  <v-col offset="2">
                    <p class="">Adddress</p>
                  </v-col>
                  <v-col cols="4" sm="3">
                    <p>ETH Balance</p>
                  </v-col>
                </v-row>
                <!--
                =====================================================================================
                  Table - Address Row
                =====================================================================================
                -->
                <v-row
                  v-for="acc in accounts"
                  v-show="accounts.length > 0"
                  :key="acc.address"
                  dense
                  class="table-row-class align-center justify-start py-1"
                >
                  <v-col cols="2" sm="1">
                    <v-radio label="" :value="acc.address" class="mx-2" />
                  </v-col>
                  <v-col cols="6" sm="8">
                    <v-row
                      dense
                      class="align-center justify-start pl-1 pl-sm-3 pr-2 pr-sm-3"
                    >
                      <mew-blockie
                        width="25px"
                        height="25px"
                        :address="acc.address"
                        class="mr-2"
                      />
                      <v-col cols="9" class="d-none d-sm-flex">
                        <mew-transform-hash :hash="acc.address" />
                      </v-col>
                      <p class="d-block d-sm-none">
                        {{ acc.address | concatAddressXS }}
                      </p>
                      <mew-copy
                        is-small
                        :copy-ref="acc.address"
                        tooltip="Copy Address"
                        :copy-value="acc.address"
                        class="ml-2"
                      />
                    </v-row>
                  </v-col>
                  <v-col cols="4" sm="3">
                    <p>
                      {{
                        acc.balance === 'Loading..'
                          ? acc.balance
                          : `${acc.balance} ${network.type.name}`
                      }}
                    </p>
                  </v-col>
                </v-row>
              </v-radio-group>
              <!--
              =====================================================================================
               Previous / Next Buttons
              =====================================================================================
              -->
              <v-row align="center" justify="center">
                <div>
                  <mew-button
                    title="Previous"
                    color-theme="basic"
                    icon="mdi-chevron-left"
                    icon-type="mdi"
                    btn-size="small"
                    icon-align="left"
                    btn-style="transparent"
                    @click.native="previousAddressSet"
                  />
                  <mew-button
                    title="Next"
                    color-theme="basic"
                    icon="mdi-chevron-right"
                    icon-type="mdi"
                    btn-size="small"
                    icon-align="right"
                    btn-style="transparent"
                    @click.native="nextAddressSet"
                  />
                </div>
              </v-row>
            </div>
          </template>
          <!--
          =====================================================================================
            Panel: Network
          =====================================================================================
          -->
          <template #panelBody2>
            <div class="network-container custom-scroll-bar ml-3 mr-n3 pr-3">
              <v-radio-group v-model="selectedNetwork">
                <div v-for="(type, i) in networkTypes" :key="type">
                  <h5 class="text-capitalize font-weight-bold">
                    {{ type }}
                  </h5>
                  <v-container>
                    <v-row dense align="center" justify="space-between">
                      <v-col
                        v-for="(item, idx) in Networks[type]"
                        :key="item.service + idx"
                        cols="12"
                        sm="6"
                      >
                        <v-radio :label="item.service" :value="item.url" />
                      </v-col>
                    </v-row>
                  </v-container>
                  <v-divider
                    v-if="networkTypes.length != i + 1"
                    class="mt-0 mb-5"
                  />
                </div>
              </v-radio-group>
            </div>
          </template>
        </mew-expand-panel>
        <!--
        =====================================================================================
         Terms
        =====================================================================================
        -->
        <div class="d-flex align-center flex-column">
          <mew-checkbox
            v-model="acceptTerms"
            label="To access my wallet, I accept "
            :link="link"
            class="justify-center"
          />
        </div>
        <!--
        =====================================================================================
          Back / Access Wallet Buttons
        =====================================================================================
        -->
        <app-btn-row
          class="my-2"
          next-btn-text="Access Wallet"
          :next-btn-method="accessWallet"
          :back-btn-method="backStepTwo"
          :next-disable="!acceptTerms"
        />
      </v-sheet>
    </template>
  </mew-stepper>
</template>

<script>
import phraseBlock from '@/components/PhraseBlock';
import { WALLET_TYPES } from '@/modules/access-wallet/hardware/handlers/configs/configWalletTypes';
import paths from '@/modules/access-wallet/hardware/handlers/bip44';
import { mapActions, mapGetters, mapState } from 'vuex';
import {
  Toast,
  ERROR,
  SUCCESS,
  SENTRY
} from '@/modules/toast/handler/handlerToast';
import { checkCustomPath } from '../handlers/pathHelper';
import AppBtnRow from '@/core/components/AppBtnRow';
const MAX_ADDRESSES = 5;

export default {
  name: 'AccessMnemonic',
  filters: {
    concatAddress(val) {
      return `${val.substring(0, 11)}...${val.substring(
        val.length - 4,
        val.length
      )}`;
    },
    concatAddressXS(val) {
      return `${val.substring(0, 4)}...${val.substring(
        val.length - 4,
        val.length
      )}`;
    }
  },
  components: {
    phraseBlock,
    AppBtnRow
  },
  props: {
    handlerAccessWallet: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      /*Stepper Items */
      step: 1,
      stepperItems: [
        {
          step: 1,
          name: 'Enter Phrase'
        },
        {
          step: 2,
          name: 'Select HD Path'
        },
        {
          step: 3,
          name: 'Address & Network'
        }
      ],
      /*Phrase Items: */
      extraWord: '',
      phrase: {},
      length: 12,
      mnemonicOptions: [
        {
          label: '12 words',
          value: 12
        },
        {
          label: '24 words',
          value: 24
        }
      ],
      /* Path Items: */
      selectedPath: null,
      customPathName: '',
      customPathValue: '',
      /* Terms Items : */
      acceptTerms: false,
      link: {
        title: 'Terms',
        url: 'https://www.myetherwallet.com/terms-of-service'
      },
      /*Network Items: */
      selectedNetwork: '',
      panelNetworkSubstring: '',
      /* Mnemonic Addresses */
      selectedAddress: '',
      accounts: [],
      currentIdx: 0,
      addressPage: 0
    };
  },
  computed: {
    ...mapGetters('global', ['Networks', 'network']),
    ...mapState('global', ['customPaths']),
    /*------------------------------------
     * STEP 1 ITEMS
    -------------------------------------*/
    /**
     * Property returns panel items for the extra word,used in step 1
     */
    extraWordPanel() {
      return [
        {
          name: 'Do you have an extra word?',
          subtext: 'Add your word'
        }
      ];
    },
    /**
     * Property validates whether or not all words has been entered
     * @return booelan
     */
    isValidMnemonic() {
      return Object.keys(this.phrase).length === this.length;
    },

    /*------------------------------------
     * STEP 2 ITEMS
    -------------------------------------*/
    /**
     * Property returns defualt Paths + Custom paths, used in Select Path component
     * Property Interface:
     * {  name = string -> Name of the Path,
     *    subtext = string --> Derivation Path,
     *    value = tring --> Derivation Path
     * }
     */
    parsedPaths() {
      return paths[WALLET_TYPES.MNEMONIC]
        .map(item => {
          const newObj = {};
          newObj['name'] = item['label'];
          newObj['subtext'] = item['path'];
          newObj['value'] = item['path'];
          return newObj;
        })
        .concat(this.customPaths);
    },
    /**
     * Property returns parsed mnemonic phrase
     * Is used in unlock wallet method
     */
    parsedPhrase() {
      return Object.values(this.phrase).join(' ');
    },

    /*------------------------------------
     * STEP 3 ITEMS
    -------------------------------------*/
    /**
     * Property returns edited version of the selected address. ie: 0x3453...3a3b
     */
    panelAddressSubstring() {
      return this.selectedAddress && this.selectedAddress !== ''
        ? `${this.selectedAddress.substring(
            0,
            6
          )} ... ${this.selectedAddress.substring(
            this.selectedAddress.length - 4,
            this.selectedAddress.length
          )}`
        : '';
    },
    /**
     * Property returns expand panel items for the Address and Network
     */
    panelItems() {
      return [
        {
          name: 'Address',
          subtext: this.panelAddressSubstring,
          colorTheme: 'superPrimary',
          hasActiveBorder: true
        },
        {
          name: 'Network',
          subtext: this.panelNetworkSubstring,
          colorTheme: 'superPrimary',
          hasActiveBorder: true
        }
      ];
    },

    /**
     * Property returns default network and nodes items
     * Property Interface:
     * {  name = string -> Name of the Path,
     *    subtext = string --> Derivation Path,
     *    value = tring --> Derivation Path
     * }
     */
    networkTypes() {
      const showFirst = ['ETH', 'ROP', 'RIN'];
      const typeArr = Object.keys(this.Networks).filter(item => {
        if (!showFirst.includes(item)) {
          return item;
        }
      });
      typeArr.unshift('ETH', 'ROP', 'RIN');
      return typeArr;
    },

    /**
     * Property returns default network and nodes items
     * Property Interface:
     * {  name = string -> Name of the Path,
     *    subtext = string --> Derivation Path,
     *    value = tring --> Derivation Path
     * }
     */
    walletAccount() {
      const wallet = this.accounts.find(item => {
        return item.address === this.selectedAddress;
      });
      if (wallet) {
        wallet.account.isHardware = true;
        return wallet.account;
      }
      return null;
    }
  },
  watch: {
    selectedNetwork(newVal) {
      Object.values(this.Networks).forEach(itm => {
        const found = itm.find(network => {
          return network.url === newVal;
        });
        if (found) {
          this.panelNetworkSubstring = `${found.type.name} - ${found.service}`;
          this.setNetwork(found);
        }
      });
    },
    phrase: {
      deep: true,
      handler: function (newval) {
        const splitVal = newval[1].split(' ');
        if (splitVal.length === 12 || splitVal.length === 24) {
          this.length = splitVal.length;
          const newObj = {};
          splitVal.forEach((item, idx) => {
            newObj[idx + 1] = item;
          });
          this.phrase = newObj;
        }
      }
    },
    accounts: {
      deep: true,
      handler: function (newVal) {
        this.accounts = newVal;
      }
    }
  },
  mounted() {
    this.selectedNetwork = this.network.url;
    this.panelNetworkSubstring = `${this.network.type.name} - ${this.network.service}`;
  },
  methods: {
    ...mapActions('global', ['setNetwork', 'addCustomPath']),
    /**
     * Method that launches new tab to an explorer with address clicked
     * Used in STEP 3, Address Row
     */
    launchExplorrer(addr) {
      // eslint-disable-next-line
      window.open(
        this.network.type.blockExplorerAddr.replace('[[address]]', addr),
        '_blank'
      );
    },

    /**
     * Async method that gets accounts according to the pagination
     * Used in STEP 2 and 3
     */
    async setAddresses() {
      this.accounts = [];
      for (let i = this.currentIdx; i < this.currentIdx + MAX_ADDRESSES; i++) {
        const account = await this.handlerAccessWallet
          .getWalletInstance()
          .getAccount(i);
        this.accounts.push({
          address: account.getAddressString(),
          account: account,
          idx: i,
          balance: 'Loading..',
          tokens: 'Loading..'
        });
      }
      this.currentIdx += MAX_ADDRESSES;
      this.addressPage += 1;
      this.selectedAddress = this.accounts[0].address;
    },
    /**
     * Method unlocks mnemonic phrase;
     * Direct to second step if mnemonic was valid;
     * Shows toast on error
     * Used in STEP 1
     */
    unlockBtn() {
      this.handlerAccessWallet
        .unlockMnemonicWallet(this.parsedPhrase, this.extraWord)
        .then(res => {
          if (res) {
            this.step = 2;
          }
        })
        .catch(e => {
          Toast(e, {}, ERROR);
        });
    },
    /**
     * Method adds custom path.
     * Checks, whether or not the path is valid and already exhists in the parsed paths.
     * Shows toast message to use on error or successfull addition.
     * Used in STEP 2
     */
    saveCustomPath() {
      try {
        const customPath = checkCustomPath(this.customPathValue);
        if (customPath) {
          if (this.parsedPaths.some(e => e.value === this.customPathValue)) {
            const error = `Custom path already exhists: ${
              this.parsedPaths.find(e => e.value === this.customPathValue).name
            }`;
            Toast(error, {}, ERROR);
          } else {
            const newPath = {
              name: this.customPathName,
              subtext: this.customPathValue,
              value: this.customPathValue
            };
            this.addCustomPath(newPath).then(() => {
              Toast('You have added custom path successfully.', {}, SUCCESS);
            });
          }
        } else {
          Toast('Custom path is not valid', {}, ERROR);
        }
      } catch (error) {
        Toast(error, {}, ERROR);
      }
    },
    /**
     * Methods sets addresses according to the path selected
     * and switched stepper to step 3
     * Used in STEP 2
     */
    nextStepThree() {
      this.handlerAccessWallet
        .updateMnemonicPath(this.selectedPath.value)
        .then(res => {
          if (res) {
            this.step = 3;
            this.setAddresses();
          }
        })
        .catch(e => {
          Toast(e, {}, ERROR);
        });
    },
    /**
     * Methods changes stepper to step 1
     * Used in STEP 2
     */
    backStepOne() {
      this.step = 1;
    },
    /**
     * Methods resets all addresses
     * and switched stepper to step 2
     * Used in STEP 3
     */
    backStepTwo() {
      this.step = 2;
      this.selectedAddress = '';
      this.accounts.splice(0);
      this.currentIdx = 0;
      this.addressPage = 0;
    },

    /**
     * Methods generates privious derived addresses
     * Used in STEP 3
     */
    nextAddressSet() {
      this.setAddresses();
    },
    /**
     * Methods generates privious derived addresses
     * Used in STEP 3
     */
    previousAddressSet() {
      const pageDeductor = this.currentIdx / MAX_ADDRESSES;
      const idxDeductor = this.addressPage * MAX_ADDRESSES;
      this.addressPage -=
        this.currentIdx <= 10 ? pageDeductor : pageDeductor - 1;
      this.currentIdx -=
        this.currentIdx <= 10 ? idxDeductor : idxDeductor - MAX_ADDRESSES;
      this.setAddresses();
    },

    /**
     * Methods emits parent to unlock wallet
     * and passes selected wallet account withinMnemonic Phrase
     * this.walletAccount should always be defined,
     * check in place if logic was compromised.
     * Used in STEP 3
     */
    accessWallet() {
      if (this.walletAccount) {
        this.$emit('unlock', this.walletAccount);
      } else {
        Toast('Something went wrong in mnemonic wallet access', {}, SENTRY);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
table {
  border-spacing: 0;
}

.table-header {
  text-align: start;
  background-color: #f0f0f0;
  p {
    color: #96a8b6;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 0px;
  }
}
.table-row-class {
  p {
    margin-bottom: 0px;
  }
}
.table-row-class:nth-child(odd) {
  background-color: #f9f9f9;
}

.component-container {
  width: 100%;
}

.sheet-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

.sheet-content {
  padding: 48px 68px;
  height: 100%;
}

.mnemonic-phrase-container {
  border-radius: 5px !important;
  border: 1px solid rgb(230, 235, 239) !important; // hard coding this color for now based on abstract

  .mnemonic-input {
    width: 100%;
    position: relative;

    input {
      width: 100%;
      padding-left: 21px;
      padding-bottom: 2px;
      border-bottom: 1px solid rgb(230, 235, 239) !important; // hard coding this color for now based on abstract

      &:focus {
        outline: none !important;
        border-bottom: 1px solid black !important; // hard coding this color for now based on abstract
      }
    }

    label {
      position: absolute;
    }
  }
}

.extra-word-container {
  margin-top: 25px;
  border-top: 1px solid rgb(230, 235, 239) !important; // hard coding this color for now based on abstract
  border-bottom: 1px solid rgb(230, 235, 239) !important; // hard coding this color for now based on abstract
  padding: 0 20px;
}

.network-container {
  max-height: 250px;
  overflow-y: scroll;
}

.address-copy-input {
  opacity: 0;
  position: absolute;
  z-index: -1;
}
</style>
<template>
  <v-sheet
    :outlined="true"
    color="transparent"
    :rounded="true"
    :max-width="740"
    :min-width="475"
    :min-height="340"
    class="border-radius--10px pa-4 pa-md-10"
  >
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <mew-expand-panel
            :interactive-content="true"
            :panel-items="panelItems"
          >
            <template #panelBody1>
              <div class="network-container">
                <v-radio-group v-model="selectedNetwork">
                  <div v-for="type in networkTypes" :key="type">
                    <p class="text-capitalize mew-header-block">
                      {{ type }}
                    </p>
                    <v-container>
                      <v-row align="center" justify="space-between">
                        <v-col
                          v-for="(item, idx) in Networks[type]"
                          :key="item.service + idx"
                          cols="6"
                        >
                          <v-radio :label="item.service" :value="item.url" />
                        </v-col>
                      </v-row>
                    </v-container>
                  </div>
                </v-radio-group>
              </div>
            </template>
            <!--
            =====================================================================================
              Panel: Select Address
            =====================================================================================
            -->
            <template #panelBody2>
              <div>
                <v-radio-group v-model="selectedAddress">
                  <!--
                    =====================================================================================
                      Table - Header
                    =====================================================================================
                    -->
                  <v-row dense class="table-header">
                    <v-col offset="2">
                      <p class="">{{ $t('common.addr') }}</p>
                    </v-col>
                    <v-col cols="4" sm="3">
                      <p>ETH {{ $t('common.string.string') }}</p>
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
                          {{ acc.address | concatAddress }}
                        </p>
                        <mew-copy
                          is-small
                          :copy-ref="acc.address"
                          tooltip="Copy Address"
                          :copy-value="acc.address"
                          class="ml-2"
                        />
                        <v-icon
                          small
                          class="cursor--pointer ml-2"
                          @click="launchExplorrer(acc.address)"
                          >mdi-launch</v-icon
                        >
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
                      :title="$t('access-wallet.previous')"
                      color-theme="basic"
                      icon="mdi-chevron-left"
                      icon-type="mdi"
                      btn-size="small"
                      icon-align="left"
                      btn-style="transparent"
                      @click.native="previousAddressSet"
                    />
                    <mew-button
                      :title="$t('access-wallet.next')"
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
          </mew-expand-panel>
          <div class="d-flex align-center flex-column">
            <mew-button
              :title="$t('access-wallet.access-my-wallet')"
              btn-size="large"
              :disabled="!(selectedAddress && acceptTerms)"
              @click.native="
                () => {
                  setHardwareWallet(wallet.account);
                }
              "
            />
            <mew-checkbox
              v-model="acceptTerms"
              :label="$t('access-wallet.accept-terms')"
              :link="link"
              class="justify-center"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  filters: {
    concatAddress(val) {
      // should probably be moved globablly
      return `${val.substring(0, 11)}...${val.substring(
        val.length - 4,
        val.length
      )}`;
    }
  },
  props: {
    accounts: {
      type: Array,
      default: () => {
        return [];
      }
    },
    nextAddressSet: {
      type: Function,
      default: () => {}
    },
    previousAddressSet: {
      type: Function,
      default: () => {}
    },
    addressPage: {
      type: Number,
      default: 0
    },
    setHardwareWallet: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      acceptTerms: false,
      selectedAddress: '',
      selectedNetwork: '',
      panelNetworkSubstring: '',
      link: {
        title: 'Terms',
        url: 'https://www.myetherwallet.com/terms-of-service'
      }
      // panelItems: [
      //   {
      //     name: 'Network'
      //   },
      //   {
      //     name: 'Address to interact with'
      //   }
      // ]
    };
  },
  computed: {
    ...mapGetters('global', ['Networks', 'network']),
    /**
     * On Network Address step
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
     * Returns the selected address account
     */
    wallet() {
      const wallet = this.accounts.find(item => {
        return item.address === this.selectedAddress;
      });
      return wallet ? wallet : null;
    },
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
          name: 'Network',
          subtext: this.panelNetworkSubstring,
          colorTheme: 'superPrimary',
          hasActiveBorder: true
        },
        {
          name: 'Address',
          subtext: this.panelAddressSubstring,
          colorTheme: 'superPrimary',
          hasActiveBorder: true
        }
      ];
    }
  },
  watch: {
    accounts: {
      immediate: true,
      handler: function (val) {
        if (val.length > 0 && this.selectedAddress === '') {
          this.selectedAddress = this.accounts[0].address;
        }
      }
    },
    /**
     * Identifies the full network object for the selected network
     * and sets it as the active network if it exists.
     **/
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
    }
  },
  mounted() {
    this.selectedNetwork = this.network.url;
    this.panelNetworkSubstring = `${this.network.type.name} - ${this.network.service}`;
  },
  methods: {
    ...mapActions('global', ['setNetwork']),
    /**
     * Method that launches new tab to an explorer with address clicked
     * Used in Address to interact with, Address Row
     */
    launchExplorrer(addr) {
      // eslint-disable-next-line
      window.open(
        this.network.type.blockExplorerAddr.replace('[[address]]', addr),
        '_blank'
      );
    }
  }
};
</script>

<style lang="scss" scoped>
table {
  border-spacing: 0;
}

.table-header {
  text-align: center;
  background-color: #f0f0f0;
  th {
    color: #96a8b6;
    font-weight: bold;
    text-transform: uppercase;
  }
}

.table-row-class {
  tr:nth-child(odd) {
    background-color: #f9f9f9;
  }
}

.network-container {
  max-height: 250px;
  overflow: scroll;
}

.address-copy-input {
  opacity: 0;
  position: absolute;
  z-index: -1;
}
</style>
<template>
    <div class="item">
        <m-header></m-header>
        <div v-if="!pageLoading" class="main">
            <div class="content">
                <!-- 收货信息 -->
                <div class="gray-box">
                    <div class="title">
                        <h2>收货信息</h2>
                    </div>
                    <div class="address-common-table">
                        <ul class="address-item-list">
                            <template v-if="addressList.length">
                                <li :class="{'selected-address-item':index===addressSelectedIndex}" v-for="(address,index) in addressList" :key="index" @click="changeAddress(index)" @mouseenter='showOperation(index)' @mouseleave='hideOperation'>
                                    <div class="address-item">
                                        <div class="name-section"> {{address.accept_name}}
                                            <!--（默认地址）-->
                                        </div>
                                        <div class="mobile-section">{{address.mobile}}</div>
                                        <div class="detail-section"> {{address.province}} {{address.city}} {{address.district}}
                                            <br> {{address.street}}</div>
                                    </div>
                                    <transition name="slideUp">
                                        <div class="operation-section" v-show="showOpreationIndex === index">
                                            <span class="update-btn" @click="showEditAddress(index)">修改</span>
                                            <span class="delete-btn" @click="showDeleteAddress">删除</span>
                                        </div>
                                    </transition>
                                </li>
                            </template>
                            <!-- 以下地址仅测试使用，后续删除 -->
                            <li class="selected-address-item">
                                <div class="address-item">
                                    <div class="name-section"> XX（默认地址） </div>
                                    <div class="mobile-section">136XXXX6593</div>
                                    <div class="detail-section"> 广东省 广州市 番禺区<br> XXXXX </div>
                                </div>
                                <div class="operation-section">
                                    <span class="update-btn" @click="showEditAddress(index)">修改</span>
                                    <span class="delete-btn" @click="showDeleteAddress">删除</span>
                                </div>
                            </li>
                            <!-- 以上地址仅测试使用，后续删除 -->
                            <li class="add-address-item" @click="showAddressDialog(-1)">
                                <p>使用新地址</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 发票信息 -->
                <div class="gray-box">
                    <div class="title">
                        <h2>发票信息</h2>
                    </div>
                    <div class="invoice-box">
                        <div class="invoice-detail">
                            是否开具发票：
                            <div class="radio-box margin-left">
                                <div class="one-radio">
                                    <span class="blue-radio" :class="{'blue-radio-on':isShowInvoiceDetail===false}" @click="showInvoiceDetail(1)">
                                        <a></a>
                                    </span>
                                    <span>否</span>
                                </div>
                                <div class="one-radio">
                                    <span class="blue-radio" :class="{'blue-radio-on':isShowInvoiceDetail===true}" @click="showInvoiceDetail(2)">
                                        <a></a>
                                    </span>
                                    <span>开具</span>
                                </div>
                            </div>
                        </div>
                        <div class="content-wraper" v-show="isShowInvoiceDetail">
                            <p class="invoice-detail"> 发票类型：纸质普通发票</p>
                            <div class="invoice-detail">
                                发票抬头：
                                <div class="radio-box">
                                    <div class="one-radio">
                                        <span class="blue-radio" :class="{'blue-radio-on':isShowTitleInput===false}" @click="changeTitle(1)">
                                            <a></a>
                                        </span>
                                        <span>个人</span>
                                    </div>
                                    <div class="one-radio">
                                        <span class="blue-radio" :class="{'blue-radio-on':isShowTitleInput==true}" @click="changeTitle(2)">
                                            <a></a>
                                        </span>
                                        <span>单位</span>
                                    </div>
                                </div>
                                <div class="input-box" v-show="isShowTitleInput">
                                    <div class="module-form-item-wrapper no-icon small-item">
                                        <input type="text" name="invoice_title" v-model.trim="invoiceTmpTitle" placeholder="请填写发票抬头">
                                    </div>
                                </div>
                            </div>
                            <p class="invoice-detail">发票内容：购买商品明细</p>
                            <p class="invoice-label"> 普通发票收取8%的税点。普通发票可以用于企业报销。 </p>
                        </div>
                    </div>
                </div>
                <!-- 购物清单 -->
                <div class="gray-box">
                    <div class="title">
                        <h2>购物清单</h2>
                    </div>
                    <div class="sub-title">
                        <span class="name">商品名称</span>
                        <span class="subtotal">小计</span>
                        <span class="num">数量</span>
                        <span class="price">单价</span>
                    </div>
                    <div class="cart-table">
                        <div class="cart-items">
                            <div class="items-thumb">
                                <a :href="proUrl" :title="info.name" target="_blank">
                                    <img :src="info.pic">
                                </a>
                            </div>
                            <div class="name">
                                <a :href="proUrl" :title="info.name" target="_blank">{{info.name}}</a>
                                <p v-for="(item,index) in info.parameters" :key="index">{{item.key}}：{{item.value}}</p>
                            </div>
                            <div class="subtotal"> ¥ {{info.price}}</div>
                            <div class="goods-num">{{info.num}}</div>
                            <div class="price">¥ {{info.price*info.num}}</div>
                        </div>
                    </div>
                    <div class="order-discount-line">
                        <p> 商品总计：
                            <span>¥ {{info.price*info.num}}</span>
                        </p>
                        <p v-if="isShowInvoiceDetail"> 税费：
                            <span>+ ¥ {{invoicePrice}}</span>
                        </p>
                        <p> 运费：
                            <span>彩印狮目前仅提供快递到付</span>
                        </p>
                    </div>
                    <div class="extra-desc">
                        <span>备注：</span>
                        <div class="input-box">
                            <input type="text" placeholder="你可以填写需要彩印狮注意的内容" v-model.trim="extraDesc">
                        </div>
                    </div>
                    <div class="last-payment clearfix">
                        <span class="payment-bt" @click="showConfirmDialog">提交订单</span>
                        <span class="prices">应付金额：
                            <em>¥ {{totalPrice}}</em>
                        </span>
                    </div>
                </div>
            </div>
            <div class="module-dialog-layer" v-show="isShow"></div>
            <!-- 增加地址dialog -->
            <transition name="fade">
                <div class="module-dialog" v-show="isShowAddressDialog">
                    <div class="dialog-panel address-dialog">
                        <div class="topbar">
                            <div class="dialog-tit">
                                <h4>管理收货地址</h4>
                            </div>
                            <span class="dialog-close" @click="hideAddressDialog"></span>
                        </div>
                        <div class="dialog-con">
                            <div class="animate-layer">
                                <div class="save-address-box">
                                    <div class="address-form">
                                        <div class="module-form-row">
                                            <div class="form-item-v3">
                                                <input type="text" name="accept_name" placeholder="收货人姓名" v-model="addressForm.accept_name">
                                                <div class="verify-error"></div>
                                            </div>
                                        </div>
                                        <div class="module-form-row">
                                            <div class="form-item-v3">
                                                <input type="text" name="mobile" placeholder="手机号" v-model="addressForm.mobile">
                                                <div class="verify-error"></div>
                                            </div>
                                        </div>
                                        <div class="module-form-row">
                                            <div class="form-item-v3 form-valid-item">
                                                <input type="text" name="area_code" placeholder="区号(可选)" v-model="addressForm.area_code">
                                                <div class="verify-error"></div>
                                            </div>
                                        </div>
                                        <div class="module-form-row">
                                            <div class="form-item-v3 form-valid-item">
                                                <input type="text" name="telephone" placeholder="固定电话(可选)" v-model="addressForm.telephone">
                                                <div class="verify-error"></div>
                                            </div>
                                        </div>
                                        <div class="module-form-row">
                                            <div class="form-item-v3 select-item">
                                                <select name="province_code" class="select-province" v-model="province_code">
                                                    <option value="0">请选择省份</option>
                                                    <option :value="province.province_code" v-for="province in provinces">{{province.name}}</option>
                                                </select>
                                                <div class="form-item-select-after"></div>
                                            </div>
                                        </div>
                                        <div class="module-form-row clearfix">
                                            <div class="form-item-v3 select-item" style="float: left;">
                                                <select name="city_code" class="select-city" v-model="city_code">
                                                    <option value="0">请选择城市</option>
                                                    <option :value="city.city_code" v-for="city in cities">{{city.name}}</option>
                                                </select>
                                                <div class="form-item-select-after"></div>
                                            </div>
                                            <div class="form-item-v3 select-item" style="float: right;">
                                                <select name="district_code" class="select-district" v-model="district_code">
                                                    <option value="0">请选择区县</option>
                                                    <option :value="district.district_code" v-for="district in districts">{{district.name}}</option>
                                                    <option value="999999">其他</option>
                                                </select>
                                                <div class="form-item-select-after"></div>
                                            </div>
                                        </div>
                                        <div class="module-form-row">
                                            <div class="form-item-v3">
                                                <input type="text" name="street" placeholder="街道编号/名称，楼宇名称" v-model="addressForm.street">
                                                <div class="verify-error"></div>
                                            </div>
                                        </div>
                                        <div class="module-form-row">
                                            <input type="checkbox" name="default" class="fn-hide" v-model="addressForm.default">
                                            <span class="blue-checkbox blue-checkbox-on" data-checkbox-name="default"></span>
                                            设为默认
                                        </div>
                                        <div class="dialog-blue-btn disabled-btn" @click="saveAddress">
                                            <a href="javascript:;">保存</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>

            <!-- 修改地址dialog -->
            <transition name="fade">
                <div class="module-dialog" v-show="isShowEditAddressDialog">
                    <div class="dialog-panel address-dialog">
                        <div class="topbar">
                            <div class="dialog-tit">
                                <h4>管理收货地址</h4>
                            </div>
                            <span class="dialog-close" @click="hideEditAddressDialog"></span>
                        </div>
                        <div class="dialog-con">
                            <div class="animate-layer">
                                <div class="save-address-box">
                                    <div class="address-form">
                                        <div class="module-form-row">
                                            <div class="form-item-v3">
                                                <input type="text" name="accept_name" placeholder="收货人姓名" v-model="editAddressForm.accept_name">
                                                <div class="verify-error"></div>
                                            </div>
                                        </div>
                                        <div class="module-form-row">
                                            <div class="form-item-v3">
                                                <input type="text" name="mobile" placeholder="手机号" v-model="editAddressForm.mobile">
                                                <div class="verify-error"></div>
                                            </div>
                                        </div>
                                        <div class="module-form-row">
                                            <div class="form-item-v3 form-valid-item">
                                                <input type="text" name="area_code" placeholder="区号(可选)" v-model="editAddressForm.area_code">
                                                <div class="verify-error"></div>
                                            </div>
                                        </div>
                                        <div class="module-form-row">
                                            <div class="form-item-v3 form-valid-item">
                                                <input type="text" name="telephone" placeholder="固定电话(可选)" v-model="editAddressForm.telephone">
                                                <div class="verify-error"></div>
                                            </div>
                                        </div>
                                        <div class="module-form-row">
                                            <div class="form-item-v3 select-item">
                                                <select name="province_code" class="select-province" v-model="province_code">
                                                    <option value="0">请选择省份</option>
                                                    <!--
                                                                                                                                                                                    <option v-if="editAddressForm.province_code == 'province.province_code'" selected
                                                                                                                                                                                            :value="province.province_code"
                                                                                                                                                                                            v-for="province in provinces">{{province.name}}</option>
                                                                                                                                                                                    <option v-else
                                                                                                                                                                                            :value="province.province_code"
                                                                                                                                                                                            v-for="province in provinces">{{province.name}}</option>
                                                                                                                                                                                    -->

                                                    <option :value="province.province_code" v-for="province in provinces">{{province.name}}</option>

                                                    <!--
                                                                                                                                                                                    <option :selected="{'selected':editAddressForm.province_code == province.province_code}"
                                                                                                                                                                                            :value="province.province_code"
                                                                                                                                                                                            v-for="province in provinces">{{province.name}}</option>
                                                                                                                                                                                    -->
                                                    <!--
                                                                                                                                                                                    <option :value="province.province_code"
                                                                                                                                                                                            v-for="province in provinces">{{province.name}}</option>
                                                                                                                                                                                    -->
                                                </select>
                                                <div class="form-item-select-after"></div>
                                            </div>
                                        </div>
                                        <div class="module-form-row clearfix">
                                            <div class="form-item-v3 select-item" style="float: left;">
                                                <select name="city_code" class="select-city" v-model="city_code">
                                                    <option value="0">请选择城市</option>
                                                    <option :value="city.city_code" v-for="city in cities">{{city.name}}</option>
                                                </select>
                                                <div class="form-item-select-after"></div>
                                            </div>
                                            <div class="form-item-v3 select-item" style="float: right;">
                                                <select name="district_code" class="select-district" v-model="district_code">
                                                    <option value="0">请选择区县</option>
                                                    <option :value="district.district_code" v-for="district in districts">{{district.name}}</option>
                                                    <option value="999999">其他</option>
                                                </select>
                                                <div class="form-item-select-after"></div>
                                            </div>
                                        </div>
                                        <div class="module-form-row">
                                            <div class="form-item-v3">
                                                <input type="text" name="street" placeholder="街道编号/名称，楼宇名称" v-model="editAddressForm.street">
                                                <div class="verify-error"></div>
                                            </div>
                                        </div>
                                        <div class="module-form-row">
                                            <input type="checkbox" name="default" class="fn-hide" v-model="addressForm.default">
                                            <span class="blue-checkbox blue-checkbox-on" data-checkbox-name="default"></span>
                                            设为默认
                                        </div>
                                        <div class="dialog-blue-btn disabled-btn" @click="editAddress">
                                            <a href="javascript:;">保存</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>

            <transition name="fade">
                <div class="module-dialog" v-show="isShowConfirmDialog">
                    <div class="dialog-panel confirm-dialog">
                        <div class="topbar">
                            <div class="dialog-tit">
                                <h4>确认信息</h4>
                            </div>
                            <span class="dialog-close" @click="hideConfirmDialog"></span>
                        </div>
                        <div class="dialog-con">
                            <div class="animate-layer">
                                <div v-html="html"></div>
                            </div>
                            <div class="confirm-btn-wrapper clearfix">
                                <div class="dialog-gray-btn big-main-btn" @click="hideConfirmDialog">
                                    <a>修改信息</a>
                                </div>
                                <div class="dialog-blue-btn big-main-btn" @click="postConfirm">
                                    <a>前往支付</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>

            <transition name="fade">
                <div class="module-dialog" v-show="isShowNullAddressDialog">
                    <div class="dialog-panel null-address-dialog">
                        <div class="topbar">
                            <div class="dialog-tit">
                                <h4>提示</h4>
                            </div>
                            <span class="dialog-close" @click="hideNullAddressDialog"></span>
                        </div>
                        <div class="dialog-con">
                            <div class="confirm-msg">
                                请选择一个收获地址
                            </div>
                        </div>
                        <div class="dialog-btn-wrap clearfix">
                            <div class="blue-main-btn" @click="hideNullAddressDialog">
                                <a>确定</a>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>

            <transition name="fade">
                <div class="module-dialog" v-show="isShowDeleteAddressDialog">
                    <div class="dialog-panel delete-address-dialog">
                        <div class="topbar">
                            <div class="dialog-tit">
                                <h4>提示</h4>
                            </div>
                            <span class="dialog-close" @click="hideDeleteAddressDialog"></span>
                        </div>
                        <div class="dialog-con">
                            <div class="confirm-msg">
                                <div class="warning"></div>
                                确认删除地址？
                            </div>
                        </div>
                        <div class="dialog-btn-wrap clearfix">
                            <div class="blue-main-btn" @click.stop="confirmDeleteAddressDialog">
                                <a>确定</a>
                            </div>
                            <div class="gray-normal-btn" @click="hideDeleteAddressDialog">
                                <a>取消</a>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>

            <transition name="fade">
                <div class="module-dialog" v-show="isShowNullInvoiceTitleDialog">
                    <div class="dialog-panel null-address-dialog">
                        <div class="topbar">
                            <div class="dialog-tit">
                                <h4>提示</h4>
                            </div>
                            <span class="dialog-close" @click="hideNullInvoiceTitleDialog"></span>
                        </div>
                        <div class="dialog-con">
                            <div class="confirm-msg">
                                请填写发票抬头
                            </div>
                        </div>
                        <div class="dialog-btn-wrap clearfix">
                            <div class="blue-main-btn" @click="hideNullInvoiceTitleDialog">
                                <a>确定</a>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <loading v-if="pageLoading"></loading>
        <m-footer></m-footer>
    </div>
</template>

<script type="text/ecmascript-6">
import header from '../header/header';
import footer from '../footer/footer';
import loading from '../loading/page-loading';

export default {
  name: 'item',
  components: {
    'm-header': header,
    'm-footer': footer,
    loading: loading
  },
  data() {
    return {
      pageLoading: false,
      isShow: false,
      isShowAddressDialog: false,
      isShowConfirmDialog: false,
      isShowNullAddressDialog: false,
      isShowDeleteAddressDialog: false,
      isShowEditAddressDialog: false,
      showOpreationIndex: -1,
      deleteAddressIndex: 0,
      isShowInvoiceDetail: false,
      isShowTitleInput: false,
      isShowNullInvoiceTitleDialog: false,
      addressForm: {
        accept_name: '',
        mobile: '',
        area_code: '',
        telephone: '',
        province_code: '请选择省份',
        city_code: '请选择城市',
        district_code: '请选择区县',
        street: ''
      },
      editAddressForm: '',
      nid: '',
      addressList: [],
      info: '',
      addressSelectedIndex: 0,
      province_code: 0,
      city_code: 0,
      district_code: 0,
      provinces: [],
      cities: [],
      districts: [],
      html: '',
      invoiceTmpTitle: '',
      invoiceTitle: '个人',
      extraDesc: ''
    };
  },
  watch: {
    province_code(newVal, oldVal) {
      //   var vm = this;
      //   $.get(
      //     '__APP__/shop/checkout/getCities',
      //     {
      //       province_code: this.province_code
      //     },
      //     function(ret) {
      //       vm.$nextTick(function() {
      //         vm.cities = ret.data;
      //       });
      //     }
      //   );
    },
    city_code(newVal, oldVal) {
      //   var vm = this;
      //   $.get(
      //     '__APP__/shop/checkout/getDistricts',
      //     {
      //       city_code: this.city_code
      //     },
      //     function(ret) {
      //       vm.$nextTick(function() {
      //         vm.districts = ret.data;
      //       });
      //     }
      //   );
    }
  },
  computed: {
    proUrl() {
      return '__APP__/shop/item?id=' + this.info.p_id;
    },
    invoicePrice() {
      return this.info.price * this.info.num * 0.08;
    },
    totalPrice() {
      if (this.isShowInvoiceDetail) {
        return this.info.price * this.info.num + this.invoicePrice;
      } else {
        return this.info.price * this.info.num;
      }
    }
  },
  methods: {
    showAddressDialog(index) {
      console.log(index);
      if (index === -1) {
        console.log(index);
        // 新增地址

        // 清空 addressForm
        this.addressForm.accept_name = '';
        this.addressForm.mobile = '';
        this.addressForm.area_code = '';
        this.addressForm.telephone = '';
        this.addressForm.province_code = '请选择省份';
        this.addressForm.city_code = '请选择城市';
        this.addressForm.district_code = '请选择区县';
        this.addressForm.street = '';

        // var vm = this;
        // 拉取省市区信息
        // $.get('__APP__/shop/checkout/getProvinces', function(ret) {
        //   vm.provinces = ret.data;
        // });
      } else {
        // 修改地址
        console.log(index);
      }

      this.isShow = true;
      this.isShowAddressDialog = true;
    },
    showConfirmDialog() {
      var vm = this;

      // 判断是否有地址
      var length = vm.addressList.length;

      if (length !== 0) {
        // 动态添加收货信息
        var html =
          '<div class="delivery-info">' +
          '<h6 class="info-title">收货信息</h6>' +
          '<p class="detail">' +
          vm.addressList[vm.addressSelectedIndex].accept_name +
          '，' +
          vm.addressList[vm.addressSelectedIndex].mobile +
          ' </p>' +
          '<p class="detail">' +
          vm.addressList[vm.addressSelectedIndex].province +
          ' ' +
          vm.addressList[vm.addressSelectedIndex].city +
          ' ' +
          vm.addressList[vm.addressSelectedIndex].district +
          ' ' +
          vm.addressList[vm.addressSelectedIndex].street +
          '</p>' +
          '</div>';

        if (
          vm.isShowInvoiceDetail &&
          vm.isShowTitleInput &&
          vm.invoiceTmpTitle.length === 0
        ) {
          vm.isShow = true;
          vm.isShowNullInvoiceTitleDialog = true;
          return;
        }

        // 动态添加发票信息
        if (vm.isShowInvoiceDetail) {
          var title = vm.isShowTitleInput ? vm.invoiceTmpTitle : '个人';
          vm.invoiceTitle = title;

          html +=
            '<div class="delivery-info">' +
            '<h6 class="info-title">发票信息</h6>' +
            '<p class="detail">发票类型：纸质普通发票</p>' +
            //                                    + '<p class="detail">发票抬头：' + vm.invoiceTitle + '</p>'
            '<p class="detail">发票抬头：' +
            title +
            '</p>' +
            '<p class="detail">发票内容：购买商品明细</p>' +
            '</div>';
        }

        // 动态添加备注信息
        if (vm.extraDesc.length !== 0) {
          html +=
            '<div class="delivery-info">' +
            '<h6 class="info-title">备注信息</h6>' +
            '<p class="detail">' +
            vm.extraDesc +
            '</p>' +
            '</div>';
        }

        vm.html = html;

        vm.isShow = true;
        vm.isShowConfirmDialog = true;
      } else {
        vm.isShow = true;
        vm.isShowNullAddressDialog = true;
      }
    },
    hideAddressDialog() {
      this.isShow = false;
      this.isShowAddressDialog = false;
    },
    hideConfirmDialog() {
      this.isShow = false;
      this.isShowConfirmDialog = false;
    },
    hideNullAddressDialog() {
      this.isShow = false;
      this.isShowNullAddressDialog = false;
    },
    showOperation(index) {
      this.showOpreationIndex = index;
    },
    hideOperation() {
      this.deleteAddressIndex = this.showOpreationIndex;
      this.showOpreationIndex = -1;
    },
    changeAddress(index) {
      this.addressSelectedIndex = index;
    },
    saveAddress() {
      var vm = this;
      vm.addressForm.province_code = vm.province_code;
      vm.addressForm.city_code = vm.city_code;
      vm.addressForm.district_code = vm.district_code;

      //   $.post('__APP__/shop/checkout/addAddress', vm.addressForm, function(ret) {
      //     // push in addressList
      //     if (ret.code === 'SUCCESS') {
      //       vm.addressList.unshift(ret.data);
      //       vm.isShow = false;
      //       vm.isShowAddressDialog = false;
      //     }
      //   });
    },
    showEditAddress(index) {
      var vm = this;
      vm.editAddressForm = vm.addressList[index];

      vm.editAddressForm.province_code = parseInt(
        vm.editAddressForm.province_code
      );
      vm.editAddressForm.city_code = parseInt(vm.editAddressForm.city_code);
      vm.editAddressForm.district_code = parseInt(
        vm.editAddressForm.district_code
      );

      vm.province_code = vm.editAddressForm.province_code;
      vm.city_code = vm.editAddressForm.city_code;
      vm.district_code = vm.editAddressForm.district_code;

      // 拉取省市区信息
      //   $.get('__APP__/shop/checkout/getProvinces', function(ret) {
      //     vm.provinces = ret.data;
      //   });

      vm.isShow = true;
      vm.isShowEditAddressDialog = true;
    },
    hideEditAddressDialog() {
      this.isShow = false;
      this.isShowEditAddressDialog = false;
    },
    editAddress() {
      var vm = this;
      vm.editAddressForm.province_code = vm.province_code;
      vm.editAddressForm.city_code = vm.city_code;
      vm.editAddressForm.district_code = vm.district_code;

      //   $.post('__APP__/shop/checkout/editAddress', vm.editAddressForm, function(
      //     ret
      //   ) {
      //     // push in addressList
      //     if (ret.code === 'SUCCESS') {
      //       vm.isShow = false;
      //       vm.isShowEditAddressDialog = false;
      //     }
      //   });
    },
    showDeleteAddress() {
      this.isShow = true;
      this.isShowDeleteAddressDialog = true;
    },
    hideDeleteAddressDialog() {
      this.isShow = false;
      this.isShowDeleteAddressDialog = false;
    },
    confirmDeleteAddressDialog() {
      //   var vm = this;
      // ajax
      //   $.post(
      //     '__APP__/shop/checkout/deleteAddress',
      //     {
      //       id: vm.addressList[vm.deleteAddressIndex].id
      //     },
      //     function(ret) {
      //       if (ret.code === 'SUCCESS') {
      //         vm.addressList.splice(vm.deleteAddressIndex, 1);
      //         // 重置 addressSelectedIndex 为 0，避免删除selected address被删除后造成的空选择情况
      //         vm.addressSelectedIndex = 0;
      //         vm.isShow = false;
      //         vm.isShowDeleteAddressDialog = false;
      //       }
      //     }
      //   );
    },
    showInvoiceDetail(bool) {
      if (bool === 1) {
        this.isShowInvoiceDetail = false;
      } else {
        this.isShowInvoiceDetail = true;
      }
    },
    changeTitle(bool) {
      if (bool === 1) {
        this.isShowTitleInput = false;
        this.invoiceTitle = '个人';
      } else {
        this.isShowTitleInput = true;
        this.invoiceTitle = this.invoiceTmpTitle;
      }
    },
    hideNullInvoiceTitleDialog() {
      this.isShow = false;
      this.isShowNullInvoiceTitleDialog = false;
    },
    postConfirm() {
      //   var vm = this;
      //   $.post(
      //     '__SELF__',
      //     {
      //       nid: vm.info.id,
      //       address: vm.addressList[vm.addressSelectedIndex],
      //       isInvoice: vm.isShowInvoiceDetail,
      //       invoice_title: vm.invoiceTitle,
      //       extra_desc: vm.extraDesc
      //     },
      //     function(ret) {
      //       window.location.href = ret.referer;
      //     }
      //   );
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.blue-radio
    overflow hidden
    display inline-block
    position relative
    top 2px
    width 10px
    height 10px
    padding 4px
    background #F9F9F9
    background linear-gradient(#F5F6F6, #FDFDFD)
    border 1px solid #E6E6E6
    border-radius 10px
    box-shadow 0 2px 4px rgba(0, 0, 0, 0.05) inset
    cursor pointer

    a
        overflow hidden
        display block
        width 8px
        height 8px
        background #6C94F3
        background linear-gradient(#749AF4, #668EF2)
        border 1px solid #5D81D9
        border-radius 10px
        box-shadow 0 1px 2px rgba(0, 0, 0, 0.2)

.choose-radio-on
    .blue-radio
        a
            overflow hidden
            display block
            width 8px
            height 8px
            background #6C94F3
            background linear-gradient(#749AF4, #668EF2)
            border 1px solid #5D81D9
            border-radius 10px
            box-shadow 0 1px 2px rgba(0, 0, 0, 0.2)

.main
    min-height 527px
    background #E6E6E6

    .content
        clear both
        width 1220px
        min-height 600px
        padding 0 0 25px
        margin 0 auto
        padding 25px 0

        .gray-box
            overflow hidden
            border 1px solid #D1D1D1
            border-color rgba(0, 0, 0, 0.14)
            border-radius 8px
            box-shadow 0 3px 8px -6px rgba(0, 0, 0, 0.1)
            margin-bottom 20px
            background #FFF

            .title
                height 60px
                padding 0 10px 0 28px
                background #F5F5F5
                background linear-gradient(#FFF, #F5F5F5)
                border-bottom 1px solid #DCDCDC
                border-radius 10px 10px 0 0
                box-shadow 0 1px 7px rgba(0, 0, 0, 0.06)
                line-height 60px
                color #646464

                h2
                    font-size 18px
                    font-weight 400
                    color #626262

            .address-common-table
                overflow hidden
                border-radius 0 0 8px 8px
                font-size 14px
                color #626262

                .address-item-list
                    padding 30px 13px 0

                    li
                        position relative
                        float left
                        width 276px
                        height 158px
                        margin 0 0 30px 16px
                        border 1px solid #E5E5E5
                        border-radius 3px
                        background-color #FAFAFA
                        line-height 14px
                        text-align left
                        word-wrap break-word
                        word-break normal
                        color #626262
                        cursor pointer
                        user-select none

                        &.selected-address-item
                            background #FFF
                            border-color #6A8FE5
                            background url('./icon-hook.png') 90% 10% no-repeat no-repeat
                            background-size 20px 20px

                        &:hover
                            background-color rgb(242, 242, 242)

                    .address-item
                        padding 19px 14px 0 19px

                .name-section
                    height 16px
                    padding-right 20px
                    line-height 16px
                    font-size 16px
                    color #666

                .mobile-section
                    height 14px
                    padding-top 17px
                    line-height 14px
                    color #999

                .detail-section
                    padding-top 6px
                    line-height 24px
                    color #999

                .operation-section
                    position absolute
                    left 0
                    bottom 29px
                    width 100%
                    height 28px
                    background #E1E1E1
                    border-top 1px solid #E1E1E1
                    transition all 0.2s ease
                    transform translate(0, 29px)

                    .delete-btn, .update-btn
                        float left
                        display block
                        height 28px
                        background #FFF
                        text-align center
                        line-height 28px
                        font-size 12px
                        transition background 0.15s ease

                        &:hover
                            background-color rgb(242, 242, 242)

                    .delete-btn
                        float right
                        width 138px
                        border-bottom-right-radius 3px
                        border-bottom-left-radius 3px

                    .update-btn
                        width 137px
                        border-bottom-right-radius 3px
                        border-bottom-left-radius 3px

                .add-address-item
                    background url('./icon-add.png') center 40% no-repeat no-repeat

                    p
                        height 14px
                        padding-top 85px
                        line-height 14px
                        text-align center
                        color #999

            .invoice-box
                padding 22px 29px 29px 28px
                font-size 14px

                .invoice-detail
                    position relative
                    height 36px
                    line-height 36px
                    color #666

                    .radio-box
                        position absolute
                        left 70px
                        top 6px
                        padding 0
                        margin 0

                        &.margin-left
                            position absolute
                            left 100px
                            top 6px
                            padding 0
                            margin 0

                        .one-radio
                            float left
                            font-size 0
                            margin-right 5px
                            line-height 36px

                            span
                                display inline-block
                                vertical-align top
                                font-size 14px
                                line-height 24px
                                user-select none

                                &:first-child
                                    margin-right 5px

                    .input-box
                        position absolute
                        left 190px
                        top 1px
                        width 338px
                        height 34px
                        line-height 34px
                        border 1px solid #ccc
                        opacity 1
                        border-radius 4px

                        input
                            position relative
                            z-index 3
                            width 310px
                            margin-top 6px
                            padding 0 11px 0 15px
                            background 0 0
                            border none
                            font-size 14px
                            color #333

                .invoice-label
                    position relative
                    padding-top 25px
                    margin-top 11px
                    border-top 1px solid #E5E5E5
                    line-height 12px
                    text-indent 10px
                    font-size 12px
                    color #999

            .sub-title
                height 38px
                padding 0 0 0 29px
                background #EEE
                border-top none
                border-bottom 1px solid #DBDBDB
                line-height 38px
                font-size 12px
                color #666

                .name
                    float left
                    text-align left

                .subtotal
                    float right
                    width 130px
                    padding-right 29px
                    text-align right

                .num
                    float right
                    width 132px
                    padding-right 29px
                    text-align right

                .price
                    float right
                    width 120px
                    padding-right 29px
                    text-align right

            .cart-table
                .cart-items
                    display table
                    position relative
                    height 110px
                    padding 15px 0 15px 29px
                    color #666

                    &:first-child
                        border-top none

                    .items-thumb
                        display table-cell
                        vertical-align middle
                        width 78px
                        height 100%
                        margin-top 15px

                        img
                            width 78px
                            height 78px
                            border-radius 4px
                            border 1px solid #EBEBEB

                    .name
                        display table-cell
                        vertical-align middle
                        width 420px
                        max-width 420px
                        width 420px
                        height 100%
                        padding-left 30px
                        line-height 24px

                        p
                            color #bdbdbd

                    .subtotal
                        display table-cell
                        vertical-align middle
                        width 129px
                        height 100%
                        padding-left 165px
                        text-align right
                        line-height 24px
                        color #333

                    .goods-num
                        display table-cell
                        vertical-align middle
                        overflow hidden
                        width 64px
                        height 100%
                        padding-left 110px
                        text-align center
                        color #333

                    .price
                        display table-cell
                        vertical-align middle
                        overflow hidden
                        width 120px
                        height 100%
                        padding-left 20px
                        line-height 110px
                        text-align right
                        color #333

            .order-discount-line
                padding 21px 30px
                border-top 1px solid #EBEBEB
                line-height 30px
                text-align right

                span
                    float right
                    width 157px

            .extra-desc
                padding 10px 28px
                line-height 36px
                color #666
                border-top 1px solid #EBEBEB
                font-size 14px

                .input-box
                    display inline-block
                    margin-left 35px
                    width 500px
                    border 1px solid #CCC
                    border-radius 4px

                    input
                        margin 0 15px 0 15px
                        width 470px
                        height 25px
                        border none

            .last-payment
                padding 22px 29px 19px 30px
                background #F5F5F5
                background linear-gradient(#FCFCFC, #F5F5F5)
                border-top 1px solid #DADADA
                box-shadow -3px 0 8px rgba(0, 0, 0, 0.04)

                .prices
                    float right
                    padding 0 40px
                    line-height 50px
                    font-size 14px

                    em
                        display inline-block
                        position relative
                        top 3px
                        margin-top -4px
                        font-size 24px
                        color #D44D44
                        font-style normal

                .payment-bt
                    float right
                    display block
                    width 136px
                    height 46px
                    line-height 46px
                    text-align center
                    font-size 16px
                    padding 1px
                    margin 0 auto
                    border-radius 6px
                    user-select none
                    cursor pointer
                    background #5F7ED7
                    background linear-gradient(#6F97E5, #527ED9)
                    box-shadow inset 0 1px 2px #7EA1E8
                    text-shadow 0 -1px 0 #4F70B3
                    color #FFF
                    transition all 0.3s ease

                    &:hover
                        box-shadow none
                        background #6383C6
                        background linear-gradient(#6383C6, #4262AF)

.fade-enter-active, .fade-leave-active
    transition opacity 0.2s ease-in

.fade-enter, .fade-leave-active
    opacity 0

.module-dialog-layer
    position fixed
    left 0
    top 0
    z-index 1000
    width 100%
    height 100%
    background-color #000
    opacity 0.6

.module-dialog
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    z-index 1001
    text-align center

    &:after
        display inline-block
        vertical-align middle
        content ' '
        height 100%

    .dialog-panel
        position relative
        display inline-block
        vertical-align middle
        width 450px
        min-width 200px
        background #FFF
        border-radius 10px
        box-shadow 0 0 0 1px rgba(0, 0, 0, 0.1) inset, 1px 0 3px rgba(0, 0, 0, 0.1)
        text-align left

        &.address-dialog
            height 655px

    .topbar
        position relative
        z-index 10
        overflow hidden
        width 100%
        height 60px
        background #F5F5F5
        background linear-gradient(#FFF, #F5F5F5)
        border-bottom 1px solid #DCDCDC
        border-radius 10px 10px 0 0
        box-shadow 2px 0 5px rgba(0, 0, 0, 0.1)

    .dialog-tit
        height 60px
        padding 0 15px
        line-height 60px

        h4
            text-align center
            font-size 18px
            font-weight 400
            color #666

    .dialog-close
        position absolute
        right 10px
        top 15px
        z-index 20
        width 30px
        height 30px
        background url('./icon-cha.png') center center no-repeat
        cursor pointer

    .dialog-con
        min-width 220px
        min-height 150px

    .animate-layer
        position relative
        width 450px

    .save-address-box
        width 450px
        padding-top 29px

        .address-form
            width 370px
            margin 0 auto

            .module-form-row
                position relative
                padding-bottom 15px
                margin 0 auto
                font-size 14px
                color #626262

                .form-item-v3
                    position relative
                    height 46px
                    background #FFF
                    border 1px solid #CCC
                    border-radius 6px
                    box-shadow 0 3px 5px -4px rgba(0, 0, 0, 0.4) inset, -1px 0 3px -2px rgba(0, 0, 0, 0.1) inset
                    line-height 46px
                    font-size 18px
                    opacity 0.618
                    -moz-transition opacity 0.3s ease
                    -webkit-transition opacity 0.3s ease
                    transition opacity 0.3s ease

                    i
                        position absolute
                        left 15px
                        top 0
                        font-size 16px
                        color #BEBEBE

                    input
                        width 330px
                        padding 0 15px
                        background-color transparent
                        border none
                        font-size 16px

                    &.select-item
                        width auto
                        height auto
                        margin 0
                        background 0 0
                        border none
                        box-shadow none
                        opacity 1

                        .form-item-select-after
                            display block
                            position absolute
                            right 19px
                            top 22px
                            z-index 2
                            width 10px
                            height 9px
                            background url('./icon-xiasanjiao.png') center center no-repeat

                    select
                        height 48px
                        padding 0 15px
                        margin 0
                        background -webkit-linear-gradient(top, #FAFAFA, #F5F5F5)
                        background linear-gradient(#FAFAFA, #F5F5F5)
                        border 1px solid #CCC
                        border-radius 6px
                        box-shadow 2px 0 0 rgba(255, 255, 255, 0.4) inset, 1px 0 0 rgba(255, 255, 255, 0.3)
                        line-height 48px
                        text-indent 0
                        outline 0
                        -webkit-appearance none
                        -moz-appearance none
                        cursor pointer

                .blue-checkbox
                    display inline-block
                    position relative
                    top 0
                    float left
                    margin-right 5px
                    width 20px
                    height 20px
                    background url('./icon-checkbox-gray.png') center center no-repeat
                    background-size 18px 18px
                    cursor pointer
                    -moz-user-select none
                    -webkit-user-select none
                    -ms-user-select none

                    &.blue-checkbox-on
                        background url('./icon-checkbox.png') center center no-repeat
                        background-size 18px 18px

    .warning
        display inline-block
        position relative
        left -15px
        top 20px
        width 50px
        height 50px
        margin-top -20px
        background url('./warning.png') no-repeat

.select-province
    width 370px

.select-city, .select-district
    width 180px

.fn-hide
    display none

.address-dialog
    .dialog-blue-btn
        padding 1px
        background #6383C6
        background linear-gradient(#6383C6, #4262AF)
        border-radius 6px
        text-align center
        color #FFF

        &.disabled-btn
            opacity 0.5

        a
            display block
            height 42px
            line-height 42px
            font-size 18px
            padding 2px 0
            background #5F7ED7
            background linear-gradient(#6F97E5, #527ED9)
            border-radius 5px
            box-shadow inset 0 1px 2px #7EA1E8
            text-shadow 0 -1px 0 #4F70B3
            color #FFF

.confirm-dialog
    .delivery-info
        padding 28px 0 24px
        width 390px
        margin 0 auto

    .info-title
        height 20px
        margin-bottom 13px
        line-height 20px
        font-size 18px
        font-weight 500
        color #333

    .detail
        line-height 24px
        font-size 14px
        color #666

    .confirm-btn-wrapper
        padding 3px 0 27px
        width 390px
        margin 0 auto

    .dialog-gray-btn
        float left
        width 182px
        height 46px
        padding 1px
        background #CCC
        background rgba(204, 204, 204, 0.618)
        border-radius 6px
        text-align center
        color #666
        display block
        cursor pointer

        a
            display block
            cursor pointer
            font-size 16px
            padding 2px 0
            background #ECECEC
            background linear-gradient(#FAFAFA, #F5F5F5)
            border-radius 5px
            box-shadow inset 0 1px rgba(255, 255, 255, 0.3)
            text-shadow 0 1px 0 #FFF
            color #666
            height 42px
            line-height 42px
            user-select none

    .dialog-blue-btn
        float right
        width 182px
        padding 1px
        background #6383C6
        background linear-gradient(#6383C6, #4262AF)
        border-radius 6px
        text-align center
        color #FFF

        &.disabled-btn
            opacity 0.5

        a
            display block
            cursor pointer
            height 42px
            line-height 42px
            font-size 18px
            padding 2px 0
            background #5F7ED7
            background linear-gradient(#6F97E5, #527ED9)
            border-radius 5px
            box-shadow inset 0 1px 2px #7EA1E8
            text-shadow 0 -1px 0 #4F70B3
            color #FFF
            user-select none

.null-address-dialog
    .dialog-con
        min-width 220px
        min-height 0

    .confirm-msg
        max-width 310px
        min-height 50px
        margin 50px auto
        line-height 24px
        text-align center
        word-wrap break-word
        word-break break-all
        font-size 16px

    .dialog-btn-wrap
        height 51px
        padding 18px 10px 0
        line-height 51px
        border-radius 0 0 13px 13px
        box-shadow 0px 0px 20px 0px rgba(0, 0, 0, 0.3)

        .blue-main-btn
            display block
            float right
            width 100px
            height 38px
            text-shadow rgba(255, 255, 255, 0.498039) 0px 1px 0px
            font-family 'Microsoft Yahei', '微软雅黑', 'PingFang SC', sans-serif
            user-select none
            padding 1px
            margin 0px auto
            border-radius 6px
            background linear-gradient(rgb(85, 152, 201), rgb(42, 109, 162))

            a
                display block
                width 100px
                height 34px
                line-height 34px
                padding 2px 0
                border-radius 6px
                background #5f7ed7
                background -webkit-linear-gradient(#739fe1, #5f7ed7)
                background -moz-linear-gradient(#739fe1, #5f7ed7)
                background -ms-linear-gradient(#739fe1, #5f7ed7)
                background -o-linear-gradient(#739fe1, #5f7ed7)
                background linear-gradient(#739fe1, #5f7ed7)
                box-shadow inset 0 1px 3px #92b6ec, inset 0 0 2px #627dca, inset 0 -2px 3px #4c69b8
                text-shadow #4f70b3 0 -1px 0
                cursor pointer
                color #fff
                transition all 0.3s ease
                -moz-transition all 0.3s ease
                -webkit-transition all 0.3s ease
                -o-transition all 0.3s ease
                text-align center

.delete-address-dialog
    .dialog-con
        min-width 220px
        min-height 0

    .confirm-msg
        max-width 310px
        min-height 50px
        margin 50px auto
        line-height 24px
        text-align center
        word-wrap break-word
        word-break break-all
        font-size 16px

    .dialog-btn-wrap
        height 51px
        padding 18px 10px 0
        line-height 51px
        border-radius 0 0 13px 13px
        box-shadow 0px 0px 20px 0px rgba(0, 0, 0, 0.3)

        .blue-main-btn
            display block
            float right
            width 100px
            height 38px
            text-shadow rgba(255, 255, 255, 0.498039) 0px 1px 0px
            font-family 'Microsoft Yahei', '微软雅黑', 'PingFang SC', sans-serif
            user-select none
            padding 1px
            margin 0px auto
            border-radius 6px
            background linear-gradient(rgb(85, 152, 201), rgb(42, 109, 162))

            a
                display block
                width 100px
                height 34px
                line-height 34px
                padding 2px 0
                border-radius 6px
                background #5f7ed7
                background -webkit-linear-gradient(#739fe1, #5f7ed7)
                background -moz-linear-gradient(#739fe1, #5f7ed7)
                background -ms-linear-gradient(#739fe1, #5f7ed7)
                background -o-linear-gradient(#739fe1, #5f7ed7)
                background linear-gradient(#739fe1, #5f7ed7)
                box-shadow inset 0 1px 3px #92b6ec, inset 0 0 2px #627dca, inset 0 -2px 3px #4c69b8
                text-shadow #4f70b3 0 -1px 0
                cursor pointer
                color #fff
                transition all 0.3s ease
                -moz-transition all 0.3s ease
                -webkit-transition all 0.3s ease
                -o-transition all 0.3s ease
                text-align center

        .gray-normal-btn
            display inline-block
            float left
            width 100px
            height 38px
            line-height 38px
            background #F2F2F2
            background linear-gradient(#fff, #ececec)
            border 1px solid #dbdde2
            border-radius 6px
            cursor pointer
            overflow hidden
            text-align center

.slideIn-enter-active, .slideIn-leave-active
    transition bottom 0s

.slideIn-enter, .slideIn-leave-active
    bottom 0
</style>

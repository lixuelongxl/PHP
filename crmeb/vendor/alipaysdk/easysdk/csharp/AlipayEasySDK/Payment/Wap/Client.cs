// This file is auto-generated, don't edit it. Thanks.

using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

using Tea;
using Tea.Utils;

using Alipay.EasySDK.Payment.Wap.Models;

namespace Alipay.EasySDK.Payment.Wap
{
    public class Client 
    {
        protected Alipay.EasySDK.Kernel.Client _kernel;

        public Client(Alipay.EasySDK.Kernel.Client kernel)
        {
            this._kernel = kernel;
        }


        public AlipayTradeWapPayResponse Pay(string subject, string outTradeNo, string totalAmount, string quitUrl, string returnUrl)
        {
            Dictionary<string, string> systemParams = new Dictionary<string, string>
            {
                {"method", "alipay.trade.wap.pay"},
                {"app_id", this._kernel.GetConfig("appId")},
                {"timestamp", this._kernel.GetTimestamp()},
                {"format", "json"},
                {"version", "1.0"},
                {"alipay_sdk", this._kernel.GetSdkVersion()},
                {"charset", "UTF-8"},
                {"sign_type", this._kernel.GetConfig("signType")},
                {"app_cert_sn", this._kernel.GetMerchantCertSN()},
                {"alipay_root_cert_sn", this._kernel.GetAlipayRootCertSN()},
            };
            Dictionary<string, object> bizParams = new Dictionary<string, object>
            {
                {"subject", subject},
                {"out_trade_no", outTradeNo},
                {"total_amount", totalAmount},
                {"quit_url", quitUrl},
                {"product_code", "QUICK_WAP_WAY"},
            };
            Dictionary<string, string> textParams = new Dictionary<string, string>
            {
                {"return_url", returnUrl},
            };
            string sign = this._kernel.Sign(systemParams, bizParams, textParams, this._kernel.GetConfig("merchantPrivateKey"));
            Dictionary<string, string> response = new Dictionary<string, string>
            {
                {"body", this._kernel.GeneratePage("POST", systemParams, bizParams, textParams, sign)},
            };
            return TeaModel.ToObject<AlipayTradeWapPayResponse>(response);
        }

        
        /// <summary>
        /// ISV????????????????????????appAuthToken
        /// </summary>
        /// <param name="appAuthToken">?????????token</param>
        /// <returns>?????????????????????????????????</returns>
        public Client Agent(string appAuthToken)
        {
            _kernel.InjectTextParam("app_auth_token", appAuthToken);
            return this;
        }

        /// <summary>
        /// ???????????????????????????authToken
        /// </summary>
        /// <param name="authToken">????????????token</param>
        /// <returns>?????????????????????????????????</returns>
        public Client Auth(string authToken)
        {
            _kernel.InjectTextParam("auth_token", authToken);
            return this;
        }

        /// <summary>
        /// ?????????????????????????????????????????????????????????????????????Config??????????????????
        /// </summary>
        /// <param name="url">????????????????????????????????????https://www.test.com/callback </param>
        /// <returns>?????????????????????????????????</returns>
        public Client AsyncNotify(string url)
        {
            _kernel.InjectTextParam("notify_url", url);
            return this;
        }

        /// <summary>
        /// ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        /// </summary>
        /// <param name="testUrl">????????????????????????</param>
        /// <returns>?????????????????????????????????</returns>
        public Client Route(string testUrl)
        {
            _kernel.InjectTextParam("ws_service_url", testUrl);
            return this;
        }

        /// <summary>
        /// ??????API????????????????????????????????????????????????(biz_content????????????)
        /// </summary>
        /// <param name="key">???????????????????????????biz_content????????????????????????timeout_express???</param>
        /// <param name="value">
        /// ???????????????????????????????????????????????????JSON?????????
        /// ??????????????????????????????????????????String???Price???Date???SDK?????????????????????????????????string??????
        /// ???????????????????????????????????????????????????Number???????????????long??????
        /// ?????????????????????????????????????????????????????????Dictionary???????????????????????????
        /// ??????????????????????????????????????????List???????????????
        /// ????????????????????????????????????Dictionary???List????????????????????????????????????????????????List???List???????????????????????????????????????
        /// </param>
        /// <returns>?????????????????????????????????</returns>
        public Client Optional(string key, object value)
        {
            _kernel.InjectBizParam(key, value);
            return this;
        }

        /// <summary>
        /// ????????????API????????????????????????????????????????????????(biz_content????????????)
        /// optional?????????????????????
        /// </summary>
        /// <param name="optionalArgs">????????????????????????????????????key???value?????????key???value??????????????????optional???????????????</param>
        /// <returns>?????????????????????????????????</returns>
        public Client BatchOptional(Dictionary<string, object> optionalArgs)
        {
            foreach (var pair in optionalArgs)
            {
                _kernel.InjectBizParam(pair.Key, pair.Value);
            }
            return this;
        }
    }
}
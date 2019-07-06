import * as soap from 'soap'

interface IResult {
    verify: boolean
    ops: IArgs
}

interface IError {
    err: {}
}

interface Callback { (error: IError, result: IResult): void }

export class TCID {
    public WSDL_URI: string = "https://tckimlik.nvi.gov.tr/Service/KPSPublic.asmx?WSDL"
    verif(args: IArgs, callback?: Callback): {} {
        args.Ad = args.Ad.toUpperCase(); args.Soyad = args.Soyad.toUpperCase();
        if (callback) {
            soap.createClient(this.WSDL_URI, function (err, client: soap.Client) {
                (err) && callback({ err }, undefined)
                client.TCKimlikNoDogrula(args, function (err: {}, result: { TCKimlikNoDogrulaResult: boolean }) {
                    (err) ? callback({ err }, undefined) : callback(undefined, <IResult>{ verify: result.TCKimlikNoDogrulaResult, ops: args })
                });
            });
        } else {
            return new Promise((res, rej) => {
                soap.createClient(this.WSDL_URI, function (err, client: soap.Client) {
                    (err) && rej(err)
                    client.TCKimlikNoDogrula(args, function (err: {}, result: { TCKimlikNoDogrulaResult: boolean }) {
                        (err) ? rej(err) : res(<IResult>{ verify: result.TCKimlikNoDogrulaResult, ops: args })
                    });
                });
            })
        }
    }
}

export interface IArgs {
    TCKimlikNo: number
    Ad: string
    Soyad: string
    DogumYili: number
}
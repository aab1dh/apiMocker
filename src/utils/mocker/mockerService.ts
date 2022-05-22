const casual = require('casual');
import { definition } from '../definitions/casualDefinition';

export class mockerService {
    public static mocker(name: string, model: any, opts?: { repeat?: number, overrides?: any }): Promise<any> {
        let repeat = 0
        if (opts?.repeat) repeat = opts?.repeat;
        casual.define(name, function () {
            return mockerService.casualMapper(model, opts?.overrides)
        })

        let data: any;

        if (repeat > 0) {
            data = []
            for (let i = 0; i < repeat; i++) {

                data.push({ ...casual[name] })
            }
        } else {
            data = { ...casual[name] }
        }
        return new Promise(resolve => resolve(data))
    }

    private static casualMapper(model: any, overrides?: any): Promise<any> {
        const data: any = {}

        for (const key in model) {
            // Object.keys(overrides).forEach(override => {
            //     if (overrides?.[override]) {
            //         console.log(Object.keys(overrides?.[override]))
            //         if (model[key]) model[key].forEach((element: any) => {
            //             console.log(element)
            //         });
            //         // if (Array.isArray(model[key])) {
            //         //     model[key] = model[key].map((item: any) => {
            //         //         return item[overrides[key]]
            //         //     })
            //         // }
            //     }
            // })

            if (Array.isArray(model[key]) && overrides) {
                mockerService.localOverrides(model[key], model, overrides, key)
            }


            if (!definition.includes(key)) {
                // global overrrides
                mockerService.globalOverrides(key, data, model);
            } else {
                data[key] = casual[key]
            }
        }
        return data
    }

    private static globalOverrides(key: string, data: any, model: any): void {
        switch (key) {
            case 'id':
                data.id = casual.uuid;
                break;

            case 'number':
                data.number = casual.building_number;
                break;

            case 'name':
                data.name = casual.first_name;
                break;

            case 'surname':
                data.surname = casual.last_name;
                break;

            case 'postalCode':
                data.postalCode = casual.zip;
                break;

            case 'base':
                data.base = casual.random_element(model[key]);
                break;

            default:
                if (Array.isArray(model[key])) {

                    model[key].forEach((element: any) => {
                        Object.keys(element).forEach((keyInner: any, index: number) => {
                            if (definition.includes(keyInner)) {
                                for (let i = index; i <= index; i++) {
                                    if (model[key][i]) model[key][i][keyInner] = casual[keyInner]
                                }
                            }
                        })
                    })
                    model
                }
                data[key] = model[key];
                break;
        }

        if (Array.isArray(model[key])) {
            model[key].forEach((element: any) => {
                Object.keys(element).forEach((keyInner: any, index: number) => {
                    if (definition.includes(keyInner)) {
                        mockerService.localOverrides(model[key], model, definition, key)

                    }
                })
            })

        }
    }

    private static localOverrides(obj: any, model?: any, overrides?: any, key?: string) {
        // console.log(obj)
        // console.log(key)
        obj.forEach((element: any) => {
            // console.log(element)
            Object.keys(element).forEach((innerKey: any) => {
                if (Array.isArray(element[innerKey]) && isNaN(Number(innerKey))) {
                    // console.log(element[innerKey])
                    mockerService.localOverrides(element[innerKey])
                } else if (isNaN(Number(innerKey))) {
                    if (definition.includes(innerKey)) {
                        element[innerKey] = casual[innerKey]

                    } else {
                        Object.keys(element[innerKey]).forEach((keyInner: any) => {
                            if (definition.includes(keyInner)) {
                                element[innerKey][keyInner] = casual[keyInner]
                            }
                        })
                    }
                    if (overrides) {
                        Object.keys(element[innerKey]).forEach((keyInner: any) => {
                            if (Object.keys(overrides).includes(keyInner)) {
                                // element[innerKey][keyInner] = casual[keyInner]
                                // console.log(Object.keys(overrides).includes(keyInner))
                                // console.log(model)
                                // console.log('KEY', innerKey)
                                if (key) {
                                    if (Array.isArray(model[key])) {
                                        model[key].forEach((element: any) => {
                                            if (isNaN(Number(keyInner))) {
                                                element[innerKey][keyInner] = casual[overrides[keyInner]]
                                            }

                                        })
                                    }
                                } else if (key) {
                                    model[key][innerKey] = casual[innerKey]
                                }

                            }
                        }
                        )


                    }

                }

            })

        })
    }
}

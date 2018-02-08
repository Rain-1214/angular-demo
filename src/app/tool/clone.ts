
export class Clone {

    private static arrayTag = '[object Array]';
    private static objectTag = '[object Object]';

    private static loopPropertyArray = new Map();

    static shallowCopy(target: any): any {
        if (typeof target !== 'object') {
            return target;
        }
        const result = this.getTag(target) === this.arrayTag ? [] : {};
        for (const key in target) {
            if (target.hasOwnProperty(key)) {
                result[key] = target[key];
            }
        }
        return result;
    }

    static deepCopy(target: any): any {
        if (typeof target !== 'object') {
            return target;
        }
        const result = this.getTag(target) === this.arrayTag ? [] : {};
        for (const key in target) {
            if (target.hasOwnProperty(key)) {
                this.loopPropertyArray.set(key, target[key]);
                const currentTag = this.getTag(target[key]);
                if (currentTag === this.objectTag || currentTag === this.arrayTag) {
                    if (this.loopPropertyArray.has(key)) {
                        result[key] = this.loopPropertyArray.get(key);
                    } else {
                        result[key] = this.deepCopy(target[key]);
                    }
                } else {
                    result[key] = target[key];
                }
            }
        }
        this.loopPropertyArray = new Map();
        return result;
    }

    private static getTag(target: any): string {
        return Object.prototype.toString.call(target);
    }

}


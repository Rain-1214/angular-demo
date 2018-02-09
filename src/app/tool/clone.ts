import { ToolBase } from './ToolBase';

export class Clone extends ToolBase {

    private static loopPropertyArray = new Map();

    static shallowCopy(target: any): any {
        if (typeof target !== 'object') {
            return target;
        }
        const result = this.getValueTag(target) === this.tag.arrayTag ? [] : {};
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
        const result = this.getValueTag(target) === this.tag.arrayTag ? [] : {};
        for (const key in target) {
            if (target.hasOwnProperty(key)) {
                this.loopPropertyArray.set(key, target[key]);
                const currentTag = this.getValueTag(target[key]);
                if (currentTag === this.tag.arrayTag || currentTag === this.tag.objectTag) {
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

}


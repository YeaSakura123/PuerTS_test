
class AssertionError extends Error {
    actual: any;
    expected: any;
    operator: string;
    code: string;
    constructor(message: string, actual?: any, expected?: any, operator?: string) {
        super(message);
        this.actual = actual;
        this.expected = expected;
        this.operator = operator;
        this.code = 'ERR_TGAMEJS_ASSERT';
        this.name = 'AssertionError';
    }
}

export function equal(actual: any, expected: any, message?: string): void {
    if (actual != expected) {
        throw new AssertionError(message || `${actual} == ${expected}`, actual, expected, '==');
    }
}

export function notEqual(actual: any, expected: any, message?: string): void {
    if (actual == expected) {
        throw new AssertionError(message || `${actual} != ${expected}`, actual, expected, '!=');
    }
}

export function ok(actual: any, message?: string): void {
    if (!!actual == false) {
        throw new AssertionError(message || `${actual} != true`, actual, true, '==');
    }
}

// 期望函数抛出异常
export function throws(fn: () => void, message?: string): void {
    try {
        fn();
        throw new AssertionError(message || 'Expected function to throw', false, true, 'throws');
    } catch (error) {
        if (error instanceof AssertionError && error.operator === 'throws') {
            throw error;
        }
        // 函数成功抛出了异常，测试通过
    }
}

// 期望函数不抛出异常
export function doesNotThrow(fn: () => void, message?: string): void {
    try {
        fn();
        // 函数没有抛出异常，测试通过
    } catch (error) {
        throw new AssertionError(message || `Expected function not to throw, but it threw: ${error}`, true, false, 'doesNotThrow');
    }
}
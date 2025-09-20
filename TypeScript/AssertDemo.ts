const assert = require('./MyAssert');

console.log("=== 断言成功示例 ===");

// 1. 成功的断言 - 不会有任何输出
try {
    assert.equal(5, 5, "数字相等测试");
    console.log("✓ assert.equal(5, 5) - 成功，无输出");
} catch (e) {
    console.log("✗ 意外失败:", e.message);
}

try {
    assert.ok(true, "布尔值测试");
    console.log("✓ assert.ok(true) - 成功，无输出");
} catch (e) {
    console.log("✗ 意外失败:", e.message);
}

console.log("\n=== 断言失败示例 ===");

// 2. 失败的断言 - 会抛出AssertionError
try {
    assert.equal(5, 3, "数字不相等测试");
} catch (e) {
    console.log("✗ assert.equal(5, 3) 失败:");
    console.log("  错误类型:", e.name);
    console.log("  错误消息:", e.message);
    console.log("  实际值:", e.actual);
    console.log("  期望值:", e.expected);
    console.log("  操作符:", e.operator);
    console.log("  错误代码:", e.code);
}

try {
    assert.notEqual("hello", "hello", "字符串相等测试");
} catch (e) {
    console.log("✗ assert.notEqual('hello', 'hello') 失败:");
    console.log("  错误消息:", e.message);
    console.log("  实际值:", e.actual);
    console.log("  期望值:", e.expected);
}

try {
    assert.ok(false, "布尔值false测试");
} catch (e) {
    console.log("✗ assert.ok(false) 失败:");
    console.log("  错误消息:", e.message);
    console.log("  实际值:", e.actual);
    console.log("  期望值:", e.expected);
}
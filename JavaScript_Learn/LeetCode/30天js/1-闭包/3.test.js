// 引入或直接使用已有的expect函数（假设与算法文件同目录）
const counter = createCounter(5);

// 测试increment方法：初始值为5，调用后应返回6
expect(counter.increment()).toBe(6);

// 测试reset方法：调用后应恢复初始值5
expect(counter.reset()).toBe(5);

// 测试decrement方法：初始值为5，调用后应返回4
expect(counter.decrement()).toBe(4);

// 测试边界：初始值为0时的decrement
const zeroCounter = createCounter(0);
expect(zeroCounter.decrement()).toBe(-1); // 验证是否处理负数情况
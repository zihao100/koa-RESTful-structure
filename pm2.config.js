module.exports = {
    apps: [
        {
            // 测试环境
            name: "test",
            script: "./bin/www",
            cwd: "./",
            watch: false, // 默认关闭watch 可替换为 ['src']
            instance_var: "INSTANCE_ID",
            ignore_watch: ["node_modules", "build", "logs"],
            log_date_format: "YYYY-MM-DD HH:mm:ss.SSS",
            out_file: "./logs/out.log", // 日志输出
            merge_logs: true,
            error_file: "./logs/error.log", // 错误日志
            max_memory_restart: "2G", // 超过多大内存自动重启，仅防止内存泄露有意义，需要根据自己的业务设置
            exec_mode: "cluster", // 开启多线程模式，用于负载均衡
            instances: 1, // 启用多少个实例，可用于负载均衡
            autorestart: true, // 程序崩溃后自动重启
            env: {
                NODE_ENV: "test",
                PORT: 3001,
            },
        },

        {
            // 预发布环境
            name: "pre",
            script: "./bin/www",
            cwd: "./",
            watch: false, // 默认关闭watch 可替换为 ['src']
            instance_var: "INSTANCE_ID",
            ignore_watch: ["node_modules", "build", "logs"],
            log_date_format: "YYYY-MM-DD HH:mm:ss.SSS",
            out_file: "./logs/out.log", // 日志输出
            merge_logs: true,
            error_file: "./logs/error.log", // 错误日志
            max_memory_restart: "2G", // 超过多大内存自动重启，仅防止内存泄露有意义，需要根据自己的业务设置
            exec_mode: "cluster", // 开启多线程模式，用于负载均衡
            instances: "max", // 启用多少个实例，可用于负载均衡
            autorestart: true, // 程序崩溃后自动重启
            // 项目环境变量
            env: {
                NODE_ENV: "pre",
                PORT: 3002,
            },
        },

        {
            // 生产环境
            name: "prod",
            script: "./bin/www",
            cwd: "./",
            watch: false, // 默认关闭watch 可替换为 ['src']
            instance_var: "INSTANCE_ID",
            ignore_watch: ["node_modules", "build", "logs"],
            log_date_format: "YYYY-MM-DD HH:mm:ss.SSS",
            out_file: "./logs/out.log", // 日志输出
            merge_logs: true,
            error_file: "./logs/error.log", // 错误日志
            max_memory_restart: "2G", // 超过多大内存自动重启，仅防止内存泄露有意义，需要根据自己的业务设置
            exec_mode: "cluster", // 开启多线程模式，用于负载均衡
            instances: "max", // 启用多少个实例，可用于负载均衡
            autorestart: true, // 程序崩溃后自动重启
            // 项目环境变量
            env: {
                NODE_ENV: "prod",
                PORT: 3000,
            },
        },
    ],
}

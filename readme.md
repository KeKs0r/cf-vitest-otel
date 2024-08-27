# Issue with vitest & otel

## Setup

run `npm install`

## Run tests for issue

```
npm run test
```

This should lead to following error:

```
> cf-vitest-otel@0.0.0 test
> vitest


 DEV  v1.5.0 /Users/marc/Workspace/cf-vitest-otel

[vpw:inf] Starting isolated runtimes for vitest.config.mts...
workerd/server/server.c++:2882: error: Fallback service failed to fetch module; payload = ; spec = /?specifier=%2FUsers%2Fmarc%2FWorkspace%2Fcf-vitest-otel%2Fnode_modules%2F%40opentelemetry%2Fcore%2Fbuild%2Fesm%2Fplatform%2Fnode%2Fperf_hooks&referrer=%2FUsers%2Fmarc%2FWorkspace%2Fcf-vitest-otel%2Fnode_modules%2F%40opentelemetry%2Fcore%2Fbuild%2Fesm%2Fplatform%2Fnode%2Fperformance.js&rawSpecifier=perf_hooks
 ❯ test/index.spec.ts (0)

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Suites 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  test/index.spec.ts [ test/index.spec.ts ]
Error: No such module "Users/marc/Workspace/cf-vitest-otel/node_modules/@opentelemetry/core/build/esm/platform/node/perf_hooks".
  imported from "Users/marc/Workspace/cf-vitest-otel/node_modules/@opentelemetry/core/build/esm/platform/node/performance.js"
```

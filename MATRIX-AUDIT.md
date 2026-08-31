# Matrix Failures Audit

| OS | Node Version | Failed Step | Error Message | Failure Type | Planned Fix |
|---|---|---|---|---|---|
| windows-latest | 18 | `npm test` | `Expected: "...\\src\\output\\report.txt" Received: "...\\src/output/report.txt"` | OS-specific | Use `path.join` for paths, normalize line endings in test assertions. |
| windows-latest | 20 | `npm test` | `Expected: "...\\src\\output\\report.txt" Received: "...\\src/output/report.txt"` | OS-specific | Use `path.join` for paths, normalize line endings in test assertions. |
| windows-latest | 22 | `npm test` | `TypeError: crypto.createCipher is not a function` (and path issues) | Runtime version & OS-specific | Update crypto API to `crypto.createCipheriv` and fix paths/line endings. |
| ubuntu-latest | 22 | `npm test` | `TypeError: crypto.createCipher is not a function` | Runtime version | Update crypto API to `crypto.createCipheriv` and `crypto.createDecipheriv`. |

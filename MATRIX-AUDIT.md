\# Matrix Audit



\## Windows + Node 18

\- Failure: OS-specific

\- Cause: Hardcoded path separators

\- Fix: Replaced string concatenation with path.join()



\## Windows + Node 20

\- Failure: OS-specific

\- Cause: Line ending mismatch (CRLF vs LF)

\- Fix: Normalize line endings before assertion



\## Windows + Node 22

\- Failure: OS-specific

\- Cause: Path + line ending issues

\- Fix: path.join() and line-ending normalization



\## Ubuntu + Node 22

\- Failure: Runtime version

\- Cause: crypto.createCipher() removed

\- Fix: Migrated to createCipheriv()/createDecipheriv()


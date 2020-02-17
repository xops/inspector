# 🕵️‍♂️ Inspector Snaps 👌

🕵️‍♂️ Inspector Snaps 👌 is a simple tool to create, modify and execute JSON-RPC requests to metamask snaps plugins

- Edit JSON-RPC request
- Test JSON-RPC request against a given metamask `snapId`

It can be used as a standalone tool or included in other projects


![inspector_snaps](https://user-images.githubusercontent.com/364566/74618938-076ac680-50f1-11ea-9e42-9c6f803c3bda.gif)


https://xops.github.io/inspector-snaps/

### Url configuration

You can configure the default request and url via url params:

`?request[jsonrpc]=2.0&request[method]=eth_chainId`

here is a full example:

https://xops.github.io/inspector-snaps/?&request[method]=hello&request[params][0]=world

### Contributing

How to contribute, build and release are outlined in [CONTRIBUTING.md](CONTRIBUTING.md), [BUILDING.md](BUILDING.md) and [RELEASING.md](RELEASING.md) respectively. Commits in this repository follow the [CONVENTIONAL_COMMITS.md](CONVENTIONAL_COMMITS.md) specification.


# Resources
- [open-rpc.org](https://open-rpc.org/)

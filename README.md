# tec-onboarding-bot

Discord Bot that creates an Onboarding Flow for communities that use discord as their primary source of interaction.

## Live Version

This page is not yet deployed.

<!--This page is currently deployed. [View the live website.]()-->

## Feedback and Bugs

If you have feedback or a bug report, please feel free to open a GitHub issue!

## Contributing

If you would like to contribute to the project, you may create a Pull Request containing your proposed changes and we will review it as soon as we are able! Please review our [contributing guidelines](CONTRIBUTING.md) first.

## Code of Conduct

Before interacting with our community, please read our [Code of Conduct](CODE_OF_CONDUCT.md).

## Licensing

Copyright (C) 2021 Nicholas Carrigan
Copyright (C) 2022 Vyvy-vi 

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

The full license terms may be viewed in the [LICENSE.md file](./LICENSE.md)

## Credits

This repo, particularly the _verification module_ is derived work that is based on the implementation created by [@nhcarrigan](https://github.com/nhcarrigan) in their [commit-your-code-bot project](https://github.com/nhcarrigan/commit-your-code/), which was forked into this repo from the state at tree hash - [b061977989563be1d0a15d84163a00e9185d78b6](https://github.com/nhcarrigan/commit-your-code-bot/tree/b061977989563be1d0a15d84163a00e9185d78b6).

This project makes the following modifications and additions:
- Changed folder structure for the modules to group verification modules into [`src/modules/verification/`](./src/modules/verification)
- Modified the `src/events/guildMemberAdd.ts` code to prevent bots from being banned.
- Added functionality for a different feature - `guide`, which can be viewed in [`src/modules/guide`](./src/modules/guide).


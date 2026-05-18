---
title: Frequency
---

import {DISCORD_INVITE_URL} from '@site/src/constants/links';
import CopyCommand from '@site/src/components/CopyCommand';

# MeshCore Frequency

Choosing a frequency depends on other repeaters and users in your area. Before deploying a fixed node or repeater, join the <a href={DISCORD_INVITE_URL}>NSW Mesh Discord</a> and ask which profile is currently being used near you.

For more information and to get a better understanding of frequency selection in NSW, check out: [Finding the Sweet Spot: MeshCore LoRa Settings in the Australian 900MHz Band](https://zindello.com.au/finding-the-sweet-spot-meshcore-lora-settings-in-the-australian-900mhz-band/).

## Frequency Profiles

| Profile | Frequency | Bandwidth | Spreading Factor | Coding Rate | CLI command |
| --- | --- | --- | --- | --- | --- |
| **Australia (Mid)** | **915.075 MHz** | **125 kHz** | **9** | **4/5** | <CopyCommand command="set radio 915.075,125,9,5" /> |
| Australia (Narrow) | 916.575 MHz | 62.5 kHz | 7 | 4/8 | <CopyCommand command="set radio 916.575,62.5,7,8" /> |
| Australia (Wide) | 915.800 MHz | 250 kHz | 11 | 4/5 | <CopyCommand command="set radio 915.800,250,11,5" /> |

The CLI command format is `set radio <freq>,<bw>,<sf>,<cr>`. The coding rate value uses the denominator from `4/x`, so `4/5` is entered as `5`.

## Current NSW Usage

From April/May 2026 onwards, the majority of NSW Mesh users and repeaters migrated to the **Australia Mid** profile.

Prior to this migration, NSW was split between two primary profiles:

- Australia (Wide)
- Australia (Narrow)

Before the introduction of the Narrow and Mid profiles, the NSW mesh primarily operated on the Australia Wide profile. These settings differ slightly from the default Australian MeshCore Australia preset, using a **Spreading Factor of 11 instead of 10**.

There are still some areas within NSW that continue to use the Australia Narrow profile, and the majority of Victoria currently remains on Narrow.

## Recommendation

If you are unsure which profile to use, ask in the <a href={DISCORD_INVITE_URL}>NSW Mesh Discord</a> before configuring your node. Using the same profile as nearby repeaters and users is critical for interoperability and coverage.

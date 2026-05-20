---
title: Repeaters
---

import CopyCommand from '@site/src/components/CopyCommand';

# MeshCore Repeaters

Repeaters are the backbone of a MeshCore mesh. A good repeater location can extend coverage across suburbs, valleys, ridgelines, and walking tracks.

## Repeater List

We used to host a dynamic repeater list here so prefix allocation was easy to check. With the introduction of multibyte prefixes, this is no longer a major issue.

You can find the current list of active repeater prefixes in the [LetsMesh analyzer prefix utilization view](https://analyzer.letsmesh.net/nodes/prefix-utilization?region=BHS,SYD,WOL,NTL).

## Naming

Use a clear name that helps other users understand where the repeater is.

Recommended format:

`<Emoji> <Location>`

Examples:

- `☢️ Bradbury`
- `🦘 Horsley Park`
- `🏍️ Ashfield Nth`
- `🐄 Hawkesbury Hts A`

Use a suburb, town, landmark, hill, or other recognisable location. If there are multiple repeaters in the same area, add a suffix such as `A`, `B`, `C`, `North`, or `East`.

You may need to shorten words to fit the length limit, such as `Nth` for `North` or `Hts` for `Heights`. Emojis can use more characters than they appear to, so keep names short. If a location is set, the max length is 24 bytes; 32 otherwise. Emoji and unicode characters may take more than one byte.

You can use this tool to help calculate lengths https://mothereff.in/byte-counter.

The emoji can reference the owner if preferred, but it is not enforced.

## Repeater Owner Emojis

To help keep repeater names recognisable across the mesh, try to avoid reusing emojis already associated with other repeater owners.

The current repeater owner emoji list is hosted by [meshsydney.com](https://meshsydney.com/#repeater-owners).

## Location

Configure a GPS location if possible.

The location of your repeater does not have to be exactly precise, but other mesh users will appreciate it if it is as close as practical to the real location. This makes the MeshCore app antenna signal and line-of-sight tools more useful.

## Clock Sync

Do not forget to sync the clock after a reboot.

## Recommended Settings

These NSW Mesh defaults vary from the MeshCore defaults.

| Setting | Recommended Value | CLI command |
| --- | --- | --- |
| Flood Advert | 47 hours | <CopyCommand command="set flood.advert.interval 47" /> |
| Zero Hop Advert | 239 minutes | <CopyCommand command="set advert.interval 239" /> |
| Multi-Acks | Enabled | <CopyCommand command="set multi.acks 1" /> |
| Path Hash Size | 2 Bytes | <CopyCommand command="set path.hash.mode 1" /> |

Why these `advert.interval`? You want them to be nice and long to prevent spamming the mesh with adverts. The Zero Hop or Direct adverts don't flood the whole mesh so can be more often. We use an odd number so that way the adverts are not at the same time every day.

`multi.acks` support enables repeaters to reply with multiple acknowledgement packets to providing a more resilient response to queries.

`path.hash.mode` only controls the path hash size used in a repeater's own advert broadcasts. It does not affect which packets the repeater forwards. A repeater running firmware 1.14 or later always forwards 1-, 2-, and 3-byte packets regardless of this setting.

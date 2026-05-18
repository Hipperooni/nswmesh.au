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

You may need to shorten words to fit the character limit, such as `Nth` for `North` or `Hts` for `Heights`. Emojis can use more characters than they appear to, so keep names short.

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

Useful CLI checks:

- Flood advert interval: `get flood.advert.interval`
- Zero-hop advert interval: `get advert.interval`
- Multi-Acks support: `get multi.acks`

Flood advert interval is set in hours with `set flood.advert.interval <hours>`. Valid values are `3` to `168`. The MeshCore default is `12` for repeaters and `0` for sensors.

Zero-hop advert interval is set in minutes with `set advert.interval <minutes>`.

Multi-Acks support is set with `set multi.acks <state>`, where `0` disables it and `1` enables it. The default is `0`.

`path.hash.mode` only controls the path hash size used in a repeater's own advert broadcasts. It does not affect which packets the repeater forwards. A repeater running firmware 1.14 or later always forwards 1-, 2-, and 3-byte packets regardless of this setting.

Path hash mode usage: `set path.hash.mode {0|1|2}`. For the NSW Mesh recommended 2-byte path hash size, use `set path.hash.mode 1`.

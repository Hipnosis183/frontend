import { newGamePlatform } from './controllers/Game'
import { createPlatform } from './controllers/Platform'
import { createDeveloper } from './controllers/Developer'

export async function dbSeed() {
    const d = 'Developer'
    const p = 'Platform'
    const g = 'Game'
    let n = 1
    // Set amount of platforms to create.
    for (let i = 0; i < 10; i++) {
        // Set platform name.
        await platformSeed(p)
            .then(async pla => {
                // Set platform name.
                await developerSeed(d)
                    .then(async dev => {
                        // Set amount of games to create for each platform.
                        for (let i = 0; i < 100; i++) {
                            // Set game data. Needs an existing developer.
                            await gameSeed(
                                g + ' ' + n, // Title
                                g, // Subtitle
                                g, // Original Title
                                g, // Romanized Title
                                g, // Translated Title
                                'eu', // Region
                                g, // Serial
                                dev._id, // Developer
                                pla._id, // Platform
                                g, // Release Year
                                g, // Number of Players
                                g, // Version Name
                                g, // Version Number
                                g, // Latest Version
                                [g] // Comments
                            )
                            n++
                        }
                    })
            })
    }
}

async function developerSeed(a) {
    let Developer = {
        name: a
    }
    return await createDeveloper(Developer)
}

async function platformSeed(a) {
    let Platform = {
        name: a
    }
    return await createPlatform(Platform)
}

async function gameSeed(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    let gameForm = {
        gamePlatform: {
            developer: h,
            platform: i,
            releaseYear: j,
            numberPlayers: k,
            links: [],
            images: {
                cover: { add: null, remove: false },
                pictures: { add: [], remove: [] }
            }
        },
        gameRegion: {
            title: a,
            subTitle: b,
            originalTitle: c,
            romanizedTitle: d,
            translatedTitle: e,
            region: f,
            serial: g,
            images: {
                cover: { add: null, remove: false },
                pictures: { add: [], remove: [] }
            }
        },
        gameVersion: {
            name: l,
            number: m,
            latest: n,
            comments: o,
            images: {
                cover: { add: null, remove: false },
                pictures: { add: [], remove: [] }
            }
        }
    }
    await newGamePlatform(gameForm)
}
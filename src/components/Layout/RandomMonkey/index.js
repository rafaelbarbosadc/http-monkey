const monkeyEmojis = [
    "🙈",
    "🙉",
    "🙊",
    "🐵",
    "🐒",
    "🦍",
    "🦧"
]

const RandomMonkey = () => monkeyEmojis[Math.floor(Math.random() * monkeyEmojis.length)];

export default RandomMonkey;
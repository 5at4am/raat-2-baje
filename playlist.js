/* ============================================================
   Raat 2 Baje — multi-artist late-night radio
   ------------------------------------------------------------
   451 tracks across 55 playlists.
   Emraan Hashmi discography (per film) + 10 featured artists.
   Sources: YouTube Music (ytmusicapi) official uploads +
   hindigeetmala.net. Every youtubeId confirmed embeddable via
   YouTube oEmbed (HTTP 200) so it plays in the hidden YT player.
   ============================================================ */
window.PLAYLISTS = [
  {
    name: "EH · Hamari Adhuri Kahani",
    tracks: [
      {"title": "Title Track (From \"Hamari Adhuri Kahani\")", "artist": "Emraan Hashmi · Hamari Adhuri Kahani", "youtubeId": "f3FFOBrMmdg", "cover": "https://i.ytimg.com/vi/f3FFOBrMmdg/hqdefault.jpg"},
      {"title": "Hasi (Female Version)", "artist": "Emraan Hashmi · Hamari Adhuri Kahani", "youtubeId": "oyaudgo5_8Y", "cover": "https://i.ytimg.com/vi/oyaudgo5_8Y/hqdefault.jpg"},
      {"title": "Humnava (From \"Hamari Adhuri Kahani\")", "artist": "Emraan Hashmi · Hamari Adhuri Kahani", "youtubeId": "ktPD6TMovxs", "cover": "https://i.ytimg.com/vi/ktPD6TMovxs/hqdefault.jpg"},
      {"title": "Hasi (Male Version)", "artist": "Emraan Hashmi · Hamari Adhuri Kahani", "youtubeId": "oyaudgo5_8Y", "cover": "https://i.ytimg.com/vi/oyaudgo5_8Y/hqdefault.jpg"},
      {"title": "Yeh Kaisi Jagah", "artist": "Emraan Hashmi · Hamari Adhuri Kahani", "youtubeId": "705E59Lrcos", "cover": "https://i.ytimg.com/vi/705E59Lrcos/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Murder",
    tracks: [
      {"title": "Bheegey Hont", "artist": "Emraan Hashmi · Murder", "youtubeId": "A33OuyEF5EI", "cover": "https://i.ytimg.com/vi/A33OuyEF5EI/hqdefault.jpg"},
      {"title": "Bheegey Hont", "artist": "Emraan Hashmi · Murder", "youtubeId": "A33OuyEF5EI", "cover": "https://i.ytimg.com/vi/A33OuyEF5EI/hqdefault.jpg"},
      {"title": "Kaho Na Kaho", "artist": "Emraan Hashmi · Murder", "youtubeId": "GPvCVzD70Zs", "cover": "https://i.ytimg.com/vi/GPvCVzD70Zs/hqdefault.jpg"},
      {"title": "Jana Tharo Pyar", "artist": "Emraan Hashmi · Murder", "youtubeId": "0QVInGu4xNY", "cover": "https://i.ytimg.com/vi/0QVInGu4xNY/hqdefault.jpg"},
      {"title": "Zindagi Is Tarah (Female Version)", "artist": "Emraan Hashmi · Murder", "youtubeId": "LlpawZm9HLk", "cover": "https://i.ytimg.com/vi/LlpawZm9HLk/hqdefault.jpg"},
      {"title": "Zindagi Is Tarah (Male Version)", "artist": "Emraan Hashmi · Murder", "youtubeId": "OwkCpALrHGY", "cover": "https://i.ytimg.com/vi/OwkCpALrHGY/hqdefault.jpg"},
      {"title": "Dil Ko Hazar Bar", "artist": "Emraan Hashmi · Murder", "youtubeId": "H0kQMGRJu08", "cover": "https://i.ytimg.com/vi/H0kQMGRJu08/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Raja Natwarlal",
    tracks: [
      {"title": "Tere Ho Ke Rahenge", "artist": "Emraan Hashmi · Raja Natwarlal", "youtubeId": "R-j8iY-dzaA", "cover": "https://i.ytimg.com/vi/R-j8iY-dzaA/hqdefault.jpg"},
      {"title": "Tere Ho Ke Rahenge -DJ Notorious Club Mix", "artist": "Emraan Hashmi · Raja Natwarlal", "youtubeId": "R-j8iY-dzaA", "cover": "https://i.ytimg.com/vi/R-j8iY-dzaA/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Ungli",
    tracks: [
      {"title": "Dance Basanti", "artist": "Emraan Hashmi · Ungli", "youtubeId": "xyfdO1L2vgQ", "cover": "https://i.ytimg.com/vi/xyfdO1L2vgQ/hqdefault.jpg"},
      {"title": "Ungli Pe Nachalein", "artist": "Emraan Hashmi · Ungli", "youtubeId": "GCVZN_lDXNE", "cover": "https://i.ytimg.com/vi/GCVZN_lDXNE/hqdefault.jpg"},
      {"title": "Pakeezah", "artist": "Emraan Hashmi · Ungli", "youtubeId": "CGLofayJvLQ", "cover": "https://i.ytimg.com/vi/CGLofayJvLQ/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Tumsa Nahin Dekha",
    tracks: [
      {"title": "Bheed Mein Tanhai Mein - Lofi", "artist": "Emraan Hashmi · Tumsa Nahin Dekha", "youtubeId": "g4Fo8H3BJjc", "cover": "https://i.ytimg.com/vi/g4Fo8H3BJjc/hqdefault.jpg"},
      {"title": "Woh Humse Khafa Hain", "artist": "Emraan Hashmi · Tumsa Nahin Dekha", "youtubeId": "fAycJELh6bw", "cover": "https://i.ytimg.com/vi/fAycJELh6bw/hqdefault.jpg"},
      {"title": "Mujhe Tumse Mohabbat Hai (remix)", "artist": "Emraan Hashmi · Tumsa Nahin Dekha", "youtubeId": "ZyagAlGauO8", "cover": "https://i.ytimg.com/vi/ZyagAlGauO8/hqdefault.jpg"},
      {"title": "Yeh Dhuan Dhuan", "artist": "Emraan Hashmi · Tumsa Nahin Dekha", "youtubeId": "eHoXzIO9hNk", "cover": "https://i.ytimg.com/vi/eHoXzIO9hNk/hqdefault.jpg"},
      {"title": "Maine Soch Liya", "artist": "Emraan Hashmi · Tumsa Nahin Dekha", "youtubeId": "fyOo_TvRY-M", "cover": "https://i.ytimg.com/vi/fyOo_TvRY-M/hqdefault.jpg"},
      {"title": "Mere Dil Bata", "artist": "Emraan Hashmi · Tumsa Nahin Dekha", "youtubeId": "gBP0tKQyD38", "cover": "https://i.ytimg.com/vi/gBP0tKQyD38/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Zeher",
    tracks: [
      {"title": "Woh Lamhe Woh Baatein", "artist": "Emraan Hashmi · Zeher", "youtubeId": "-xjhuuVXcF0", "cover": "https://i.ytimg.com/vi/-xjhuuVXcF0/hqdefault.jpg"},
      {"title": "Agar Tum Mil Jao (Female Version)", "artist": "Emraan Hashmi · Zeher", "youtubeId": "XK-VKvpqEjo", "cover": "https://i.ytimg.com/vi/XK-VKvpqEjo/hqdefault.jpg"},
      {"title": "Aye Bekhabar", "artist": "Emraan Hashmi · Zeher", "youtubeId": "C7ojDKtydm8", "cover": "https://i.ytimg.com/vi/C7ojDKtydm8/hqdefault.jpg"},
      {"title": "Agar Tum Mil Jao (Male Version)", "artist": "Emraan Hashmi · Zeher", "youtubeId": "XK-VKvpqEjo", "cover": "https://i.ytimg.com/vi/XK-VKvpqEjo/hqdefault.jpg"},
      {"title": "Agar Tum Mil Jao (Male Version)", "artist": "Emraan Hashmi · Zeher", "youtubeId": "XK-VKvpqEjo", "cover": "https://i.ytimg.com/vi/XK-VKvpqEjo/hqdefault.jpg"},
      {"title": "Woh Lamhe Woh Baatein", "artist": "Emraan Hashmi · Zeher", "youtubeId": "PUxUCUll8g8", "cover": "https://i.ytimg.com/vi/PUxUCUll8g8/hqdefault.jpg"},
      {"title": "Jaane Ja Jane Ja", "artist": "Emraan Hashmi · Zeher", "youtubeId": "Z3wxm4D4hP8", "cover": "https://i.ytimg.com/vi/Z3wxm4D4hP8/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Gangster",
    tracks: [
      {"title": "Mujhe Mat Roko", "artist": "Emraan Hashmi · Gangster", "youtubeId": "xFXGiug9GrA", "cover": "https://i.ytimg.com/vi/xFXGiug9GrA/hqdefault.jpg"},
      {"title": "Tu Hi Meri Shab Hai", "artist": "Emraan Hashmi · Gangster", "youtubeId": "iL8Qk9eyGRs", "cover": "https://i.ytimg.com/vi/iL8Qk9eyGRs/hqdefault.jpg"},
      {"title": "Bheegi Bheegi", "artist": "Emraan Hashmi · Gangster", "youtubeId": "TrupdvVQnpM", "cover": "https://i.ytimg.com/vi/TrupdvVQnpM/hqdefault.jpg"},
      {"title": "Ya Ali", "artist": "Emraan Hashmi · Gangster", "youtubeId": "6Ju-TiaYavQ", "cover": "https://i.ytimg.com/vi/6Ju-TiaYavQ/hqdefault.jpg"},
      {"title": "Tu Hi Meri Shab Hai", "artist": "Emraan Hashmi · Gangster", "youtubeId": "cGNcjqXe87U", "cover": "https://i.ytimg.com/vi/cGNcjqXe87U/hqdefault.jpg"},
      {"title": "Lamha Lamha (Male Version)", "artist": "Emraan Hashmi · Gangster", "youtubeId": "r7TVnh8DqBs", "cover": "https://i.ytimg.com/vi/r7TVnh8DqBs/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Raaz - The Mystery Continues",
    tracks: [
      {"title": "Soniyo (From the Heart)", "artist": "Emraan Hashmi · Raaz - The Mystery Continues", "youtubeId": "CeSCOLLi9A0", "cover": "https://i.ytimg.com/vi/CeSCOLLi9A0/hqdefault.jpg"},
      {"title": "Maahi", "artist": "Emraan Hashmi · Raaz - The Mystery Continues", "youtubeId": "e1edxTqJnKk", "cover": "https://i.ytimg.com/vi/e1edxTqJnKk/hqdefault.jpg"},
      {"title": "Bandaa Re", "artist": "Emraan Hashmi · Raaz - The Mystery Continues", "youtubeId": "STd4bU92uhQ", "cover": "https://i.ytimg.com/vi/STd4bU92uhQ/hqdefault.jpg"},
      {"title": "Maahi (Rock with Me)", "artist": "Emraan Hashmi · Raaz - The Mystery Continues", "youtubeId": "eFQciW0LQEE", "cover": "https://i.ytimg.com/vi/eFQciW0LQEE/hqdefault.jpg"},
      {"title": "Kaisa Ye Raaz Hai", "artist": "Emraan Hashmi · Raaz - The Mystery Continues", "youtubeId": "VQHsWhoS-uo", "cover": "https://i.ytimg.com/vi/VQHsWhoS-uo/hqdefault.jpg"},
      {"title": "O Jaana (The DJ Suketu Dance with Me Mix)", "artist": "Emraan Hashmi · Raaz - The Mystery Continues", "youtubeId": "S6Gdnxtw9rM", "cover": "https://i.ytimg.com/vi/S6Gdnxtw9rM/hqdefault.jpg"},
      {"title": "O Jaana", "artist": "Emraan Hashmi · Raaz - The Mystery Continues", "youtubeId": "S6Gdnxtw9rM", "cover": "https://i.ytimg.com/vi/S6Gdnxtw9rM/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Kalyug",
    tracks: [
      {"title": "Aadat", "artist": "Emraan Hashmi · Kalyug", "youtubeId": "F-l0ysm6dRk", "cover": "https://i.ytimg.com/vi/F-l0ysm6dRk/hqdefault.jpg"},
      {"title": "Aadat", "artist": "Emraan Hashmi · Kalyug", "youtubeId": "EdVAFkLzpIc", "cover": "https://i.ytimg.com/vi/EdVAFkLzpIc/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Raaz Reboot",
    tracks: [
      {"title": "LO MAAN LIYA", "artist": "Emraan Hashmi · Raaz Reboot", "youtubeId": "KSGYVl4ZgRs", "cover": "https://i.ytimg.com/vi/KSGYVl4ZgRs/hqdefault.jpg"},
      {"title": "RAAZ AANKHEIN TERI", "artist": "Emraan Hashmi · Raaz Reboot", "youtubeId": "AuGIHznyuXk", "cover": "https://i.ytimg.com/vi/AuGIHznyuXk/hqdefault.jpg"},
      {"title": "HUMMEIN TUMMEIN JO THA", "artist": "Emraan Hashmi · Raaz Reboot", "youtubeId": "eNk9d1V5bDY", "cover": "https://i.ytimg.com/vi/eNk9d1V5bDY/hqdefault.jpg"},
      {"title": "YAAD HAI NA", "artist": "Emraan Hashmi · Raaz Reboot", "youtubeId": "_FRbTRnPFnY", "cover": "https://i.ytimg.com/vi/_FRbTRnPFnY/hqdefault.jpg"},
      {"title": "THE SOUND OF RAAZ", "artist": "Emraan Hashmi · Raaz Reboot", "youtubeId": "f4e7NdLDQq4", "cover": "https://i.ytimg.com/vi/f4e7NdLDQq4/hqdefault.jpg"},
      {"title": "YAAD HAI NA (UNPLUGGED)", "artist": "Emraan Hashmi · Raaz Reboot", "youtubeId": "_FRbTRnPFnY", "cover": "https://i.ytimg.com/vi/_FRbTRnPFnY/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Tum Mile",
    tracks: [
      {"title": "Dil Ibaadat", "artist": "Emraan Hashmi · Tum Mile", "youtubeId": "xm-4SZxjlzU", "cover": "https://i.ytimg.com/vi/xm-4SZxjlzU/hqdefault.jpg"},
      {"title": "Tu Hi Haqeeqat", "artist": "Emraan Hashmi · Tum Mile", "youtubeId": "3QhajVg6SjE", "cover": "https://i.ytimg.com/vi/3QhajVg6SjE/hqdefault.jpg"},
      {"title": "Tum Mile", "artist": "Emraan Hashmi · Tum Mile", "youtubeId": "odVptmgIcD0", "cover": "https://i.ytimg.com/vi/odVptmgIcD0/hqdefault.jpg"},
      {"title": "Tum Mile (Love Reprise)", "artist": "Emraan Hashmi · Tum Mile", "youtubeId": "1jJqAWglK28", "cover": "https://i.ytimg.com/vi/1jJqAWglK28/hqdefault.jpg"},
      {"title": "Tum Mile", "artist": "Emraan Hashmi · Tum Mile", "youtubeId": "odVptmgIcD0", "cover": "https://i.ytimg.com/vi/odVptmgIcD0/hqdefault.jpg"},
      {"title": "Is Jahaan Mein (From \"Tum Mile\")", "artist": "Emraan Hashmi · Tum Mile", "youtubeId": "jPyRkeGI0nA", "cover": "https://i.ytimg.com/vi/jPyRkeGI0nA/hqdefault.jpg"},
      {"title": "O Meri Jaan", "artist": "Emraan Hashmi · Tum Mile", "youtubeId": "pqIwWc7H3IQ", "cover": "https://i.ytimg.com/vi/pqIwWc7H3IQ/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · The Killer",
    tracks: [
      {"title": "O SANAM", "artist": "Emraan Hashmi · The Killer", "youtubeId": "J1wxpriQhIM", "cover": "https://i.ytimg.com/vi/J1wxpriQhIM/hqdefault.jpg"},
      {"title": "TERI YAADON MEIN", "artist": "Emraan Hashmi · The Killer", "youtubeId": "fVeJ6sJERR4", "cover": "https://i.ytimg.com/vi/fVeJ6sJERR4/hqdefault.jpg"},
      {"title": "O SANAM", "artist": "Emraan Hashmi · The Killer", "youtubeId": "TQfnF74mGuA", "cover": "https://i.ytimg.com/vi/TQfnF74mGuA/hqdefault.jpg"},
      {"title": "HIBBAKI (REMIX)", "artist": "Emraan Hashmi · The Killer", "youtubeId": "9U1GqevDxqk", "cover": "https://i.ytimg.com/vi/9U1GqevDxqk/hqdefault.jpg"},
      {"title": "TERI YAADON MEIN (REMIX)", "artist": "Emraan Hashmi · The Killer", "youtubeId": "i6KZNe_VjV4", "cover": "https://i.ytimg.com/vi/i6KZNe_VjV4/hqdefault.jpg"},
      {"title": "HIBBAKI (REMIX)", "artist": "Emraan Hashmi · The Killer", "youtubeId": "9U1GqevDxqk", "cover": "https://i.ytimg.com/vi/9U1GqevDxqk/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Crook: Its Good To Be Bad",
    tracks: [
      {"title": "Mere Bina", "artist": "Emraan Hashmi · Crook: Its Good To Be Bad", "youtubeId": "6erJm1zr7Vg", "cover": "https://i.ytimg.com/vi/6erJm1zr7Vg/hqdefault.jpg"},
      {"title": "Challa", "artist": "Emraan Hashmi · Crook: Its Good To Be Bad", "youtubeId": "7CbQxyftNo4", "cover": "https://i.ytimg.com/vi/7CbQxyftNo4/hqdefault.jpg"},
      {"title": "Mere Bina", "artist": "Emraan Hashmi · Crook: Its Good To Be Bad", "youtubeId": "XvUSsh3gdO4", "cover": "https://i.ytimg.com/vi/XvUSsh3gdO4/hqdefault.jpg"},
      {"title": "Tujhi Mein", "artist": "Emraan Hashmi · Crook: Its Good To Be Bad", "youtubeId": "f0dxu8rPTRg", "cover": "https://i.ytimg.com/vi/f0dxu8rPTRg/hqdefault.jpg"},
      {"title": "Tujhi Mein (Reprise)", "artist": "Emraan Hashmi · Crook: Its Good To Be Bad", "youtubeId": "KX4DebpMvso", "cover": "https://i.ytimg.com/vi/KX4DebpMvso/hqdefault.jpg"},
      {"title": "Kya", "artist": "Emraan Hashmi · Crook: Its Good To Be Bad", "youtubeId": "pX5m9gN7Z60", "cover": "https://i.ytimg.com/vi/pX5m9gN7Z60/hqdefault.jpg"},
      {"title": "Mere Bina (Unplugged)", "artist": "Emraan Hashmi · Crook: Its Good To Be Bad", "youtubeId": "7bz4j0Jkn1A", "cover": "https://i.ytimg.com/vi/7bz4j0Jkn1A/hqdefault.jpg"},
      {"title": "Challa", "artist": "Emraan Hashmi · Crook: Its Good To Be Bad", "youtubeId": "CgbKVmC48ec", "cover": "https://i.ytimg.com/vi/CgbKVmC48ec/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Rush",
    tracks: [
      {"title": "Chup Chup Ke (Film Version)", "artist": "Emraan Hashmi · Rush", "youtubeId": "8o_7ThdPOuc", "cover": "https://i.ytimg.com/vi/8o_7ThdPOuc/hqdefault.jpg"},
      {"title": "O Re Khuda", "artist": "Emraan Hashmi · Rush", "youtubeId": "9kZjyxRJ08M", "cover": "https://i.ytimg.com/vi/9kZjyxRJ08M/hqdefault.jpg"},
      {"title": "Fukraa", "artist": "Emraan Hashmi · Rush", "youtubeId": "SCy3IQK5qLI", "cover": "https://i.ytimg.com/vi/SCy3IQK5qLI/hqdefault.jpg"},
      {"title": "Chup Chup Ke (Film Version)", "artist": "Emraan Hashmi · Rush", "youtubeId": "PMQfqWjwPis", "cover": "https://i.ytimg.com/vi/PMQfqWjwPis/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Once Upon A Time In Mumbaai",
    tracks: [
      {"title": "Pee Loon", "artist": "Emraan Hashmi · Once Upon A Time In Mumbaai", "youtubeId": "8NwDaK-QvqY", "cover": "https://i.ytimg.com/vi/8NwDaK-QvqY/hqdefault.jpg"},
      {"title": "Babu Rao", "artist": "Emraan Hashmi · Once Upon A Time In Mumbaai", "youtubeId": "UwkOleuVykw", "cover": "https://i.ytimg.com/vi/UwkOleuVykw/hqdefault.jpg"},
      {"title": "Parda", "artist": "Emraan Hashmi · Once Upon A Time In Mumbaai", "youtubeId": "B4cPRd0KlNg", "cover": "https://i.ytimg.com/vi/B4cPRd0KlNg/hqdefault.jpg"},
      {"title": "I Am In Love", "artist": "Emraan Hashmi · Once Upon A Time In Mumbaai", "youtubeId": "mxi3ZvH_zew", "cover": "https://i.ytimg.com/vi/mxi3ZvH_zew/hqdefault.jpg"},
      {"title": "I Am In Love (KK Version)", "artist": "Emraan Hashmi · Once Upon A Time In Mumbaai", "youtubeId": "mxi3ZvH_zew", "cover": "https://i.ytimg.com/vi/mxi3ZvH_zew/hqdefault.jpg"},
      {"title": "Pee Loon (Remix)", "artist": "Emraan Hashmi · Once Upon A Time In Mumbaai", "youtubeId": "dE4hhfuIpw4", "cover": "https://i.ytimg.com/vi/dE4hhfuIpw4/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Ghanchakkar",
    tracks: [
      {"title": "Lazy Lad", "artist": "Emraan Hashmi · Ghanchakkar", "youtubeId": "9ugjGO3fYwY", "cover": "https://i.ytimg.com/vi/9ugjGO3fYwY/hqdefault.jpg"},
      {"title": "Ghanchakkar Babu", "artist": "Emraan Hashmi · Ghanchakkar", "youtubeId": "CP7e7cNCRl0", "cover": "https://i.ytimg.com/vi/CP7e7cNCRl0/hqdefault.jpg"},
      {"title": "Allah Meherbaan", "artist": "Emraan Hashmi · Ghanchakkar", "youtubeId": "PtX6rtmU1EI", "cover": "https://i.ytimg.com/vi/PtX6rtmU1EI/hqdefault.jpg"},
      {"title": "He Ram....He Ram....(Sri Ram Dum)1998", "artist": "Emraan Hashmi · Ghanchakkar", "youtubeId": "oQHBdZZKR94", "cover": "https://i.ytimg.com/vi/oQHBdZZKR94/hqdefault.jpg"},
      {"title": "Ghanchakkar Babu (Remix By Tanuj Tiku & Aftab Khan)", "artist": "Emraan Hashmi · Ghanchakkar", "youtubeId": "CP7e7cNCRl0", "cover": "https://i.ytimg.com/vi/CP7e7cNCRl0/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Awarapan",
    tracks: [
      {"title": "Maahiya Teri Kasam", "artist": "Emraan Hashmi · Awarapan", "youtubeId": "vU3X1Bv18Ac", "cover": "https://i.ytimg.com/vi/vU3X1Bv18Ac/hqdefault.jpg"},
      {"title": "Tera Mera Rishta", "artist": "Emraan Hashmi · Awarapan", "youtubeId": "g23pmazHwgE", "cover": "https://i.ytimg.com/vi/g23pmazHwgE/hqdefault.jpg"},
      {"title": "Tera Mera Rishta (Remix)", "artist": "Emraan Hashmi · Awarapan", "youtubeId": "g23pmazHwgE", "cover": "https://i.ytimg.com/vi/g23pmazHwgE/hqdefault.jpg"},
      {"title": "Toh Phir Aao", "artist": "Emraan Hashmi · Awarapan", "youtubeId": "XwDV5xldudU", "cover": "https://i.ytimg.com/vi/XwDV5xldudU/hqdefault.jpg"},
      {"title": "Maula Maula", "artist": "Emraan Hashmi · Awarapan", "youtubeId": "T-tnZFrsQAg", "cover": "https://i.ytimg.com/vi/T-tnZFrsQAg/hqdefault.jpg"},
      {"title": "Toh Phir Aao (Remix)", "artist": "Emraan Hashmi · Awarapan", "youtubeId": "ySx0ulQQODU", "cover": "https://i.ytimg.com/vi/ySx0ulQQODU/hqdefault.jpg"},
      {"title": "Toh Phir Aao (Lounge Version)", "artist": "Emraan Hashmi · Awarapan", "youtubeId": "Vk6ruO_VcoI", "cover": "https://i.ytimg.com/vi/Vk6ruO_VcoI/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · The Train",
    tracks: [
      {"title": "Beete Lamhein", "artist": "Emraan Hashmi · The Train", "youtubeId": "UlacMvx_VYk", "cover": "https://i.ytimg.com/vi/UlacMvx_VYk/hqdefault.jpg"},
      {"title": "Beete Lamhein", "artist": "Emraan Hashmi · The Train", "youtubeId": "ZTnVW7iTGQE", "cover": "https://i.ytimg.com/vi/ZTnVW7iTGQE/hqdefault.jpg"},
      {"title": "Mausam", "artist": "Emraan Hashmi · The Train", "youtubeId": "r7dxAgQ2U-0", "cover": "https://i.ytimg.com/vi/r7dxAgQ2U-0/hqdefault.jpg"},
      {"title": "Mausam", "artist": "Emraan Hashmi · The Train", "youtubeId": "n6u7E_PmYhk", "cover": "https://i.ytimg.com/vi/n6u7E_PmYhk/hqdefault.jpg"},
      {"title": "Wo Ajnabee", "artist": "Emraan Hashmi · The Train", "youtubeId": "5ldiII892mI", "cover": "https://i.ytimg.com/vi/5ldiII892mI/hqdefault.jpg"},
      {"title": "Teri Tamanna", "artist": "Emraan Hashmi · The Train", "youtubeId": "MXfbTolnVoE", "cover": "https://i.ytimg.com/vi/MXfbTolnVoE/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Mr. X",
    tracks: [
      {"title": "Teri Khushboo (Male)", "artist": "Emraan Hashmi · Mr. X", "youtubeId": "F-co5-9hZjg", "cover": "https://i.ytimg.com/vi/F-co5-9hZjg/hqdefault.jpg"},
      {"title": "Tu Jo Hain (From \"Mr. X\")", "artist": "Emraan Hashmi · Mr. X", "youtubeId": "dFCFAhAONgk", "cover": "https://i.ytimg.com/vi/dFCFAhAONgk/hqdefault.jpg"},
      {"title": "Alif Se", "artist": "Emraan Hashmi · Mr. X", "youtubeId": "_rvECO4gfek", "cover": "https://i.ytimg.com/vi/_rvECO4gfek/hqdefault.jpg"},
      {"title": "Teri Khushboo (Male)", "artist": "Emraan Hashmi · Mr. X", "youtubeId": "F-co5-9hZjg", "cover": "https://i.ytimg.com/vi/F-co5-9hZjg/hqdefault.jpg"},
      {"title": "Mr. X (From \"Mr. X\")", "artist": "Emraan Hashmi · Mr. X", "youtubeId": "gyQVSusMsSg", "cover": "https://i.ytimg.com/vi/gyQVSusMsSg/hqdefault.jpg"},
      {"title": "Saad Shukrana", "artist": "Emraan Hashmi · Mr. X", "youtubeId": "CYa_4wPSMd8", "cover": "https://i.ytimg.com/vi/CYa_4wPSMd8/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Jannat",
    tracks: [
      {"title": "Haan Tu Hain", "artist": "Emraan Hashmi · Jannat", "youtubeId": "V1fbOsHBlZE", "cover": "https://i.ytimg.com/vi/V1fbOsHBlZE/hqdefault.jpg"},
      {"title": "Zara Sa (From \"Jannat\")", "artist": "Emraan Hashmi · Jannat", "youtubeId": "5IY4BNj0-10", "cover": "https://i.ytimg.com/vi/5IY4BNj0-10/hqdefault.jpg"},
      {"title": "Door Na Ja", "artist": "Emraan Hashmi · Jannat", "youtubeId": "zgsT4epSmpU", "cover": "https://i.ytimg.com/vi/zgsT4epSmpU/hqdefault.jpg"},
      {"title": "Zara Sa (Power Ballad)", "artist": "Emraan Hashmi · Jannat", "youtubeId": "V1_5SHc21m8", "cover": "https://i.ytimg.com/vi/V1_5SHc21m8/hqdefault.jpg"},
      {"title": "Judai", "artist": "Emraan Hashmi · Jannat", "youtubeId": "xxGUBgEe6TU", "cover": "https://i.ytimg.com/vi/xxGUBgEe6TU/hqdefault.jpg"},
      {"title": "Judai (Kilogram Mix)", "artist": "Emraan Hashmi · Jannat", "youtubeId": "xxGUBgEe6TU", "cover": "https://i.ytimg.com/vi/xxGUBgEe6TU/hqdefault.jpg"},
      {"title": "Judai", "artist": "Emraan Hashmi · Jannat", "youtubeId": "e0DhOAEUTAs", "cover": "https://i.ytimg.com/vi/e0DhOAEUTAs/hqdefault.jpg"},
      {"title": "Jannat Jahan", "artist": "Emraan Hashmi · Jannat", "youtubeId": "tsxJdcPhY90", "cover": "https://i.ytimg.com/vi/tsxJdcPhY90/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Aashiq Banaya Aapne",
    tracks: [
      {"title": "Mar Jawan Mit Jawan", "artist": "Emraan Hashmi · Aashiq Banaya Aapne", "youtubeId": "c9lNVul-iJQ", "cover": "https://i.ytimg.com/vi/c9lNVul-iJQ/hqdefault.jpg"},
      {"title": "Aap Ki Kashish (Remix By Akbar Sami)", "artist": "Emraan Hashmi · Aashiq Banaya Aapne", "youtubeId": "2drBOxrFl4s", "cover": "https://i.ytimg.com/vi/2drBOxrFl4s/hqdefault.jpg"},
      {"title": "Aashiq Banaya Aapne", "artist": "Emraan Hashmi · Aashiq Banaya Aapne", "youtubeId": "0bAVd9jJE2Q", "cover": "https://i.ytimg.com/vi/0bAVd9jJE2Q/hqdefault.jpg"},
      {"title": "Aap Ki Kashish", "artist": "Emraan Hashmi · Aashiq Banaya Aapne", "youtubeId": "2drBOxrFl4s", "cover": "https://i.ytimg.com/vi/2drBOxrFl4s/hqdefault.jpg"},
      {"title": "Aashiq Banaya Aapne (Remix By Akbar Sami)", "artist": "Emraan Hashmi · Aashiq Banaya Aapne", "youtubeId": "0bAVd9jJE2Q", "cover": "https://i.ytimg.com/vi/0bAVd9jJE2Q/hqdefault.jpg"},
      {"title": "Dillagi Main Jo Beet Jaye", "artist": "Emraan Hashmi · Aashiq Banaya Aapne", "youtubeId": "Gplxsk25GtY", "cover": "https://i.ytimg.com/vi/Gplxsk25GtY/hqdefault.jpg"},
      {"title": "Dilnashin Dilnashin", "artist": "Emraan Hashmi · Aashiq Banaya Aapne", "youtubeId": "v_L-bAB1kUA", "cover": "https://i.ytimg.com/vi/v_L-bAB1kUA/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Aksar",
    tracks: [
      {"title": "JHALAK DIKHLA JA", "artist": "Emraan Hashmi · Aksar", "youtubeId": "vnlk8V-q0oU", "cover": "https://i.ytimg.com/vi/vnlk8V-q0oU/hqdefault.jpg"},
      {"title": "SONIYE (REMIX)", "artist": "Emraan Hashmi · Aksar", "youtubeId": "3UCzlbUOIn0", "cover": "https://i.ytimg.com/vi/3UCzlbUOIn0/hqdefault.jpg"},
      {"title": "SONIYE", "artist": "Emraan Hashmi · Aksar", "youtubeId": "3UCzlbUOIn0", "cover": "https://i.ytimg.com/vi/3UCzlbUOIn0/hqdefault.jpg"},
      {"title": "LOOT JAYENGE", "artist": "Emraan Hashmi · Aksar", "youtubeId": "3kVuSoZZPw0", "cover": "https://i.ytimg.com/vi/3kVuSoZZPw0/hqdefault.jpg"},
      {"title": "MOHABBAT KE (REMIX)", "artist": "Emraan Hashmi · Aksar", "youtubeId": "OHCRYrRw-f4", "cover": "https://i.ytimg.com/vi/OHCRYrRw-f4/hqdefault.jpg"},
      {"title": "JHALAK DIKHLA JA (REMIX)", "artist": "Emraan Hashmi · Aksar", "youtubeId": "vnlk8V-q0oU", "cover": "https://i.ytimg.com/vi/vnlk8V-q0oU/hqdefault.jpg"},
      {"title": "LOOT JAYENGE", "artist": "Emraan Hashmi · Aksar", "youtubeId": "3kVuSoZZPw0", "cover": "https://i.ytimg.com/vi/3kVuSoZZPw0/hqdefault.jpg"},
      {"title": "LOOT JAYENGE (REMIX)", "artist": "Emraan Hashmi · Aksar", "youtubeId": "7HGKbRIgMJ4", "cover": "https://i.ytimg.com/vi/7HGKbRIgMJ4/hqdefault.jpg"},
      {"title": "LAGI LAGI (REMIX)", "artist": "Emraan Hashmi · Aksar", "youtubeId": "gu2_z0AK0qc", "cover": "https://i.ytimg.com/vi/gu2_z0AK0qc/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Good Boy Bad Boy",
    tracks: [
      {"title": "Meri Aawargi", "artist": "Emraan Hashmi · Good Boy Bad Boy", "youtubeId": "1dapSSGkUp0", "cover": "https://i.ytimg.com/vi/1dapSSGkUp0/hqdefault.jpg"},
      {"title": "Aashiqana Aalam Hai", "artist": "Emraan Hashmi · Good Boy Bad Boy", "youtubeId": "6NPW8Gg-qpo", "cover": "https://i.ytimg.com/vi/6NPW8Gg-qpo/hqdefault.jpg"},
      {"title": "Bad Boy (feat. Luana Kiara)", "artist": "Emraan Hashmi · Good Boy Bad Boy", "youtubeId": "dHx6Sgaz-8U", "cover": "https://i.ytimg.com/vi/dHx6Sgaz-8U/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Jannat 2",
    tracks: [
      {"title": "Rab Ka Shukrana (Reprise)", "artist": "Emraan Hashmi · Jannat 2", "youtubeId": "0zLmVokqsoI", "cover": "https://i.ytimg.com/vi/0zLmVokqsoI/hqdefault.jpg"},
      {"title": "Jannatein Kahan (Power Ballad)", "artist": "Emraan Hashmi · Jannat 2", "youtubeId": "kdTleTWOeL4", "cover": "https://i.ytimg.com/vi/kdTleTWOeL4/hqdefault.jpg"},
      {"title": "Tera Deedar Hua", "artist": "Emraan Hashmi · Jannat 2", "youtubeId": "BQSMgvwrilI", "cover": "https://i.ytimg.com/vi/BQSMgvwrilI/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Footpath",
    tracks: [
      {"title": "Soorat Pe Teri Pyar Aave", "artist": "Emraan Hashmi · Footpath", "youtubeId": "CtbgewRzhZE", "cover": "https://i.ytimg.com/vi/CtbgewRzhZE/hqdefault.jpg"},
      {"title": "Saari Raat Teri Yaad", "artist": "Emraan Hashmi · Footpath", "youtubeId": "1KvCHSlK9vc", "cover": "https://i.ytimg.com/vi/1KvCHSlK9vc/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Azhar",
    tracks: [
      {"title": "Itni Si Baat Hain", "artist": "Emraan Hashmi · Azhar", "youtubeId": "j31KoH6UA8Y", "cover": "https://i.ytimg.com/vi/j31KoH6UA8Y/hqdefault.jpg"},
      {"title": "Rang De Lal (Oye Oye) (From \"Dhurandhar The Revenge\") (feat. Reble)", "artist": "Emraan Hashmi · Azhar", "youtubeId": "Z51V6cOHKhw", "cover": "https://i.ytimg.com/vi/Z51V6cOHKhw/hqdefault.jpg"},
      {"title": "Bol Do Na Zara", "artist": "Emraan Hashmi · Azhar", "youtubeId": "2Y3Wsdq-MN8", "cover": "https://i.ytimg.com/vi/2Y3Wsdq-MN8/hqdefault.jpg"},
      {"title": "Tu Hi Na Jaane", "artist": "Emraan Hashmi · Azhar", "youtubeId": "YVZ9KJmu-08", "cover": "https://i.ytimg.com/vi/YVZ9KJmu-08/hqdefault.jpg"},
      {"title": "Jeetne Ke Liye", "artist": "Emraan Hashmi · Azhar", "youtubeId": "k9QX7THNGnU", "cover": "https://i.ytimg.com/vi/k9QX7THNGnU/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Ek Thi Daayan",
    tracks: [
      {"title": "Mohabbat Bade Kaam Ki Cheez Hai", "artist": "Emraan Hashmi · Ek Thi Daayan", "youtubeId": "mbGNF4QXaEE", "cover": "https://i.ytimg.com/vi/mbGNF4QXaEE/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Dil Diya Hai",
    tracks: [
      {"title": "AFSANA BANAKE BHOOL", "artist": "Emraan Hashmi · Dil Diya Hai", "youtubeId": "OnASHk1f6nw", "cover": "https://i.ytimg.com/vi/OnASHk1f6nw/hqdefault.jpg"},
      {"title": "DIYA DIL HAI (REMIX)", "artist": "Emraan Hashmi · Dil Diya Hai", "youtubeId": "wb6px2F5o_Y", "cover": "https://i.ytimg.com/vi/wb6px2F5o_Y/hqdefault.jpg"},
      {"title": "AFSANA BANAKE BHOOL", "artist": "Emraan Hashmi · Dil Diya Hai", "youtubeId": "ZNb8Am4M8ZM", "cover": "https://i.ytimg.com/vi/ZNb8Am4M8ZM/hqdefault.jpg"},
      {"title": "Aaye Kuch Abr Kuch Sharab Aaye", "artist": "Emraan Hashmi · Dil Diya Hai", "youtubeId": "6Y4pkPHXzZo", "cover": "https://i.ytimg.com/vi/6Y4pkPHXzZo/hqdefault.jpg"},
      {"title": "MILE HO TUM TO (REMIX)", "artist": "Emraan Hashmi · Dil Diya Hai", "youtubeId": "m6BBVcQoZgE", "cover": "https://i.ytimg.com/vi/m6BBVcQoZgE/hqdefault.jpg"},
      {"title": "YAADAN TERIYAN (REMIX)", "artist": "Emraan Hashmi · Dil Diya Hai", "youtubeId": "p3cTKrINGf4", "cover": "https://i.ytimg.com/vi/p3cTKrINGf4/hqdefault.jpg"},
      {"title": "MILE HO TUM TO (REMIX)", "artist": "Emraan Hashmi · Dil Diya Hai", "youtubeId": "m6BBVcQoZgE", "cover": "https://i.ytimg.com/vi/m6BBVcQoZgE/hqdefault.jpg"},
      {"title": "Chalo Dildar Chalo", "artist": "Emraan Hashmi · Dil Diya Hai", "youtubeId": "_yg24Q8_MJQ", "cover": "https://i.ytimg.com/vi/_yg24Q8_MJQ/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Selfiee",
    tracks: [
      {"title": "Deewane Hum Nahi Hote", "artist": "Emraan Hashmi · Selfiee", "youtubeId": "eizIc5eQiEM", "cover": "https://i.ytimg.com/vi/eizIc5eQiEM/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Tiger 3",
    tracks: [
      {"title": "Aatish’s Theme | Tiger 3", "artist": "Emraan Hashmi · Tiger 3", "youtubeId": "s6j1TJ8bWNw", "cover": "https://i.ytimg.com/vi/s6j1TJ8bWNw/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Chehre",
    tracks: [
      {"title": "Rang Dariya", "artist": "Emraan Hashmi · Chehre", "youtubeId": "Jrrs2izNSL4", "cover": "https://i.ytimg.com/vi/Jrrs2izNSL4/hqdefault.jpg"},
      {"title": "Rang Dariya - Reprise", "artist": "Emraan Hashmi · Chehre", "youtubeId": "20vnL3VVmWE", "cover": "https://i.ytimg.com/vi/20vnL3VVmWE/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Raaz 3",
    tracks: [
      {"title": "Zindagi Se", "artist": "Emraan Hashmi · Raaz 3", "youtubeId": "2CAz5cP-4wg", "cover": "https://i.ytimg.com/vi/2CAz5cP-4wg/hqdefault.jpg"},
      {"title": "Rafta Rafta", "artist": "Emraan Hashmi · Raaz 3", "youtubeId": "UG5Ciy3nMmw", "cover": "https://i.ytimg.com/vi/UG5Ciy3nMmw/hqdefault.jpg"},
      {"title": "Kya Raaz Hai", "artist": "Emraan Hashmi · Raaz 3", "youtubeId": "cijMbPsDX4o", "cover": "https://i.ytimg.com/vi/cijMbPsDX4o/hqdefault.jpg"},
      {"title": "Khayalon Mein", "artist": "Emraan Hashmi · Raaz 3", "youtubeId": "6ruCJqX3MJw", "cover": "https://i.ytimg.com/vi/6ruCJqX3MJw/hqdefault.jpg"},
      {"title": "So Gaya Yeh Jahan", "artist": "Emraan Hashmi · Raaz 3", "youtubeId": "AQ5qWopu_uU", "cover": "https://i.ytimg.com/vi/AQ5qWopu_uU/hqdefault.jpg"},
      {"title": "Deewana Kar Raha Hai", "artist": "Emraan Hashmi · Raaz 3", "youtubeId": "3O6eYd8pUM8", "cover": "https://i.ytimg.com/vi/3O6eYd8pUM8/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · The Dirty Picture",
    tracks: [
      {"title": "Ooh La La", "artist": "Emraan Hashmi · The Dirty Picture", "youtubeId": "BFMzpC5PNCU", "cover": "https://i.ytimg.com/vi/BFMzpC5PNCU/hqdefault.jpg"},
      {"title": "Ooh La La  (Dhol Mix)", "artist": "Emraan Hashmi · The Dirty Picture", "youtubeId": "BFMzpC5PNCU", "cover": "https://i.ytimg.com/vi/BFMzpC5PNCU/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Shanghai",
    tracks: [
      {"title": "Duaa", "artist": "Emraan Hashmi · Shanghai", "youtubeId": "8FMz_KT1mC4", "cover": "https://i.ytimg.com/vi/8FMz_KT1mC4/hqdefault.jpg"},
      {"title": "Khudaaya", "artist": "Emraan Hashmi · Shanghai", "youtubeId": "RFfiHwvd7zM", "cover": "https://i.ytimg.com/vi/RFfiHwvd7zM/hqdefault.jpg"},
      {"title": "Bharat Mata Ki Jai", "artist": "Emraan Hashmi · Shanghai", "youtubeId": "V-YxdRSapOs", "cover": "https://i.ytimg.com/vi/V-YxdRSapOs/hqdefault.jpg"},
      {"title": "IMPORTED KAMARIYA", "artist": "Emraan Hashmi · Shanghai", "youtubeId": "-7Wm0R2yhl4", "cover": "https://i.ytimg.com/vi/-7Wm0R2yhl4/hqdefault.jpg"},
      {"title": "Mi Morcha Nela", "artist": "Emraan Hashmi · Shanghai", "youtubeId": "LI4R1Qo2L9M", "cover": "https://i.ytimg.com/vi/LI4R1Qo2L9M/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Murder 2",
    tracks: [
      {"title": "Phir Mohabbat", "artist": "Emraan Hashmi · Murder 2", "youtubeId": "v71SiUe0KYY", "cover": "https://i.ytimg.com/vi/v71SiUe0KYY/hqdefault.jpg"},
      {"title": "Hale Dil", "artist": "Emraan Hashmi · Murder 2", "youtubeId": "acdKE2hja7w", "cover": "https://i.ytimg.com/vi/acdKE2hja7w/hqdefault.jpg"},
      {"title": "Aye Khuda", "artist": "Emraan Hashmi · Murder 2", "youtubeId": "HGfc06RZyjQ", "cover": "https://i.ytimg.com/vi/HGfc06RZyjQ/hqdefault.jpg"},
      {"title": "Aa Zara", "artist": "Emraan Hashmi · Murder 2", "youtubeId": "Vy0Wy88sXuA", "cover": "https://i.ytimg.com/vi/Vy0Wy88sXuA/hqdefault.jpg"},
      {"title": "Tujhko Bhulaana", "artist": "Emraan Hashmi · Murder 2", "youtubeId": "jOLy6Zl6Y38", "cover": "https://i.ytimg.com/vi/jOLy6Zl6Y38/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Jawani Diwani - A Youthful Joyride",
    tracks: [
      {"title": "YAAD TERI YAAD", "artist": "Emraan Hashmi · Jawani Diwani - A Youthful Joyride", "youtubeId": "1ETCy8PjxDs", "cover": "https://i.ytimg.com/vi/1ETCy8PjxDs/hqdefault.jpg"},
      {"title": "SINI NE SINI NE (REMIX)", "artist": "Emraan Hashmi · Jawani Diwani - A Youthful Joyride", "youtubeId": "5GG3dI4ZV_s", "cover": "https://i.ytimg.com/vi/5GG3dI4ZV_s/hqdefault.jpg"},
      {"title": "SINI NE SINI NE", "artist": "Emraan Hashmi · Jawani Diwani - A Youthful Joyride", "youtubeId": "FAylDlFBlMw", "cover": "https://i.ytimg.com/vi/FAylDlFBlMw/hqdefault.jpg"},
      {"title": "DIL DIWANA", "artist": "Emraan Hashmi · Jawani Diwani - A Youthful Joyride", "youtubeId": "moirzc-4xTs", "cover": "https://i.ytimg.com/vi/moirzc-4xTs/hqdefault.jpg"},
      {"title": "Ek Dilruba Hai", "artist": "Emraan Hashmi · Jawani Diwani - A Youthful Joyride", "youtubeId": "xR15L85d2oc", "cover": "https://i.ytimg.com/vi/xR15L85d2oc/hqdefault.jpg"},
      {"title": "ISHQ NE TERE", "artist": "Emraan Hashmi · Jawani Diwani - A Youthful Joyride", "youtubeId": "nakzkqqB15c", "cover": "https://i.ytimg.com/vi/nakzkqqB15c/hqdefault.jpg"},
      {"title": "Jawani Diwani", "artist": "Emraan Hashmi · Jawani Diwani - A Youthful Joyride", "youtubeId": "aow0yk3ACno", "cover": "https://i.ytimg.com/vi/aow0yk3ACno/hqdefault.jpg"},
      {"title": "JISKA MUJHE INTEZAAR", "artist": "Emraan Hashmi · Jawani Diwani - A Youthful Joyride", "youtubeId": "f_uhqcVz75Q", "cover": "https://i.ytimg.com/vi/f_uhqcVz75Q/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Dil Toh Baccha Hai Ji",
    tracks: [
      {"title": "Abhi Kuch Dino Se", "artist": "Emraan Hashmi · Dil Toh Baccha Hai Ji", "youtubeId": "fbdxYoFb64g", "cover": "https://i.ytimg.com/vi/fbdxYoFb64g/hqdefault.jpg"},
      {"title": "Tere Bin", "artist": "Emraan Hashmi · Dil Toh Baccha Hai Ji", "youtubeId": "dSD8XZVBO1M", "cover": "https://i.ytimg.com/vi/dSD8XZVBO1M/hqdefault.jpg"},
      {"title": "Beshuba", "artist": "Emraan Hashmi · Dil Toh Baccha Hai Ji", "youtubeId": "Z5wPYwPO704", "cover": "https://i.ytimg.com/vi/Z5wPYwPO704/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Main Rahoon Ya Na Rahoon",
    tracks: [
      {"title": "MAIN RAHOON YA NA RAHOON", "artist": "Emraan Hashmi · Main Rahoon Ya Na Rahoon", "youtubeId": "tw0qNz2EYEM", "cover": "https://i.ytimg.com/vi/tw0qNz2EYEM/hqdefault.jpg"},
      {"title": "MAIN RAHOON YA NA RAHOON", "artist": "Emraan Hashmi · Main Rahoon Ya Na Rahoon", "youtubeId": "8W-pRnIe7UM", "cover": "https://i.ytimg.com/vi/8W-pRnIe7UM/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Chocolate",
    tracks: [
      {"title": "Halka Halka Sa Yeh Sama", "artist": "Emraan Hashmi · Chocolate", "youtubeId": "5j5SQ8Oj4Kk", "cover": "https://i.ytimg.com/vi/5j5SQ8Oj4Kk/hqdefault.jpg"},
      {"title": "Halka Halka Sa Yeh Sama (Remix)", "artist": "Emraan Hashmi · Chocolate", "youtubeId": "MBM2rF6mMjs", "cover": "https://i.ytimg.com/vi/MBM2rF6mMjs/hqdefault.jpg"},
      {"title": "Mummy", "artist": "Emraan Hashmi · Chocolate", "youtubeId": "QA_VlKEMJ3w", "cover": "https://i.ytimg.com/vi/QA_VlKEMJ3w/hqdefault.jpg"},
      {"title": "Khalish", "artist": "Emraan Hashmi · Chocolate", "youtubeId": "HJYVleTnE1M", "cover": "https://i.ytimg.com/vi/HJYVleTnE1M/hqdefault.jpg"},
      {"title": "Jhuki Jhuki", "artist": "Emraan Hashmi · Chocolate", "youtubeId": "hLvjMLNjahQ", "cover": "https://i.ytimg.com/vi/hLvjMLNjahQ/hqdefault.jpg"},
      {"title": "Bheega Bheega", "artist": "Emraan Hashmi · Chocolate", "youtubeId": "qMnKlX8g8Uw", "cover": "https://i.ytimg.com/vi/qMnKlX8g8Uw/hqdefault.jpg"},
      {"title": "Zahreeli Raatein", "artist": "Emraan Hashmi · Chocolate", "youtubeId": "52m_EFqQVaM", "cover": "https://i.ytimg.com/vi/52m_EFqQVaM/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Mumbai Saga",
    tracks: [
      {"title": "Lut Gaye (feat. Emraan Hashmi)", "artist": "Emraan Hashmi · Mumbai Saga", "youtubeId": "4z-oDk1utVo", "cover": "https://i.ytimg.com/vi/4z-oDk1utVo/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · The Body",
    tracks: [
      {"title": "Itna Pyaar Karo", "artist": "Emraan Hashmi · The Body", "youtubeId": "gujOAQLBM8s", "cover": "https://i.ytimg.com/vi/gujOAQLBM8s/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Why Cheat India",
    tracks: [
      {"title": "Phir Mulaaqat (From \"Cheat India\")", "artist": "Emraan Hashmi · Why Cheat India", "youtubeId": "xPShMvvbsSI", "cover": "https://i.ytimg.com/vi/xPShMvvbsSI/hqdefault.jpg"},
      {"title": "Kaamyaab (From \"Cheat India\")", "artist": "Emraan Hashmi · Why Cheat India", "youtubeId": "Owdb3wvEGSw", "cover": "https://i.ytimg.com/vi/Owdb3wvEGSw/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Lut Gaye",
    tracks: [
      {"title": "Lut Gaye (feat. Emraan Hashmi)", "artist": "Emraan Hashmi · Lut Gaye", "youtubeId": "4z-oDk1utVo", "cover": "https://i.ytimg.com/vi/4z-oDk1utVo/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Ishq Nahi Karte",
    tracks: [
      {"title": "Ishq Nahi Karte", "artist": "Emraan Hashmi · Ishq Nahi Karte", "youtubeId": "C9tdU2zWo5k", "cover": "https://i.ytimg.com/vi/C9tdU2zWo5k/hqdefault.jpg"}
    ]
  },
  {
    name: "EH · Baarish",
    tracks: [
      {"title": "Baarish", "artist": "Emraan Hashmi · Baarish", "youtubeId": "CrL3h1Bq0Iw", "cover": "https://i.ytimg.com/vi/CrL3h1Bq0Iw/hqdefault.jpg"}
    ]
  },
  {
    name: "Arijit Singh",
    tracks: [
      {"title": "Apna Bana Le (From \"Bhediya\")", "artist": "Arijit Singh", "youtubeId": "YALvuUpY_b0", "cover": "https://i.ytimg.com/vi/YALvuUpY_b0/hqdefault.jpg"},
      {"title": "Zaalima", "artist": "Arijit Singh", "youtubeId": "eXkHvT--DBU", "cover": "https://i.ytimg.com/vi/eXkHvT--DBU/hqdefault.jpg"},
      {"title": "Tere Hawaale", "artist": "Arijit Singh", "youtubeId": "Z0VbANbyH2o", "cover": "https://i.ytimg.com/vi/Z0VbANbyH2o/hqdefault.jpg"},
      {"title": "Yeh Fitoor Mera", "artist": "Arijit Singh", "youtubeId": "Zkqhiil2kSo", "cover": "https://i.ytimg.com/vi/Zkqhiil2kSo/hqdefault.jpg"},
      {"title": "Phir Bhi Tumko Chaahunga", "artist": "Arijit Singh", "youtubeId": "q1uPPBJ2tcI", "cover": "https://i.ytimg.com/vi/q1uPPBJ2tcI/hqdefault.jpg"},
      {"title": "Kesariya (From \"Brahmastra\")", "artist": "Arijit Singh", "youtubeId": "NJAv_7lHUIU", "cover": "https://i.ytimg.com/vi/NJAv_7lHUIU/hqdefault.jpg"},
      {"title": "AGAR TUM SAATH HO", "artist": "Arijit Singh", "youtubeId": "FOA9iyxsW_A", "cover": "https://i.ytimg.com/vi/FOA9iyxsW_A/hqdefault.jpg"},
      {"title": "Yeh Fitoor Mera - Arijit Singh Vocals Only", "artist": "Arijit Singh", "youtubeId": "HZdooZcE5T4", "cover": "https://i.ytimg.com/vi/HZdooZcE5T4/hqdefault.jpg"},
      {"title": "Tum Hi Ho", "artist": "Arijit Singh", "youtubeId": "fsiPzT50ZiM", "cover": "https://i.ytimg.com/vi/fsiPzT50ZiM/hqdefault.jpg"},
      {"title": "Sitaare (From \"Ikkis\")", "artist": "Arijit Singh", "youtubeId": "uT_HXrrmHX8", "cover": "https://i.ytimg.com/vi/uT_HXrrmHX8/hqdefault.jpg"},
      {"title": "Oh Shiv Mere", "artist": "Arijit Singh", "youtubeId": "sq3SPPh0n3s", "cover": "https://i.ytimg.com/vi/sq3SPPh0n3s/hqdefault.jpg"},
      {"title": "Raanjhana", "artist": "Arijit Singh", "youtubeId": "SPX700IVmB8", "cover": "https://i.ytimg.com/vi/SPX700IVmB8/hqdefault.jpg"},
      {"title": "Sanam Re", "artist": "Arijit Singh", "youtubeId": "utU4laPPKls", "cover": "https://i.ytimg.com/vi/utU4laPPKls/hqdefault.jpg"},
      {"title": "Gehra Hua (From \"Dhurandhar\")", "artist": "Arijit Singh", "youtubeId": "i1o1p_DD6TU", "cover": "https://i.ytimg.com/vi/i1o1p_DD6TU/hqdefault.jpg"},
      {"title": "ISHQ MUBARAK", "artist": "Arijit Singh", "youtubeId": "LmMzgIvIJCE", "cover": "https://i.ytimg.com/vi/LmMzgIvIJCE/hqdefault.jpg"},
      {"title": "Phir Le Aya Dil", "artist": "Arijit Singh", "youtubeId": "B0p-iL_WbcA", "cover": "https://i.ytimg.com/vi/B0p-iL_WbcA/hqdefault.jpg"},
      {"title": "Tujhko (From “Cocktail 2”)", "artist": "Arijit Singh", "youtubeId": "_ofFkIYi00Q", "cover": "https://i.ytimg.com/vi/_ofFkIYi00Q/hqdefault.jpg"},
      {"title": "Channa Mereya (From \"Ae Dil Hai Mushkil\")", "artist": "Arijit Singh", "youtubeId": "FO9rBogdRRQ", "cover": "https://i.ytimg.com/vi/FO9rBogdRRQ/hqdefault.jpg"},
      {"title": "Dil Hua Tera Humsafar", "artist": "Arijit Singh", "youtubeId": "C3XSStOw7P8", "cover": "https://i.ytimg.com/vi/C3XSStOw7P8/hqdefault.jpg"},
      {"title": "Tujhe Kitna Chahne Lage (From \"Kabir Singh\")", "artist": "Arijit Singh", "youtubeId": "Pm0Ga7R-vrM", "cover": "https://i.ytimg.com/vi/Pm0Ga7R-vrM/hqdefault.jpg"},
      {"title": "Samjhawan", "artist": "Arijit Singh", "youtubeId": "pUwpLoLlzNQ", "cover": "https://i.ytimg.com/vi/pUwpLoLlzNQ/hqdefault.jpg"},
      {"title": "Janam Janam", "artist": "Arijit Singh", "youtubeId": "DsWmEF-NjWU", "cover": "https://i.ytimg.com/vi/DsWmEF-NjWU/hqdefault.jpg"},
      {"title": "Chahun Main Ya Naa", "artist": "Arijit Singh", "youtubeId": "NPC-9hYbkLE", "cover": "https://i.ytimg.com/vi/NPC-9hYbkLE/hqdefault.jpg"},
      {"title": "Aasan Nahin Yahan", "artist": "Arijit Singh", "youtubeId": "p8eD8PQcC8I", "cover": "https://i.ytimg.com/vi/p8eD8PQcC8I/hqdefault.jpg"},
      {"title": "Tere Sang Ishq Hua", "artist": "Arijit Singh", "youtubeId": "qCXbell_6d4", "cover": "https://i.ytimg.com/vi/qCXbell_6d4/hqdefault.jpg"}
    ]
  },
  {
    name: "Atif Aslam",
    tracks: [
      {"title": "Doorie", "artist": "Atif Aslam", "youtubeId": "EEvIj7GhB6c", "cover": "https://i.ytimg.com/vi/EEvIj7GhB6c/hqdefault.jpg"},
      {"title": "Tere Liye", "artist": "Atif Aslam", "youtubeId": "5U5Ru0nTiUM", "cover": "https://i.ytimg.com/vi/5U5Ru0nTiUM/hqdefault.jpg"},
      {"title": "Pehli Dafa", "artist": "Atif Aslam", "youtubeId": "gOSM2dEqwsE", "cover": "https://i.ytimg.com/vi/gOSM2dEqwsE/hqdefault.jpg"},
      {"title": "Kuch Is Tarah", "artist": "Atif Aslam", "youtubeId": "E74V-X9AtAg", "cover": "https://i.ytimg.com/vi/E74V-X9AtAg/hqdefault.jpg"},
      {"title": "Hona Tha Pyar", "artist": "Atif Aslam", "youtubeId": "_65_c-0ubCw", "cover": "https://i.ytimg.com/vi/_65_c-0ubCw/hqdefault.jpg"},
      {"title": "Tere Bin", "artist": "Atif Aslam", "youtubeId": "7jbqQi5XSP4", "cover": "https://i.ytimg.com/vi/7jbqQi5XSP4/hqdefault.jpg"},
      {"title": "Pehli Nazar Mein", "artist": "Atif Aslam", "youtubeId": "swcCuuQKGJ4", "cover": "https://i.ytimg.com/vi/swcCuuQKGJ4/hqdefault.jpg"},
      {"title": "Main Rang Sharbaton Ka", "artist": "Atif Aslam", "youtubeId": "cE4atI_v-Z0", "cover": "https://i.ytimg.com/vi/cE4atI_v-Z0/hqdefault.jpg"},
      {"title": "Meri Kahani", "artist": "Atif Aslam", "youtubeId": "-y0ooKsJ0T0", "cover": "https://i.ytimg.com/vi/-y0ooKsJ0T0/hqdefault.jpg"},
      {"title": "Tajdar-e-Haram", "artist": "Atif Aslam", "youtubeId": "vNFqBLI6IIA", "cover": "https://i.ytimg.com/vi/vNFqBLI6IIA/hqdefault.jpg"},
      {"title": "O'Meri Laila", "artist": "Atif Aslam", "youtubeId": "KdRPDNDNho0", "cover": "https://i.ytimg.com/vi/KdRPDNDNho0/hqdefault.jpg"},
      {"title": "O Saathi (From \"Baaghi 2\")", "artist": "Atif Aslam", "youtubeId": "SRPvngN3Uws", "cover": "https://i.ytimg.com/vi/SRPvngN3Uws/hqdefault.jpg"},
      {"title": "Tajdar-e-Haram", "artist": "Atif Aslam", "youtubeId": "qmBW9-fUvag", "cover": "https://i.ytimg.com/vi/qmBW9-fUvag/hqdefault.jpg"},
      {"title": "Piya O Re Piya", "artist": "Atif Aslam", "youtubeId": "TLEPzT8jrUU", "cover": "https://i.ytimg.com/vi/TLEPzT8jrUU/hqdefault.jpg"},
      {"title": "Aa Bhi Jaa Sanam", "artist": "Atif Aslam", "youtubeId": "FmMAkGeUl0w", "cover": "https://i.ytimg.com/vi/FmMAkGeUl0w/hqdefault.jpg"},
      {"title": "Tera Hua (From \"Loveyatri\")", "artist": "Atif Aslam", "youtubeId": "b8VXFul_Tzs", "cover": "https://i.ytimg.com/vi/b8VXFul_Tzs/hqdefault.jpg"},
      {"title": "Tu Jaane Na (Jhankar)", "artist": "Atif Aslam", "youtubeId": "fAW7o94QwXg", "cover": "https://i.ytimg.com/vi/fAW7o94QwXg/hqdefault.jpg"},
      {"title": "Lets Have Some Fun", "artist": "Atif Aslam", "youtubeId": "MGxdeEBa2cg", "cover": "https://i.ytimg.com/vi/MGxdeEBa2cg/hqdefault.jpg"},
      {"title": "Ishq", "artist": "Atif Aslam", "youtubeId": "omYow2D-t1o", "cover": "https://i.ytimg.com/vi/omYow2D-t1o/hqdefault.jpg"},
      {"title": "Safar Main Hu", "artist": "Atif Aslam", "youtubeId": "L0lAd6JdeU8", "cover": "https://i.ytimg.com/vi/L0lAd6JdeU8/hqdefault.jpg"},
      {"title": "Woh Lamhe Woh Baatein", "artist": "Atif Aslam", "youtubeId": "-xjhuuVXcF0", "cover": "https://i.ytimg.com/vi/-xjhuuVXcF0/hqdefault.jpg"},
      {"title": "Woh Lamhe Woh Baatein - Trending Version", "artist": "Atif Aslam", "youtubeId": "NEX1CbRXnic", "cover": "https://i.ytimg.com/vi/NEX1CbRXnic/hqdefault.jpg"},
      {"title": "Selfish Atif Aslam", "artist": "Atif Aslam", "youtubeId": "x3BKFq4lSY8", "cover": "https://i.ytimg.com/vi/x3BKFq4lSY8/hqdefault.jpg"},
      {"title": "Tum", "artist": "Atif Aslam", "youtubeId": "3IFiM6DCJ4o", "cover": "https://i.ytimg.com/vi/3IFiM6DCJ4o/hqdefault.jpg"},
      {"title": "Char Yaar", "artist": "Atif Aslam", "youtubeId": "KkpKWQQJ2dQ", "cover": "https://i.ytimg.com/vi/KkpKWQQJ2dQ/hqdefault.jpg"}
    ]
  },
  {
    name: "KK",
    tracks: [
      {"title": "Dil Ibaadat", "artist": "KK", "youtubeId": "IgITZfS7L_8", "cover": "https://i.ytimg.com/vi/IgITZfS7L_8/hqdefault.jpg"},
      {"title": "Labon Ko", "artist": "KK", "youtubeId": "12pMB_mCBOo", "cover": "https://i.ytimg.com/vi/12pMB_mCBOo/hqdefault.jpg"},
      {"title": "Kya Mujhe Pyar Hai", "artist": "KK", "youtubeId": "XPu9ZE4Onzc", "cover": "https://i.ytimg.com/vi/XPu9ZE4Onzc/hqdefault.jpg"},
      {"title": "Beete Lamhein", "artist": "KK", "youtubeId": "8pMiuAXNBf8", "cover": "https://i.ytimg.com/vi/8pMiuAXNBf8/hqdefault.jpg"},
      {"title": "Tujhe Sochta Hoon", "artist": "KK", "youtubeId": "6LU2MI7VPuc", "cover": "https://i.ytimg.com/vi/6LU2MI7VPuc/hqdefault.jpg"},
      {"title": "Haan Tu Hain", "artist": "KK", "youtubeId": "1kcCk4YRJdo", "cover": "https://i.ytimg.com/vi/1kcCk4YRJdo/hqdefault.jpg"},
      {"title": "Tu Hi Meri Shab Hai", "artist": "KK", "youtubeId": "cGNcjqXe87U", "cover": "https://i.ytimg.com/vi/cGNcjqXe87U/hqdefault.jpg"},
      {"title": "SONIYE", "artist": "KK", "youtubeId": "zua9FeGzTJI", "cover": "https://i.ytimg.com/vi/zua9FeGzTJI/hqdefault.jpg"},
      {"title": "O Meri Jaan", "artist": "KK", "youtubeId": "rXVot29Ez6Y", "cover": "https://i.ytimg.com/vi/rXVot29Ez6Y/hqdefault.jpg"},
      {"title": "TERI YAADON MEIN", "artist": "KK", "youtubeId": "VMSNq_wtBDQ", "cover": "https://i.ytimg.com/vi/VMSNq_wtBDQ/hqdefault.jpg"},
      {"title": "いかないで - Ikanaide", "artist": "KK", "youtubeId": "xpLmRhIC4_k", "cover": "https://i.ytimg.com/vi/xpLmRhIC4_k/hqdefault.jpg"},
      {"title": "Such Keh Raha Hai", "artist": "KK", "youtubeId": "zV7pfxeh5dY", "cover": "https://i.ytimg.com/vi/zV7pfxeh5dY/hqdefault.jpg"},
      {"title": "MERE PALAK KA TU HI SITARA", "artist": "KK", "youtubeId": "wpSFyZJrPqA", "cover": "https://i.ytimg.com/vi/wpSFyZJrPqA/hqdefault.jpg"},
      {"title": "Jaavedaan Hai", "artist": "KK", "youtubeId": "uwRYNxyEo8c", "cover": "https://i.ytimg.com/vi/uwRYNxyEo8c/hqdefault.jpg"},
      {"title": "Tum Ho Mera Pyar", "artist": "KK", "youtubeId": "khbeNdxgEVs", "cover": "https://i.ytimg.com/vi/khbeNdxgEVs/hqdefault.jpg"},
      {"title": "アイロニ - Irony", "artist": "KK", "youtubeId": "Y-YEB9DsHBg", "cover": "https://i.ytimg.com/vi/Y-YEB9DsHBg/hqdefault.jpg"},
      {"title": "オレンジ - Orange", "artist": "KK", "youtubeId": "Co2M2g7e6J4", "cover": "https://i.ytimg.com/vi/Co2M2g7e6J4/hqdefault.jpg"},
      {"title": "Alvida", "artist": "KK", "youtubeId": "g3wCsN5BsaU", "cover": "https://i.ytimg.com/vi/g3wCsN5BsaU/hqdefault.jpg"},
      {"title": "Ajab Si", "artist": "KK", "youtubeId": "bdS6OoH1W2A", "cover": "https://i.ytimg.com/vi/bdS6OoH1W2A/hqdefault.jpg"},
      {"title": "KABHI AAYINE PE LIKHA TUJHE", "artist": "KK", "youtubeId": "A-U6zATa7Tc", "cover": "https://i.ytimg.com/vi/A-U6zATa7Tc/hqdefault.jpg"},
      {"title": "Khuda Jaane (From \"Bachna Ae Haseeno\")", "artist": "KK", "youtubeId": "aG7MaqtWxT8", "cover": "https://i.ytimg.com/vi/aG7MaqtWxT8/hqdefault.jpg"},
      {"title": "Pyaar Ke Pal", "artist": "KK", "youtubeId": "ndU9kBk3UWI", "cover": "https://i.ytimg.com/vi/ndU9kBk3UWI/hqdefault.jpg"},
      {"title": "Saanson Ke", "artist": "KK", "youtubeId": "1K4yLmfPTnA", "cover": "https://i.ytimg.com/vi/1K4yLmfPTnA/hqdefault.jpg"},
      {"title": "Zara Sa (Power Ballad)", "artist": "KK", "youtubeId": "Chp2DAqpKqU", "cover": "https://i.ytimg.com/vi/Chp2DAqpKqU/hqdefault.jpg"},
      {"title": "Yaaron", "artist": "KK", "youtubeId": "6NjEobhb0Qc", "cover": "https://i.ytimg.com/vi/6NjEobhb0Qc/hqdefault.jpg"}
    ]
  },
  {
    name: "Shreya Ghoshal",
    tracks: [
      {"title": "KALYANI (Remix)", "artist": "Shreya Ghoshal", "youtubeId": "zAiIgYOH4Ys", "cover": "https://i.ytimg.com/vi/zAiIgYOH4Ys/hqdefault.jpg"},
      {"title": "Tere Liye", "artist": "Shreya Ghoshal", "youtubeId": "5U5Ru0nTiUM", "cover": "https://i.ytimg.com/vi/5U5Ru0nTiUM/hqdefault.jpg"},
      {"title": "Samjhawan", "artist": "Shreya Ghoshal", "youtubeId": "pUwpLoLlzNQ", "cover": "https://i.ytimg.com/vi/pUwpLoLlzNQ/hqdefault.jpg"},
      {"title": "Sunn Raha Hai", "artist": "Shreya Ghoshal", "youtubeId": "1If9aw74Tj4", "cover": "https://i.ytimg.com/vi/1If9aw74Tj4/hqdefault.jpg"},
      {"title": "Ghar More Pardesiya", "artist": "Shreya Ghoshal", "youtubeId": "OumlYgpiA88", "cover": "https://i.ytimg.com/vi/OumlYgpiA88/hqdefault.jpg"},
      {"title": "Piyu Bole", "artist": "Shreya Ghoshal", "youtubeId": "rvnyVvSRAxs", "cover": "https://i.ytimg.com/vi/rvnyVvSRAxs/hqdefault.jpg"},
      {"title": "Thodi Der", "artist": "Shreya Ghoshal", "youtubeId": "xuBwv7yyjR8", "cover": "https://i.ytimg.com/vi/xuBwv7yyjR8/hqdefault.jpg"},
      {"title": "Jabiliki", "artist": "Shreya Ghoshal", "youtubeId": "kpeDi7xarwY", "cover": "https://i.ytimg.com/vi/kpeDi7xarwY/hqdefault.jpg"},
      {"title": "Aatach Baya Ka Baavarla", "artist": "Shreya Ghoshal", "youtubeId": "1ftsUpiT7jo", "cover": "https://i.ytimg.com/vi/1ftsUpiT7jo/hqdefault.jpg"},
      {"title": "Dhadak Title Track", "artist": "Shreya Ghoshal", "youtubeId": "1mGEhLpfXmg", "cover": "https://i.ytimg.com/vi/1mGEhLpfXmg/hqdefault.jpg"},
      {"title": "Dhoom Taana", "artist": "Shreya Ghoshal", "youtubeId": "Qx8ShiEImYU", "cover": "https://i.ytimg.com/vi/Qx8ShiEImYU/hqdefault.jpg"},
      {"title": "Mashallah", "artist": "Shreya Ghoshal", "youtubeId": "4-mSFnXqcyc", "cover": "https://i.ytimg.com/vi/4-mSFnXqcyc/hqdefault.jpg"},
      {"title": "Silsila Ye Chahat Ka (From \"Devdas\")", "artist": "Shreya Ghoshal", "youtubeId": "NodPBY7tSYY", "cover": "https://i.ytimg.com/vi/NodPBY7tSYY/hqdefault.jpg"},
      {"title": "Ki Mayay (From \"Belashuru\")", "artist": "Shreya Ghoshal", "youtubeId": "TEk4RnZW2Xg", "cover": "https://i.ytimg.com/vi/TEk4RnZW2Xg/hqdefault.jpg"},
      {"title": "DIL KAA JO HAAL HAI", "artist": "Shreya Ghoshal", "youtubeId": "lg4R-_QWEUY", "cover": "https://i.ytimg.com/vi/lg4R-_QWEUY/hqdefault.jpg"},
      {"title": "O SANAM", "artist": "Shreya Ghoshal", "youtubeId": "ZmJWGzoHQzM", "cover": "https://i.ytimg.com/vi/ZmJWGzoHQzM/hqdefault.jpg"},
      {"title": "Angaaron", "artist": "Shreya Ghoshal", "youtubeId": "zjcFE4t8acY", "cover": "https://i.ytimg.com/vi/zjcFE4t8acY/hqdefault.jpg"},
      {"title": "Leja Leja", "artist": "Shreya Ghoshal", "youtubeId": "1Ojb5jUy4LM", "cover": "https://i.ytimg.com/vi/1Ojb5jUy4LM/hqdefault.jpg"},
      {"title": "TERE NAINA", "artist": "Shreya Ghoshal", "youtubeId": "jbtF5YR6hNU", "cover": "https://i.ytimg.com/vi/jbtF5YR6hNU/hqdefault.jpg"},
      {"title": "Jana Gana Mana", "artist": "Shreya Ghoshal", "youtubeId": "u9XT8qjzBVE", "cover": "https://i.ytimg.com/vi/u9XT8qjzBVE/hqdefault.jpg"},
      {"title": "Teri Meri - Reprise", "artist": "Shreya Ghoshal", "youtubeId": "MZUOKecXzq0", "cover": "https://i.ytimg.com/vi/MZUOKecXzq0/hqdefault.jpg"},
      {"title": "Param Sundari", "artist": "Shreya Ghoshal", "youtubeId": "7Hhg6bXOZnQ", "cover": "https://i.ytimg.com/vi/7Hhg6bXOZnQ/hqdefault.jpg"},
      {"title": "Kaana Mullal (Duet)", "artist": "Shreya Ghoshal", "youtubeId": "hd0Ks1RtT6M", "cover": "https://i.ytimg.com/vi/hd0Ks1RtT6M/hqdefault.jpg"},
      {"title": "Saiyaara Reprise - Female", "artist": "Shreya Ghoshal", "youtubeId": "HUlpRz6q33g", "cover": "https://i.ytimg.com/vi/HUlpRz6q33g/hqdefault.jpg"},
      {"title": "Barso Re", "artist": "Shreya Ghoshal", "youtubeId": "lVyc2564rDs", "cover": "https://i.ytimg.com/vi/lVyc2564rDs/hqdefault.jpg"}
    ]
  },
  {
    name: "Mohit Chauhan",
    tracks: [
      {"title": "Tum Se Hi", "artist": "Mohit Chauhan", "youtubeId": "I94fhjQ-U30", "cover": "https://i.ytimg.com/vi/I94fhjQ-U30/hqdefault.jpg"},
      {"title": "Abhi Kuch Dino Se", "artist": "Mohit Chauhan", "youtubeId": "DEatLVqGuTo", "cover": "https://i.ytimg.com/vi/DEatLVqGuTo/hqdefault.jpg"},
      {"title": "Mai Ni Meriye", "artist": "Mohit Chauhan", "youtubeId": "e9Q9hAVirwk", "cover": "https://i.ytimg.com/vi/e9Q9hAVirwk/hqdefault.jpg"},
      {"title": "Khuda Bhi", "artist": "Mohit Chauhan", "youtubeId": "ppcVqfsekIs", "cover": "https://i.ytimg.com/vi/ppcVqfsekIs/hqdefault.jpg"},
      {"title": "Aur Ho", "artist": "Mohit Chauhan", "youtubeId": "Tw8iApinXoU", "cover": "https://i.ytimg.com/vi/Tw8iApinXoU/hqdefault.jpg"},
      {"title": "MATARGASHTI", "artist": "Mohit Chauhan", "youtubeId": "UFIV8ELiQvU", "cover": "https://i.ytimg.com/vi/UFIV8ELiQvU/hqdefault.jpg"},
      {"title": "Nadaan Parinde", "artist": "Mohit Chauhan", "youtubeId": "waHJsPu_fmU", "cover": "https://i.ytimg.com/vi/waHJsPu_fmU/hqdefault.jpg"},
      {"title": "Tum Ho", "artist": "Mohit Chauhan", "youtubeId": "AqVIQ9ymvM8", "cover": "https://i.ytimg.com/vi/AqVIQ9ymvM8/hqdefault.jpg"},
      {"title": "KUCHH KHAAS", "artist": "Mohit Chauhan", "youtubeId": "YgLCRIH3GZk", "cover": "https://i.ytimg.com/vi/YgLCRIH3GZk/hqdefault.jpg"},
      {"title": "Yun Hi", "artist": "Mohit Chauhan", "youtubeId": "Rjpl5Z0Jq1c", "cover": "https://i.ytimg.com/vi/Rjpl5Z0Jq1c/hqdefault.jpg"},
      {"title": "MASAKALI", "artist": "Mohit Chauhan", "youtubeId": "D395bK70m3w", "cover": "https://i.ytimg.com/vi/D395bK70m3w/hqdefault.jpg"},
      {"title": "Phir Se Ud Chala", "artist": "Mohit Chauhan", "youtubeId": "mb7-qmKLoe0", "cover": "https://i.ytimg.com/vi/mb7-qmKLoe0/hqdefault.jpg"},
      {"title": "Dil Ye Bekarar Kyun Hai", "artist": "Mohit Chauhan", "youtubeId": "5oKFcSeHTSU", "cover": "https://i.ytimg.com/vi/5oKFcSeHTSU/hqdefault.jpg"},
      {"title": "Tujhe Bhula Diya", "artist": "Mohit Chauhan", "youtubeId": "o-9VdyXZKsQ", "cover": "https://i.ytimg.com/vi/o-9VdyXZKsQ/hqdefault.jpg"},
      {"title": "KHALI SALAM DUA", "artist": "Mohit Chauhan", "youtubeId": "GdLHO0X24eI", "cover": "https://i.ytimg.com/vi/GdLHO0X24eI/hqdefault.jpg"},
      {"title": "Dooriyan", "artist": "Mohit Chauhan", "youtubeId": "OiqiOKyeO8A", "cover": "https://i.ytimg.com/vi/OiqiOKyeO8A/hqdefault.jpg"},
      {"title": "Jo Bhi Main", "artist": "Mohit Chauhan", "youtubeId": "FS7fbMl-h10", "cover": "https://i.ytimg.com/vi/FS7fbMl-h10/hqdefault.jpg"},
      {"title": "Kun Faya Kun", "artist": "Mohit Chauhan", "youtubeId": "_fmA1RoHbzA", "cover": "https://i.ytimg.com/vi/_fmA1RoHbzA/hqdefault.jpg"},
      {"title": "Is This Love", "artist": "Mohit Chauhan", "youtubeId": "589fbH7M1QM", "cover": "https://i.ytimg.com/vi/589fbH7M1QM/hqdefault.jpg"},
      {"title": "Safar", "artist": "Mohit Chauhan", "youtubeId": "JoOkxAfeZI4", "cover": "https://i.ytimg.com/vi/JoOkxAfeZI4/hqdefault.jpg"},
      {"title": "Dil Mera Love You Bol Gya", "artist": "Mohit Chauhan", "youtubeId": "CemubztnP80", "cover": "https://i.ytimg.com/vi/CemubztnP80/hqdefault.jpg"},
      {"title": "RABBA", "artist": "Mohit Chauhan", "youtubeId": "ykWgSGsZyeo", "cover": "https://i.ytimg.com/vi/ykWgSGsZyeo/hqdefault.jpg"},
      {"title": "Rab Ka Shukrana", "artist": "Mohit Chauhan", "youtubeId": "6uPC2W6Mh78", "cover": "https://i.ytimg.com/vi/6uPC2W6Mh78/hqdefault.jpg"},
      {"title": "Tu Hi Junoon", "artist": "Mohit Chauhan", "youtubeId": "8wUV0G7h6Gw", "cover": "https://i.ytimg.com/vi/8wUV0G7h6Gw/hqdefault.jpg"},
      {"title": "Chikiri Chikiri (Hindi)", "artist": "Mohit Chauhan", "youtubeId": "0GQQqy97igg", "cover": "https://i.ytimg.com/vi/0GQQqy97igg/hqdefault.jpg"}
    ]
  },
  {
    name: "Jubin Nautiyal",
    tracks: [
      {"title": "Humnava Mere", "artist": "Jubin Nautiyal", "youtubeId": "n9qQiuwBywU", "cover": "https://i.ytimg.com/vi/n9qQiuwBywU/hqdefault.jpg"},
      {"title": "Dil Galti Kar Baitha Hai", "artist": "Jubin Nautiyal", "youtubeId": "9vpr7vQE84w", "cover": "https://i.ytimg.com/vi/9vpr7vQE84w/hqdefault.jpg"},
      {"title": "Khushi Jab Bhi Teri", "artist": "Jubin Nautiyal", "youtubeId": "f34ajYgfeCg", "cover": "https://i.ytimg.com/vi/f34ajYgfeCg/hqdefault.jpg"},
      {"title": "Barsaat Ki Dhun", "artist": "Jubin Nautiyal", "youtubeId": "_XeTEgxlXs8", "cover": "https://i.ytimg.com/vi/_XeTEgxlXs8/hqdefault.jpg"},
      {"title": "Bewafa Tera Masoom Chehra", "artist": "Jubin Nautiyal", "youtubeId": "ESiY1AXXWrI", "cover": "https://i.ytimg.com/vi/ESiY1AXXWrI/hqdefault.jpg"},
      {"title": "Meri Aashiqui", "artist": "Jubin Nautiyal", "youtubeId": "WciIvatfPko", "cover": "https://i.ytimg.com/vi/WciIvatfPko/hqdefault.jpg"},
      {"title": "Barbaad (Movie: Saiyaara)", "artist": "Jubin Nautiyal", "youtubeId": "DRZHVrSmcWU", "cover": "https://i.ytimg.com/vi/DRZHVrSmcWU/hqdefault.jpg"},
      {"title": "Chitthi", "artist": "Jubin Nautiyal", "youtubeId": "X-jvuL0fpOg", "cover": "https://i.ytimg.com/vi/X-jvuL0fpOg/hqdefault.jpg"},
      {"title": "Main Jis Din Bhulaa Du", "artist": "Jubin Nautiyal", "youtubeId": "O1INYDcAuqI", "cover": "https://i.ytimg.com/vi/O1INYDcAuqI/hqdefault.jpg"},
      {"title": "Mast Nazron Se", "artist": "Jubin Nautiyal", "youtubeId": "EjK8XQBVzDQ", "cover": "https://i.ytimg.com/vi/EjK8XQBVzDQ/hqdefault.jpg"},
      {"title": "Lut Gaye (feat. Emraan Hashmi)", "artist": "Jubin Nautiyal", "youtubeId": "4z-oDk1utVo", "cover": "https://i.ytimg.com/vi/4z-oDk1utVo/hqdefault.jpg"},
      {"title": "Rim Jhim", "artist": "Jubin Nautiyal", "youtubeId": "5d8COAtoBwY", "cover": "https://i.ytimg.com/vi/5d8COAtoBwY/hqdefault.jpg"},
      {"title": "Kabira", "artist": "Jubin Nautiyal", "youtubeId": "Uo7GuOC_-qM", "cover": "https://i.ytimg.com/vi/Uo7GuOC_-qM/hqdefault.jpg"},
      {"title": "Dil Chahte Ho", "artist": "Jubin Nautiyal", "youtubeId": "0ApQaG8wNsU", "cover": "https://i.ytimg.com/vi/0ApQaG8wNsU/hqdefault.jpg"},
      {"title": "Tujhe Kitna Chahein Aur (Acoustic)", "artist": "Jubin Nautiyal", "youtubeId": "zp1W6ul5yMs", "cover": "https://i.ytimg.com/vi/zp1W6ul5yMs/hqdefault.jpg"},
      {"title": "Wafa Na Raas Aayee", "artist": "Jubin Nautiyal", "youtubeId": "7FjiwxfwgpY", "cover": "https://i.ytimg.com/vi/7FjiwxfwgpY/hqdefault.jpg"},
      {"title": "Madhurashtakam", "artist": "Jubin Nautiyal", "youtubeId": "IzUV_1yJcfA", "cover": "https://i.ytimg.com/vi/IzUV_1yJcfA/hqdefault.jpg"},
      {"title": "Agar Tum Saath Ho / Maahi Ve (From \"T-Series Mixtape\")", "artist": "Jubin Nautiyal", "youtubeId": "9n3Me5rXcLQ", "cover": "https://i.ytimg.com/vi/9n3Me5rXcLQ/hqdefault.jpg"},
      {"title": "Aakhri Ishq (From \"Dhurandhar The Revenge\")", "artist": "Jubin Nautiyal", "youtubeId": "BS8il9QTp6c", "cover": "https://i.ytimg.com/vi/BS8il9QTp6c/hqdefault.jpg"},
      {"title": "Dil Jaaniye (From \"Khandaani Shafakhana\")", "artist": "Jubin Nautiyal", "youtubeId": "N3gcuY1ai7Q", "cover": "https://i.ytimg.com/vi/N3gcuY1ai7Q/hqdefault.jpg"},
      {"title": "Humko Tumse", "artist": "Jubin Nautiyal", "youtubeId": "300e7q38mnY", "cover": "https://i.ytimg.com/vi/300e7q38mnY/hqdefault.jpg"},
      {"title": "Ghar Aaja", "artist": "Jubin Nautiyal", "youtubeId": "d7Xxeg-IbtM", "cover": "https://i.ytimg.com/vi/d7Xxeg-IbtM/hqdefault.jpg"},
      {"title": "Ganga Kinare (From \"Bhool Chuk Maaf\")", "artist": "Jubin Nautiyal", "youtubeId": "WSwz0yYBBmk", "cover": "https://i.ytimg.com/vi/WSwz0yYBBmk/hqdefault.jpg"},
      {"title": "Zindagi Kuch Toh Bata (Reprise)", "artist": "Jubin Nautiyal", "youtubeId": "-0vjLZtDkq0", "cover": "https://i.ytimg.com/vi/-0vjLZtDkq0/hqdefault.jpg"},
      {"title": "Mere Ghar Ram Aaye Hain", "artist": "Jubin Nautiyal", "youtubeId": "kVW5SVfoRt8", "cover": "https://i.ytimg.com/vi/kVW5SVfoRt8/hqdefault.jpg"}
    ]
  },
  {
    name: "Armaan Malik",
    tracks: [
      {"title": "Dil Mein Ho Tum (From \"Cheat India\")", "artist": "Armaan Malik", "youtubeId": "64lEY8jj4RA", "cover": "https://i.ytimg.com/vi/64lEY8jj4RA/hqdefault.jpg"},
      {"title": "JAB TAK", "artist": "Armaan Malik", "youtubeId": "Wg50Ve_Mpg4", "cover": "https://i.ytimg.com/vi/Wg50Ve_Mpg4/hqdefault.jpg"},
      {"title": "MAIN RAHOON YA NA RAHOON", "artist": "Armaan Malik", "youtubeId": "8W-pRnIe7UM", "cover": "https://i.ytimg.com/vi/8W-pRnIe7UM/hqdefault.jpg"},
      {"title": "Pehla Pyaar Tu Hai", "artist": "Armaan Malik", "youtubeId": "1bvALYhmByQ", "cover": "https://i.ytimg.com/vi/1bvALYhmByQ/hqdefault.jpg"},
      {"title": "Bol Do Na Zara", "artist": "Armaan Malik", "youtubeId": "2Y3Wsdq-MN8", "cover": "https://i.ytimg.com/vi/2Y3Wsdq-MN8/hqdefault.jpg"},
      {"title": "KUCH TO HAI", "artist": "Armaan Malik", "youtubeId": "L_11_TqiTFw", "cover": "https://i.ytimg.com/vi/L_11_TqiTFw/hqdefault.jpg"},
      {"title": "Chale Aana (From \"De De Pyaar De\")", "artist": "Armaan Malik", "youtubeId": "gPlr04DEad4", "cover": "https://i.ytimg.com/vi/gPlr04DEad4/hqdefault.jpg"},
      {"title": "Pehla Pyaar", "artist": "Armaan Malik", "youtubeId": "iY4x5QZcGZA", "cover": "https://i.ytimg.com/vi/iY4x5QZcGZA/hqdefault.jpg"},
      {"title": "Chhore Haryana Ke", "artist": "Armaan Malik", "youtubeId": "HSS6R47U4Uw", "cover": "https://i.ytimg.com/vi/HSS6R47U4Uw/hqdefault.jpg"},
      {"title": "MUJHKO BARSAAT BANA LO", "artist": "Armaan Malik", "youtubeId": "XI3JGDHduR4", "cover": "https://i.ytimg.com/vi/XI3JGDHduR4/hqdefault.jpg"},
      {"title": "Memu Aagamu", "artist": "Armaan Malik", "youtubeId": "1-4NgZK2_ug", "cover": "https://i.ytimg.com/vi/1-4NgZK2_ug/hqdefault.jpg"},
      {"title": "Gandasa", "artist": "Armaan Malik", "youtubeId": "xF-95thLNn4", "cover": "https://i.ytimg.com/vi/xF-95thLNn4/hqdefault.jpg"},
      {"title": "Always", "artist": "Armaan Malik", "youtubeId": "Q1oZNSAYe1g", "cover": "https://i.ytimg.com/vi/Q1oZNSAYe1g/hqdefault.jpg"},
      {"title": "WAJAH TUM HO", "artist": "Armaan Malik", "youtubeId": "UF9kvy51_F0", "cover": "https://i.ytimg.com/vi/UF9kvy51_F0/hqdefault.jpg"},
      {"title": "Jab Se Mera Dil (From \"Amavas\")", "artist": "Armaan Malik", "youtubeId": "tTctCnTLHNw", "cover": "https://i.ytimg.com/vi/tTctCnTLHNw/hqdefault.jpg"},
      {"title": "Mujhe Jana Nahi School (feat. Chirayu Malik)", "artist": "Armaan Malik", "youtubeId": "jZUyuyO06oQ", "cover": "https://i.ytimg.com/vi/jZUyuyO06oQ/hqdefault.jpg"},
      {"title": "Tujh Pe Dil Haar Ke (From \"Sultan Of Delhi\")", "artist": "Armaan Malik", "youtubeId": "EyIeGZan-jA", "cover": "https://i.ytimg.com/vi/EyIeGZan-jA/hqdefault.jpg"},
      {"title": "Humein Tumse Pyaar", "artist": "Armaan Malik", "youtubeId": "yQ1uabb0MVA", "cover": "https://i.ytimg.com/vi/yQ1uabb0MVA/hqdefault.jpg"},
      {"title": "Barf Si", "artist": "Armaan Malik", "youtubeId": "egYMob62FxI", "cover": "https://i.ytimg.com/vi/egYMob62FxI/hqdefault.jpg"},
      {"title": "Le Ja Zakhm Tere", "artist": "Armaan Malik", "youtubeId": "V9oYabYdRNY", "cover": "https://i.ytimg.com/vi/V9oYabYdRNY/hqdefault.jpg"},
      {"title": "Kasam Se", "artist": "Armaan Malik", "youtubeId": "DmiY3aT2q3c", "cover": "https://i.ytimg.com/vi/DmiY3aT2q3c/hqdefault.jpg"},
      {"title": "DIL KE PAAS (UNPLUGGED)", "artist": "Armaan Malik", "youtubeId": "5OrNpj3G6uQ", "cover": "https://i.ytimg.com/vi/5OrNpj3G6uQ/hqdefault.jpg"},
      {"title": "Shukar Manavaan", "artist": "Armaan Malik", "youtubeId": "R1SPDyKGHVc", "cover": "https://i.ytimg.com/vi/R1SPDyKGHVc/hqdefault.jpg"},
      {"title": "Tu / You", "artist": "Armaan Malik", "youtubeId": "XgDKLbIgjrw", "cover": "https://i.ytimg.com/vi/XgDKLbIgjrw/hqdefault.jpg"},
      {"title": "Aaja Na Ferrari Mein", "artist": "Armaan Malik", "youtubeId": "ZUsRv6qluu0", "cover": "https://i.ytimg.com/vi/ZUsRv6qluu0/hqdefault.jpg"}
    ]
  },
  {
    name: "Rahat Fateh Ali Khan",
    tracks: [
      {"title": "Zaroori Tha", "artist": "Rahat Fateh Ali Khan", "youtubeId": "t4J4-K-90Ok", "cover": "https://i.ytimg.com/vi/t4J4-K-90Ok/hqdefault.jpg"},
      {"title": "Dillagi", "artist": "Rahat Fateh Ali Khan", "youtubeId": "Gplxsk25GtY", "cover": "https://i.ytimg.com/vi/Gplxsk25GtY/hqdefault.jpg"},
      {"title": "Mann Ki Lagan", "artist": "Rahat Fateh Ali Khan", "youtubeId": "fw31zV1Pxbk", "cover": "https://i.ytimg.com/vi/fw31zV1Pxbk/hqdefault.jpg"},
      {"title": "Nit Khair Manga (From \"Raid\")", "artist": "Rahat Fateh Ali Khan", "youtubeId": "-IO4wID2B3A", "cover": "https://i.ytimg.com/vi/-IO4wID2B3A/hqdefault.jpg"},
      {"title": "Mera Yaar Miladay (From \"Biryani\")", "artist": "Rahat Fateh Ali Khan", "youtubeId": "Y1A3WLfmGP4", "cover": "https://i.ytimg.com/vi/Y1A3WLfmGP4/hqdefault.jpg"},
      {"title": "Koi Umeed Bar Nahin Aati", "artist": "Rahat Fateh Ali Khan", "youtubeId": "dZI36mXoRKQ", "cover": "https://i.ytimg.com/vi/dZI36mXoRKQ/hqdefault.jpg"},
      {"title": "Halka Halka", "artist": "Rahat Fateh Ali Khan", "youtubeId": "5j5SQ8Oj4Kk", "cover": "https://i.ytimg.com/vi/5j5SQ8Oj4Kk/hqdefault.jpg"},
      {"title": "Dagabaaz Re", "artist": "Rahat Fateh Ali Khan", "youtubeId": "9CmAUpXtVFc", "cover": "https://i.ytimg.com/vi/9CmAUpXtVFc/hqdefault.jpg"},
      {"title": "Sanson Ki Mala", "artist": "Rahat Fateh Ali Khan", "youtubeId": "0TAq_wg4gXU", "cover": "https://i.ytimg.com/vi/0TAq_wg4gXU/hqdefault.jpg"},
      {"title": "Zaroori tha (Studio Version)", "artist": "Rahat Fateh Ali Khan", "youtubeId": "5_imBadXNYI", "cover": "https://i.ytimg.com/vi/5_imBadXNYI/hqdefault.jpg"},
      {"title": "Gunjaaish", "artist": "Rahat Fateh Ali Khan", "youtubeId": "_65cdzrNkCs", "cover": "https://i.ytimg.com/vi/_65cdzrNkCs/hqdefault.jpg"},
      {"title": "Aankh Se Aankh Milao", "artist": "Rahat Fateh Ali Khan", "youtubeId": "woSlzvVPUaA", "cover": "https://i.ytimg.com/vi/woSlzvVPUaA/hqdefault.jpg"},
      {"title": "Afreen Afreen", "artist": "Rahat Fateh Ali Khan", "youtubeId": "SMlGGRAB3Hc", "cover": "https://i.ytimg.com/vi/SMlGGRAB3Hc/hqdefault.jpg"},
      {"title": "Gumsum Gumsum", "artist": "Rahat Fateh Ali Khan", "youtubeId": "NpW3bJhgYbE", "cover": "https://i.ytimg.com/vi/NpW3bJhgYbE/hqdefault.jpg"},
      {"title": "Rangrez", "artist": "Rahat Fateh Ali Khan", "youtubeId": "vHa8aD-7dEM", "cover": "https://i.ytimg.com/vi/vHa8aD-7dEM/hqdefault.jpg"},
      {"title": "Teri Meri", "artist": "Rahat Fateh Ali Khan", "youtubeId": "ERiB-3wZaNw", "cover": "https://i.ytimg.com/vi/ERiB-3wZaNw/hqdefault.jpg"},
      {"title": "Tere Bina (From \"Lover\")", "artist": "Rahat Fateh Ali Khan", "youtubeId": "GLjl6xWshtQ", "cover": "https://i.ytimg.com/vi/GLjl6xWshtQ/hqdefault.jpg"},
      {"title": "TODA DIL", "artist": "Rahat Fateh Ali Khan", "youtubeId": "wX_njZPw130", "cover": "https://i.ytimg.com/vi/wX_njZPw130/hqdefault.jpg"},
      {"title": "Ishq-e-Jaan", "artist": "Rahat Fateh Ali Khan", "youtubeId": "3esw4HGEIFs", "cover": "https://i.ytimg.com/vi/3esw4HGEIFs/hqdefault.jpg"},
      {"title": "Amad-e-Mustafa (Complete Original Version)", "artist": "Rahat Fateh Ali Khan", "youtubeId": "WLCrmXuydO4", "cover": "https://i.ytimg.com/vi/WLCrmXuydO4/hqdefault.jpg"},
      {"title": "O Re Piya", "artist": "Rahat Fateh Ali Khan", "youtubeId": "yyYpmJx8zuU", "cover": "https://i.ytimg.com/vi/yyYpmJx8zuU/hqdefault.jpg"},
      {"title": "Rishte Naate", "artist": "Rahat Fateh Ali Khan", "youtubeId": "c504EGCwQlU", "cover": "https://i.ytimg.com/vi/c504EGCwQlU/hqdefault.jpg"},
      {"title": "Ik Khawab Sunawan", "artist": "Rahat Fateh Ali Khan", "youtubeId": "BSI1HPMoTHc", "cover": "https://i.ytimg.com/vi/BSI1HPMoTHc/hqdefault.jpg"},
      {"title": "Mere Dil Ki Duniya Mein", "artist": "Rahat Fateh Ali Khan", "youtubeId": "JARnfFqk_ns", "cover": "https://i.ytimg.com/vi/JARnfFqk_ns/hqdefault.jpg"},
      {"title": "Sajdaa (From \"My Name Is Khan\")", "artist": "Rahat Fateh Ali Khan", "youtubeId": "AQ5qWopu_uU", "cover": "https://i.ytimg.com/vi/AQ5qWopu_uU/hqdefault.jpg"}
    ]
  },
  {
    name: "Sonu Nigam",
    tracks: [
      {"title": "Ab Mujhe Raat Din", "artist": "Sonu Nigam", "youtubeId": "4R9Sy4PEOH8", "cover": "https://i.ytimg.com/vi/4R9Sy4PEOH8/hqdefault.jpg"},
      {"title": "SALAAM-E-ISHQ", "artist": "Sonu Nigam", "youtubeId": "MoJVzTzixzs", "cover": "https://i.ytimg.com/vi/MoJVzTzixzs/hqdefault.jpg"},
      {"title": "KHWAISH", "artist": "Sonu Nigam", "youtubeId": "fNyXUBDagt8", "cover": "https://i.ytimg.com/vi/fNyXUBDagt8/hqdefault.jpg"},
      {"title": "Don't Say Alvida", "artist": "Sonu Nigam", "youtubeId": "HeuVISez-iM", "cover": "https://i.ytimg.com/vi/HeuVISez-iM/hqdefault.jpg"},
      {"title": "Apnaa Mujhe Tu Lagaa", "artist": "Sonu Nigam", "youtubeId": "I30JRrk1KPE", "cover": "https://i.ytimg.com/vi/I30JRrk1KPE/hqdefault.jpg"},
      {"title": "Pisu Pisu Mathu ( From\" 5D\" )", "artist": "Sonu Nigam", "youtubeId": "IoZZJHz-Kg0", "cover": "https://i.ytimg.com/vi/IoZZJHz-Kg0/hqdefault.jpg"},
      {"title": "Falak Dekhun", "artist": "Sonu Nigam", "youtubeId": "TxidHVpm3ws", "cover": "https://i.ytimg.com/vi/TxidHVpm3ws/hqdefault.jpg"},
      {"title": "Abhi Mujh Mein Kahin (From \"Agneepath\")", "artist": "Sonu Nigam", "youtubeId": "FFtyFrei6ts", "cover": "https://i.ytimg.com/vi/FFtyFrei6ts/hqdefault.jpg"},
      {"title": "MUJHE RAAT DIN BAS", "artist": "Sonu Nigam", "youtubeId": "KraIQ85y68s", "cover": "https://i.ytimg.com/vi/KraIQ85y68s/hqdefault.jpg"},
      {"title": "Door Waadiyon Se", "artist": "Sonu Nigam", "youtubeId": "YEVFdVrtlmo", "cover": "https://i.ytimg.com/vi/YEVFdVrtlmo/hqdefault.jpg"},
      {"title": "Main Agar Kahoon", "artist": "Sonu Nigam", "youtubeId": "8PEqEh1lnNE", "cover": "https://i.ytimg.com/vi/8PEqEh1lnNE/hqdefault.jpg"},
      {"title": "Nee Sanihake Bandare", "artist": "Sonu Nigam", "youtubeId": "riUO-l-aBAQ", "cover": "https://i.ytimg.com/vi/riUO-l-aBAQ/hqdefault.jpg"},
      {"title": "Saathiya", "artist": "Sonu Nigam", "youtubeId": "p4664nVBMxg", "cover": "https://i.ytimg.com/vi/p4664nVBMxg/hqdefault.jpg"},
      {"title": "TERE DIL KA RISHTA", "artist": "Sonu Nigam", "youtubeId": "p4jFW5eRYLA", "cover": "https://i.ytimg.com/vi/p4jFW5eRYLA/hqdefault.jpg"},
      {"title": "Shirt Da Button (Sonu Nigam, Meet Bros)", "artist": "Sonu Nigam", "youtubeId": "k2bNbbvruak", "cover": "https://i.ytimg.com/vi/k2bNbbvruak/hqdefault.jpg"},
      {"title": "Yeh Dil Deewana", "artist": "Sonu Nigam", "youtubeId": "d7MDzmchS50", "cover": "https://i.ytimg.com/vi/d7MDzmchS50/hqdefault.jpg"},
      {"title": "Piyu Bole", "artist": "Sonu Nigam", "youtubeId": "rvnyVvSRAxs", "cover": "https://i.ytimg.com/vi/rvnyVvSRAxs/hqdefault.jpg"},
      {"title": "SAU DARD", "artist": "Sonu Nigam", "youtubeId": "MbhRoTVxhZc", "cover": "https://i.ytimg.com/vi/MbhRoTVxhZc/hqdefault.jpg"},
      {"title": "Umar Qaid Hogi Kya Hai Faisla Adalat Ka", "artist": "Sonu Nigam", "youtubeId": "NuwX5M81fHw", "cover": "https://i.ytimg.com/vi/NuwX5M81fHw/hqdefault.jpg"},
      {"title": "Jhipi Jhipi Barasare", "artist": "Sonu Nigam", "youtubeId": "dYr2M_L4s_8", "cover": "https://i.ytimg.com/vi/dYr2M_L4s_8/hqdefault.jpg"},
      {"title": "Dil Pe Chalai Churiya (Toone Dil Ke Rakibon Sang)", "artist": "Sonu Nigam", "youtubeId": "gNmW7AU4Z8U", "cover": "https://i.ytimg.com/vi/gNmW7AU4Z8U/hqdefault.jpg"},
      {"title": "AGAR DIL KAHE", "artist": "Sonu Nigam", "youtubeId": "moLwu_G6NvE", "cover": "https://i.ytimg.com/vi/moLwu_G6NvE/hqdefault.jpg"},
      {"title": "CHHOTI CHHOTI RAATEIN", "artist": "Sonu Nigam", "youtubeId": "EDB5ybkPiFc", "cover": "https://i.ytimg.com/vi/EDB5ybkPiFc/hqdefault.jpg"},
      {"title": "Soniyo", "artist": "Sonu Nigam", "youtubeId": "Xz0fMH6ClKY", "cover": "https://i.ytimg.com/vi/Xz0fMH6ClKY/hqdefault.jpg"},
      {"title": "Sapna Jahan (From \"Brothers\")", "artist": "Sonu Nigam", "youtubeId": "Hqajq5jKX10", "cover": "https://i.ytimg.com/vi/Hqajq5jKX10/hqdefault.jpg"}
    ]
  },
  {
    name: "Javed Ali",
    tracks: [
      {"title": "GUZARISH", "artist": "Javed Ali", "youtubeId": "cK9h5PVzRpk", "cover": "https://i.ytimg.com/vi/cK9h5PVzRpk/hqdefault.jpg"},
      {"title": "Tu Jo Mila (Dekhna Na Mud Ke)", "artist": "Javed Ali", "youtubeId": "j0QTOpUIRBA", "cover": "https://i.ytimg.com/vi/j0QTOpUIRBA/hqdefault.jpg"},
      {"title": "ARZIYAN", "artist": "Javed Ali", "youtubeId": "Thda5BDSRHc", "cover": "https://i.ytimg.com/vi/Thda5BDSRHc/hqdefault.jpg"},
      {"title": "Tum Tak (From \"Raanjhanaa\")", "artist": "Javed Ali", "youtubeId": "Wq1zDZ81YhU", "cover": "https://i.ytimg.com/vi/Wq1zDZ81YhU/hqdefault.jpg"},
      {"title": "Ek Din Teri Raahon", "artist": "Javed Ali", "youtubeId": "55UJumsI1m0", "cover": "https://i.ytimg.com/vi/55UJumsI1m0/hqdefault.jpg"},
      {"title": "Deewana Kar Raha Hai", "artist": "Javed Ali", "youtubeId": "AvMgfjv14B0", "cover": "https://i.ytimg.com/vi/AvMgfjv14B0/hqdefault.jpg"},
      {"title": "Tu Hi Haqeeqat", "artist": "Javed Ali", "youtubeId": "2CAiycLVy7s", "cover": "https://i.ytimg.com/vi/2CAiycLVy7s/hqdefault.jpg"},
      {"title": "Ishaqzaade", "artist": "Javed Ali", "youtubeId": "DOMj__8afqg", "cover": "https://i.ytimg.com/vi/DOMj__8afqg/hqdefault.jpg"},
      {"title": "Aa Jao Meri Tamanna", "artist": "Javed Ali", "youtubeId": "SGFXdO-AjU0", "cover": "https://i.ytimg.com/vi/SGFXdO-AjU0/hqdefault.jpg"},
      {"title": "Gale Lag Ja (Version 1)", "artist": "Javed Ali", "youtubeId": "nIz7omo603U", "cover": "https://i.ytimg.com/vi/nIz7omo603U/hqdefault.jpg"},
      {"title": "Kun Faya Kun", "artist": "Javed Ali", "youtubeId": "_fmA1RoHbzA", "cover": "https://i.ytimg.com/vi/_fmA1RoHbzA/hqdefault.jpg"},
      {"title": "Kilimanjaro", "artist": "Javed Ali", "youtubeId": "OmRb3c7YT38", "cover": "https://i.ytimg.com/vi/OmRb3c7YT38/hqdefault.jpg"},
      {"title": "Saudebazi (Encore)", "artist": "Javed Ali", "youtubeId": "W4sHmzMCo8s", "cover": "https://i.ytimg.com/vi/W4sHmzMCo8s/hqdefault.jpg"},
      {"title": "Srivalli", "artist": "Javed Ali", "youtubeId": "iks48tNYy6o", "cover": "https://i.ytimg.com/vi/iks48tNYy6o/hqdefault.jpg"},
      {"title": "Yedho Seigirai", "artist": "Javed Ali", "youtubeId": "qGIANLns7W8", "cover": "https://i.ytimg.com/vi/qGIANLns7W8/hqdefault.jpg"},
      {"title": "Dewana He Li Mu", "artist": "Javed Ali", "youtubeId": "v-9Y1MR6lwo", "cover": "https://i.ytimg.com/vi/v-9Y1MR6lwo/hqdefault.jpg"},
      {"title": "Aisi Laagi Lagan Meera Ho Gayi Magan", "artist": "Javed Ali", "youtubeId": "Ei98GMz75II", "cover": "https://i.ytimg.com/vi/Ei98GMz75II/hqdefault.jpg"},
      {"title": "Tum Mile (Love Reprise)", "artist": "Javed Ali", "youtubeId": "XR_8ugaUcyQ", "cover": "https://i.ytimg.com/vi/XR_8ugaUcyQ/hqdefault.jpg"},
      {"title": "Zindagi", "artist": "Javed Ali", "youtubeId": "JYjQ-Gzp8lk", "cover": "https://i.ytimg.com/vi/JYjQ-Gzp8lk/hqdefault.jpg"},
      {"title": "Maula", "artist": "Javed Ali", "youtubeId": "HfdqWZMXUfw", "cover": "https://i.ytimg.com/vi/HfdqWZMXUfw/hqdefault.jpg"},
      {"title": "Jashn-E-Bahaaraa", "artist": "Javed Ali", "youtubeId": "cr4Tz4JEP40", "cover": "https://i.ytimg.com/vi/cr4Tz4JEP40/hqdefault.jpg"},
      {"title": "Sanam (feat. Tarun Namdev & Mahima Gupta)", "artist": "Javed Ali", "youtubeId": "gmPhHBH4J1A", "cover": "https://i.ytimg.com/vi/gmPhHBH4J1A/hqdefault.jpg"},
      {"title": "Tu Mera Hogaya Hai (Encore)", "artist": "Javed Ali", "youtubeId": "UgMOoY-y8B0", "cover": "https://i.ytimg.com/vi/UgMOoY-y8B0/hqdefault.jpg"},
      {"title": "Tinku Jiya", "artist": "Javed Ali", "youtubeId": "ye9GqoslCKs", "cover": "https://i.ytimg.com/vi/ye9GqoslCKs/hqdefault.jpg"},
      {"title": "Kilimanjaro Bhala", "artist": "Javed Ali", "youtubeId": "Q16njV-S0X0", "cover": "https://i.ytimg.com/vi/Q16njV-S0X0/hqdefault.jpg"}
    ]
  }
];


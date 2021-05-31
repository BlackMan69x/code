require("http").createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
  }).listen(process.env.PORT, "0.0.0.0");

const moment = require("moment");
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const ms = require("ms");
const prefix = "r/";
client.login('ODMwODM4MjgyMjU3Njk0NzUx.YHMgcg.uEZ4Lld9t172Gt7IsRFaz3Upbp0');// BOT TOKEN
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
    client.user.setActivity(' #help-me | Me Codes', { type: 'PLAYING' })
});


	client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-me") {
	 if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678> | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)

 message.channel.send(`** 
 
<:694579669265285180:772896171127603271> | ~~#~~ 1 - \`${prefix}help-discord.js\` <a:525837021558865961:772896580579491841> \` discord.js \`
 
<:694579669265285180:772896171127603271> | ~~#~~ 2 - \`${prefix}help-discord.py\` <a:525837021558865961:772896580579491841> \` discord.py \` 

<:694579669265285180:772896171127603271> | ~~#~~ 3 - \`${prefix}help-youtube\` <a:525837021558865961:772896580579491841> \` Codes YouTube Me Codes Tv \` 
**`);
 
 
    }
}) 





	client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js") {
	 if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)

 message.channel.send(`** 
                             <:JavaScript:709433874345885697>  __\`Javascript list\`__  <:JavaScript:709433874345885697> 
 
 
 <:694579669265285180:772896171127603271> | ~~#~~ 1 - \`${prefix}help-discord.js-v11\` <a:525837021558865961:772896580579491841> \` discord.js V11 \`
 
 <:694579669265285180:772896171127603271> | ~~#~~ 2 - \`${prefix}help-discord.js-v12\` <a:525837021558865961:772896580579491841> \` discord.js V12 \` 
**`);
 
 
    }
}) 
 
 
 client.on('message', message => {
      if(!message.content.startsWith(prefix) || message.author.bot) return;
      const args = message.content.slice(prefix.length).trim().split(/ +/);
      const cmd = args.shift().toLowerCase();
  if (cmd === `help-discord.js-v11`) { 
               if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)

        let codes = [`
**
                                                               \`Discord.Js Codes V11\`

<:694579669265285180:772896171127603271> | ~~#~~ 1 - \`${prefix}help-discord.js-v11-1\` <a:525837021558865961:772896580579491841> \` كود خط بصور ( الشوب ) \`
 
<:694579669265285180:772896171127603271> | ~~#~~ 2 - \`${prefix}help-discord.js-v11-2\` <a:525837021558865961:772896580579491841> \` كود رد تلقائي بردود عشوئية \` 
 
<:694579669265285180:772896171127603271> | ~~#~~ 3 - \`${prefix}help-discord.js-v11-3\` <a:525837021558865961:772896580579491841> \` كود الشكوة \` 
 
<:694579669265285180:772896171127603271> | ~~#~~ 4 - \`${prefix}help-discord.js-v11-4\` <a:525837021558865961:772896580579491841> \` كود قيف اوى \`

<:694579669265285180:772896171127603271> | ~~#~~ 5 - \`${prefix}help-discord.js-v11-5\` <a:525837021558865961:772896580579491841> \` كود طلب ( الشوب ) \` 

<:694579669265285180:772896171127603271> | ~~#~~ 6 - \`${prefix}help-discord.js-v11-6\` <a:525837021558865961:772896580579491841> \` كود ساي بدون امبد وبامبد \` 
 
<:694579669265285180:772896171127603271> | ~~#~~ 7 - \`${prefix}help-discord.js-v11-7\` <a:525837021558865961:772896580579491841> \` كود افاتار \`  
 
<:694579669265285180:772896171127603271> | ~~#~~ 8 - \`${prefix}help-discord.js-v11-8\` <a:525837021558865961:772896580579491841> \` كود يسحب عدد الرسائل \`  
 
<:694579669265285180:772896171127603271> | ~~#~~ 9 - \`${prefix}help-discord.js-v11-9\` <a:525837021558865961:772896580579491841> \` كود يعرض الك جمع بوتات لى سيرفر \`  
 
<:694579669265285180:772896171127603271> | ~~#~~ 10 - \`${prefix}help-discord.js-v11-10\` <a:525837021558865961:772896580579491841> \` كود نرد \`  
**
        `,`
**
                                                               \`Discord.Js Codes V11\`

<:694579669265285180:772896171127603271> | ~~#~~ 11 - \`${prefix}help-discord.js-v11-11\` <a:525837021558865961:772896580579491841> \` كود تغير الاسم والصورة والحاله  \`  

<:694579669265285180:772896171127603271> | ~~#~~ 12 - \`${prefix}help-discord.js-v11-12\` <a:525837021558865961:772896580579491841> \` كود معلومات سيرفر \`  

<:694579669265285180:772896171127603271> | ~~#~~ 13 - \`${prefix}help-discord.js-v11-13\` <a:525837021558865961:772896580579491841> \` كود باند مطور \`  

<:694579669265285180:772896171127603271> | ~~#~~ 14 - \`${prefix}help-discord.js-v11-14\` <a:525837021558865961:772896580579491841> \` عداد لاعضاء فى روم \`  

<:694579669265285180:772896171127603271> | ~~#~~ 15 - \`${prefix}help-discord.js-v11-15\` <a:525837021558865961:772896580579491841> \` كود يبعت رسائل عبر ويب هوك \`  

<:694579669265285180:772896171127603271> | ~~#~~ 16 - \`${prefix}help-discord.js-v11-16\` <a:525837021558865961:772896580579491841> \` كود ترحيب خاص برقم عضو \`  

<:694579669265285180:772896171127603271> | ~~#~~ 17 - \`${prefix}help-discord.js-v11-17\` <a:525837021558865961:772896580579491841> \` كود ميوزك \`  
		
<:694579669265285180:772896171127603271> | ~~#~~ 18 - \`${prefix}help-discord.js-v11-18\` <a:525837021558865961:772896580579491841> \` رسترت البوت \`  
		
<:694579669265285180:772896171127603271> | ~~#~~ 19 - \`${prefix}help-discord.js-v11-19\` <a:525837021558865961:772896580579491841> \` كود توب انفايت \`  
		
<:694579669265285180:772896171127603271> | ~~#~~ 20 - \`${prefix}help-discord.js-v11-20\` <a:525837021558865961:772896580579491841> \` كود الكيك \`  
**
	`,`
**
                                                               \`Discord.Js Codes V11\`

<:694579669265285180:772896171127603271> | ~~#~~ 21 - \`${prefix}help-discord.js-v11-21\` <a:525837021558865961:772896580579491841> \` كود مسح الشات \`  

<:694579669265285180:772896171127603271> | ~~#~~ 22 - \`${prefix}help-discord.js-v11-22\` <a:525837021558865961:772896580579491841> \` كود فتح وتقفيل الشات \`  

<:694579669265285180:772896171127603271> | ~~#~~ 23 - \`${prefix}help-discord.js-v11-23\` <a:525837021558865961:772896580579491841> \` كود الوران \`  

<:694579669265285180:772896171127603271> | ~~#~~ 24 - \`${prefix}help-discord.js-v11-24\` <a:525837021558865961:772896580579491841> \` منع السب \`  

<:694579669265285180:772896171127603271> | ~~#~~ 25 - \`${prefix}help-discord.js-v11-25\` <a:525837021558865961:772896580579491841> \` كود لم تنمشن لى البوت يرد عليك بى help \`  

<:694579669265285180:772896171127603271> | ~~#~~ 26 - \`${prefix}help-discord.js-v11-26\` <a:525837021558865961:772896580579491841> \` كود عمل روم فويس اونلاين \`  

<:694579669265285180:772896171127603271> | ~~#~~ 27 - \`${prefix}help-discord.js-v11-27\` <a:525837021558865961:772896580579491841> \` كود ترحيب بصور \`  

<:694579669265285180:772896171127603271> | ~~#~~ 28 - \`${prefix}help-discord.js-v11-28\` <a:525837021558865961:772896580579491841> \` كود هلب مع امبد يرسل بالخاص \`  

<:694579669265285180:772896171127603271> | ~~#~~ 29 - \`${prefix}help-discord.js-v11-29\` <a:525837021558865961:772896580579491841> \` كود لعبة صراحة \`  

<:694579669265285180:772896171127603271> | ~~#~~ 30 - \`${prefix}help-discord.js-v11-30\` <a:525837021558865961:772896580579491841> \` كود لعبة كت تويت \`  
**
		`,`
**
                                                               \`Discord.Js Codes V11\`

<:694579669265285180:772896171127603271> | ~~#~~ 31 - \`${prefix}help-discord.js-v11-31\` <a:525837021558865961:772896580579491841> \` كود الاذكار \`  

<:694579669265285180:772896171127603271> | ~~#~~ 32 - \`${prefix}help-discord.js-v11-32\` <a:525837021558865961:772896580579491841> \` قران الكريم (25 سورة ) ـ \`  

<:694579669265285180:772896171127603271> | ~~#~~ 33 - \`${prefix}help-discord.js-v11-33\` <a:525837021558865961:772896580579491841> \` كود ست برفكس \`  

<:694579669265285180:772896171127603271> | ~~#~~ 34 - \`${prefix}help-discord.js-v11-34\` <a:525837021558865961:772896580579491841> \` كود اذا احد كلمة البوت يرسل لك في الخاص \`  

<:694579669265285180:772896171127603271> | ~~#~~ 35 - \`${prefix}help-discord.js-v11-35\` <a:525837021558865961:772896580579491841> \` برودكاست برسال  \`  

<:694579669265285180:772896171127603271> | ~~#~~ 36 - \`${prefix}help-discord.js-v11-36\` <a:525837021558865961:772896580579491841> \` كود معلومات بوت \`  
		
<:694579669265285180:772896171127603271> | ~~#~~ 37 - \`${prefix}help-discord.js-v11-37\` <a:525837021558865961:772896580579491841> \` كود تم دعوته بواسطة \`  

<:694579669265285180:772896171127603271> | ~~#~~ 38 - \`${prefix}help-discord.js-v11-38\` <a:525837021558865961:772896580579491841> \` كود مغادرة العضو \`  

<:694579669265285180:772896171127603271> | ~~#~~ 39 - \`${prefix}help-discord.js-v11-39\` <a:525837021558865961:772896580579491841> \` كود الوان مثل برو بوت \`  

<:694579669265285180:772896171127603271> | ~~#~~ 40 - \`${prefix}help-discord.js-v11-40\` <a:525837021558865961:772896580579491841> \` id كود \`  
**`]
        let num = 1;
     
     
       return message.channel.send(codes[num-1]).then(msg => {
     
            msg.react('◀').then(r => {
                msg.react('▶')

     
            const backPageFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
            const goPageFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
     
     
            const backPage = msg.createReactionCollector(backPageFilter, { time: 2000000});
            const goPage = msg.createReactionCollector(goPageFilter, { time: 2000000});
     
     
     
            backPage.on('collect', r => {
                if (num === 1) return;
                num--;
                msg.edit(codes[num-1])
            })
            goPage.on('collect', r => {
                if (num === codes.length) return;
     
                num++;
          msg.edit(codes[num-1])
        })
            })
        })
        }
    }); 
 




  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-1") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/3DjRDvMm **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-2") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/TijMqJFZ **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-3") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/0Gf9m62u **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-4") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/eLWtGvbu **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-5") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/bEPWKFKg **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-6") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/ZqfBALCL **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-7") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/QLWMtzNn **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-8") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/ArmbkJ6w **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-9") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/49kEfU7K **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-10") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/P5a7cA8x **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-11") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/Yr1f6xaR **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-12") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/im9zNUc6 **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-13") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/wZKBUwYq **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-14") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/KGgBLimz **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-15") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/N8ypNC04 **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-16") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/bryF13w0 **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-17") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/Wg85WihP **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-18") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/9dhPWjq5 **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-19") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/0HGgMdWc **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-20") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/0cNVLm1a **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-21") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/FLTCitR2 **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-22") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/gb4me9bS **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-23") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/nX7w8Dat **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-24") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/msfxU6th **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-25") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/ekhNsxq1 **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-26") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/KDCEgGnH **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-27") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://github.com/me-codes-tv/Welcome-Me-Codes-Tv **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-28") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/ZC0FHb0c **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-29") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/sgtxADHu **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-30") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/Fak2SQsm **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});
 
   client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-31") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/51MCK4TD **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-32") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/7LeLCVdX **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-33") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/wMGsXWb4 **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-34") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/wTw5JbNG **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-35") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`**  https://pastebin.com/n2SyjdwH **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-36") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/vGD7Bq7q **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-37") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/ihCR8nhW **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-38") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/8Da43txR **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-39") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/v0mY1UVm **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v11-40") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/vWi7L4mf **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});











 client.on('message', message => {
      if(!message.content.startsWith(prefix) || message.author.bot) return;
      const args = message.content.slice(prefix.length).trim().split(/ +/);
      const cmd = args.shift().toLowerCase();
  if (cmd === `help-discord.js-v12`) { 
               if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:697941286069004378> | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)

        let codes = [`
**
                                                               \`Discord.Js Codes V12\`

<:694579669265285180:772896171127603271> | ~~#~~ 1 - \`${prefix}help-discord.js-v12-1\` <a:525837021558865961:772896580579491841> \` كود مسح شات \`
 
<:694579669265285180:772896171127603271> | ~~#~~ 2 - \`${prefix}help-discord.js-v12-2\` <a:525837021558865961:772896580579491841> \` كود طلب ( الشوب ) \` 
 
<:694579669265285180:772896171127603271> | ~~#~~ 3 - \`${prefix}help-discord.js-v12-3\` <a:525837021558865961:772896580579491841> \` كود بنج زي البرو بوت \` 
 
<:694579669265285180:772896171127603271> | ~~#~~ 4 - \`${prefix}help-discord.js-v12-4\` <a:525837021558865961:772896580579491841> \` كود يقالك بوت دخل و خارج \`

<:694579669265285180:772896171127603271> | ~~#~~ 5 - \`${prefix}help-discord.js-v12-5\` <a:525837021558865961:772896580579491841> \` بوت يطلع من سيرفر عن طريق اى دى \` 

<:694579669265285180:772896171127603271> | ~~#~~ 6 - \`${prefix}help-discord.js-v12-6\` <a:525837021558865961:772896580579491841> \` كود عدد لاعضاء فى روم \` 
 
<:694579669265285180:772896171127603271> | ~~#~~ 7 - \`${prefix}help-discord.js-v12-7\` <a:525837021558865961:772896580579491841> \` Webhook say \`  
 
<:694579669265285180:772896171127603271> | ~~#~~ 8 - \`${prefix}help-discord.js-v12-8\` <a:525837021558865961:772896580579491841> \` كود ست برفكس \`  
 
<:694579669265285180:772896171127603271> | ~~#~~ 9 - \`${prefix}help-discord.js-v12-9\` <a:525837021558865961:772896580579491841> \` كود الخط \`  
 
<:694579669265285180:772896171127603271> | ~~#~~ 10 - \`${prefix}help-discord.js-v12-10\` <a:525837021558865961:772896580579491841> \` role command \`  
**
        `,`
**
                                                               \`Discord.Js Codes V12\`
															   
<:694579669265285180:772896171127603271> | ~~#~~ 12 - \`${prefix}help-discord.js-v12-12\` <a:525837021558865961:772896580579491841> \` ساي باايمبد \`  

<:694579669265285180:772896171127603271> | ~~#~~ 12 - \`${prefix}help-discord.js-v12-12\` <a:525837021558865961:772896580579491841> \` يجيبلك معلومات عن البوت \`  

<:694579669265285180:772896171127603271> | ~~#~~ 13 - \`${prefix}help-discord.js-v12-13\` <a:525837021558865961:772896580579491841> \` كود اقتراحات مطور مع رياكشن \`  

<:694579669265285180:772896171127603271> | ~~#~~ 14 - \`${prefix}help-discord.js-v12-14\` <a:525837021558865961:772896580579491841> \` كود يحط رياكشن تلقائى ع الرسائل \`  

<:694579669265285180:772896171127603271> | ~~#~~ 15 - \`${prefix}help-discord.js-v12-15\` <a:525837021558865961:772896580579491841> \` كود هيلب مع بتر صور \`  

<:694579669265285180:772896171127603271> | ~~#~~ 16 - \`${prefix}help-discord.js-v12-16\` <a:525837021558865961:772896580579491841> \` كود افاتار \`  

<:694579669265285180:772896171127603271> | ~~#~~ 17 - \`${prefix}help-discord.js-v12-17\` <a:525837021558865961:772896580579491841> \` كود خط تلقائى \`  
		
<:694579669265285180:772896171127603271> | ~~#~~ 18 - \`${prefix}help-discord.js-v12-18\` <a:525837021558865961:772896580579491841> \` كود افاتار بابعاد مختلفه \`  
		
<:694579669265285180:772896171127603271> | ~~#~~ 19 - \`${prefix}help-discord.js-v12-19\` <a:525837021558865961:772896580579491841> \` كود رد تلقائى \`  
		
<:694579669265285180:772896171127603271> | ~~#~~ 20 - \`${prefix}help-discord.js-v12-20\` <a:525837021558865961:772896580579491841> \` كود كريدت واديلى و تحويل \`  
**
	`,`
**
                                                               \`Discord.Js Codes V12\`
															   
<:694579669265285180:772896171127603271> | ~~#~~ 21 - \`${prefix}help-discord.js-v12-21\` <a:525837021558865961:772896580579491841> \` كود user \`  

<:694579669265285180:772896171127603271> | ~~#~~ 22 - \`${prefix}help-discord.js-v12-22\` <a:525837021558865961:772896580579491841> \`  كود يعملك روم فويس او text \`  

<:694579669265285180:772896171127603271> | ~~#~~ 23 - \`${prefix}help-discord.js-v12-23\` <a:525837021558865961:772896580579491841> \` كود بروفايل بكريدت \`  

<:694579669265285180:772896171127603271> | ~~#~~ 24 - \`${prefix}help-discord.js-v12-24\` <a:525837021558865961:772896580579491841> \`  كود server probot \`  

<:694579669265285180:772896171127603271> | ~~#~~ 25 - \`${prefix}help-discord.js-v12-25\` <a:525837021558865961:772896580579491841> \`  كود يحسب ضريبة بروبوت \`  

<:694579669265285180:772896171127603271> | ~~#~~ 26 - \`${prefix}help-discord.js-v12-26\` <a:525837021558865961:772896580579491841> \`  كود roles بروبوت \`  

<:694579669265285180:772896171127603271> | ~~#~~ 27 - \`${prefix}help-discord.js-v12-27\` <a:525837021558865961:772896580579491841> \` مانع دخول توكنات \`  

<:694579669265285180:772896171127603271> | ~~#~~ 28 - \`${prefix}help-discord.js-v12-28\` <a:525837021558865961:772896580579491841> \` كود تغير اللغه بوت \`  

<:694579669265285180:772896171127603271> | ~~#~~ 29 - \`${prefix}help-discord.js-v12-29\` <a:525837021558865961:772896580579491841> \` كود ترحيب بصور \`  

<:694579669265285180:772896171127603271> | ~~#~~ 30 - \`${prefix}help-discord.js-v12-30\` <a:525837021558865961:772896580579491841> \` Code Blacklist For \`  
**
		`,`
**
                                                               \`Discord.Js Codes V12\`
															   
<:694579669265285180:772896171127603271> | ~~#~~ 31 - \`${prefix}help-discord.js-v12-31\` <a:525837021558865961:772896580579491841> \` كود العبه فكك \`  

<:694579669265285180:772896171127603271> | ~~#~~ 32 - \`${prefix}help-discord.js-v12-32\` <a:525837021558865961:772896580579491841> \` كود بروفايل \`  

<:694579669265285180:772896171127603271> | ~~#~~ 33 - \`${prefix}help-discord.js-v12-33\` <a:525837021558865961:772896580579491841> \` كود قفل شات برو بوت \`  

<:694579669265285180:772896171127603271> | ~~#~~ 34 - \`${prefix}help-discord.js-v12-34\` <a:525837021558865961:772896580579491841> \` كود عطاء رتب برو بوت \`  

<:694579669265285180:772896171127603271> | ~~#~~ 35 - \`${prefix}help-discord.js-v12-35\` <a:525837021558865961:772896580579491841> \` كود ميوت \`  

<:694579669265285180:772896171127603271> | ~~#~~ 36 - \`${prefix}help-discord.js-v12-36\` <a:525837021558865961:772896580579491841> \` كود كيك \`  
		
<:694579669265285180:772896171127603271> | ~~#~~ 37 - \`${prefix}help-discord.js-v12-37\` <a:525837021558865961:772896580579491841> \` كود باند \`  

<:694579669265285180:772896171127603271> | ~~#~~ 38 - \`${prefix}help-discord.js-v12-38\` <a:525837021558865961:772896580579491841> \` كود يخلى بوت يخش روم \`  

<:694579669265285180:772896171127603271> | ~~#~~ 39 - \`${prefix}help-discord.js-v12-39\` <a:525837021558865961:772896580579491841> \` كود تكت خاص \`  

<:694579669265285180:772896171127603271> | ~~#~~ 40 - \`${prefix}help-discord.js-v12-40\` <a:525837021558865961:772896580579491841> \` كود توب تفاعل \`  
**`]
        let num = 1;
     
     
       return message.channel.send(codes[num-1]).then(msg => {
     
            msg.react('◀').then(r => {
                msg.react('▶')

     
            const backPageFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
            const goPageFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
     
     
            const backPage = msg.createReactionCollector(backPageFilter, { time: 2000000});
            const goPage = msg.createReactionCollector(goPageFilter, { time: 2000000});
     
     
     
            backPage.on('collect', r => {
                if (num === 1) return;
                num--;
                msg.edit(codes[num-1])
            })
            goPage.on('collect', r => {
                if (num === codes.length) return;
     
                num++;
          msg.edit(codes[num-1])
        })
            })
        })
        }
    }); 
	
	  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-1") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/Y9emvnMU **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-2") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/A1b6WJBQ **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-3") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/RPFscU31 **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-4") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/Thi0j8Yj **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-5") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/w9NEhNp6 **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-6") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/cN8uPaFM **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-7") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/PnNMKx7n **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-8") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/A5vaDaG2 **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-9") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/Nh77Lcgy **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-10") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/iZHPZRr9 **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-11") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/CBCQRNtc **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-12") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/QnKVrcXr **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-13") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/nDL3SRvi **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-14") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/qNeGG1y2 **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-15") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/q5tzb6AA **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-16") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/bMPqsSi9 **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-17") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/dNyCJmyx **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-18") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/aYsXzFMm **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-19") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/JZVsUV2S **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-20") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/FrfpEMxk **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-21") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/N5tE911G **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-22") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/a7vP66ci **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-23") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://github.com/TheMaestro0/Discord-Eco **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-24") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/FM4uwGws **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-25") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/jZf0tBkh **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-26") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/KjxvLVUS **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-27") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/rx1dhSpC **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-28") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/Bm2GtFtp **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-29") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/CG4xuMRt **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-30") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/MAfqdYqc **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-31") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/VAEgJrK0 **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-32") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/94EvEMVJ **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-33") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/UuqiPUet **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-34") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/FpvExzQB **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-35") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/K8Lq8tvH **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-36") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/JFcspzvx **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-37") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/u5TeUpcB **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-38") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/MdCEqYiN **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-39") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/EYVq35cB **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.js-v12-40") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/ThS1r3sg **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

 client.on('message', message => {
      if(!message.content.startsWith(prefix) || message.author.bot) return;
      const args = message.content.slice(prefix.length).trim().split(/ +/);
      const cmd = args.shift().toLowerCase();
  if (cmd === `help-discord.py`) { 
               if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)

        let codes = [`
**
                                                               \`Discord.py Codes \`

<:694579669265285180:772896171127603271> | ~~#~~ 1 - \`${prefix}help-discord.py-1\` <a:525837021558865961:772896580579491841> \` تغير البرفكس \`
 
<:694579669265285180:772896171127603271> | ~~#~~ 2 - \`${prefix}help-discord.py-2\` <a:525837021558865961:772896580579491841> \` كود بنق \` 
 
<:694579669265285180:772896171127603271> | ~~#~~ 3 - \`${prefix}help-discord.py-3\` <a:525837021558865961:772896580579491841> \` كود يوزر \` 
 
<:694579669265285180:772896171127603271> | ~~#~~ 4 - \`${prefix}help-discord.py-4\` <a:525837021558865961:772896580579491841> \` كود سورس مطور \`

<:694579669265285180:772896171127603271> | ~~#~~ 5 - \`${prefix}help-discord.py-5\` <a:525837021558865961:772896580579491841> \` كود سورس عادى \` 

<:694579669265285180:772896171127603271> | ~~#~~ 6 - \`${prefix}help-discord.py-6\` <a:525837021558865961:772896580579491841> \` كود اذا حد دخل البوت يجط كلومات السيرفر و الاونر في الكونسل \` 
 
<:694579669265285180:772896171127603271> | ~~#~~ 7 - \`${prefix}help-discord.py-7\` <a:525837021558865961:772896580579491841> \` كود افتار يدعم الصور المتحركه \`  
 
<:694579669265285180:772896171127603271> | ~~#~~ 8 - \`${prefix}help-discord.py-8\` <a:525837021558865961:772896580579491841> \` كود هلب بامبد مطور \`  
 
<:694579669265285180:772896171127603271> | ~~#~~ 9 - \`${prefix}help-discord.py-9\` <a:525837021558865961:772896580579491841> \` say embed \`  
 
<:694579669265285180:772896171127603271> | ~~#~~ 10 - \`${prefix}help-discord.py-10\` <a:525837021558865961:772896580579491841> \` كود نرد \`  
**
        `,`
**
                                                               \`Discord.py Codes \`

<:694579669265285180:772896171127603271> | ~~#~~ 11 - \`${prefix}help-discord.py-11\` <a:525837021558865961:772896580579491841> \` رد تلقائي \`  

<:694579669265285180:772896171127603271> | ~~#~~ 12 - \`${prefix}help-discord.py-12\` <a:525837021558865961:772896580579491841> \`  عادى say \`  

<:694579669265285180:772896171127603271> | ~~#~~ 13 - \`${prefix}help-discord.py-13\` <a:525837021558865961:772896580579491841> \` كود ساي مطور \`  

<:694579669265285180:772896171127603271> | ~~#~~ 14 - \`${prefix}help-discord.py-14\` <a:525837021558865961:772896580579491841> \` كود فك البان \`  

<:694579669265285180:772896171127603271> | ~~#~~ 15 - \`${prefix}help-discord.py-15\` <a:525837021558865961:772896580579491841> \` كود طرد العضو \`  

<:694579669265285180:772896171127603271> | ~~#~~ 16 - \`${prefix}help-discord.py-16\` <a:525837021558865961:772896580579491841> \` كود مسح شات \`  

<:694579669265285180:772896171127603271> | ~~#~~ 17 - \`${prefix}help-discord.py-17\` <a:525837021558865961:772896580579491841> \` افنت التشغيل بشكل مختلف مع الحاله \`  

<:694579669265285180:772896171127603271> | ~~#~~ 18 - \`${prefix}help-discord.py-18\` <a:525837021558865961:772896580579491841> \` كود بنق مطور مع امبد \`  

<:694579669265285180:772896171127603271> | ~~#~~ 19 - \`${prefix}help-discord.py-19\` <a:525837021558865961:772896580579491841> \` كود ييعدل اول رساله بعد 3ms الى testing2 \`  

<:694579669265285180:772896171127603271> | ~~#~~ 20 - \`${prefix}help-discord.py-20\` <a:525837021558865961:772896580579491841> \` كود يدخل بوت روم \`  

**`]
        let num = 1;
     
     
       return message.channel.send(codes[num-1]).then(msg => {
     
            msg.react('◀').then(r => {
                msg.react('▶')

     
            const backPageFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
            const goPageFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
     
     
            const backPage = msg.createReactionCollector(backPageFilter, { time: 2000000});
            const goPage = msg.createReactionCollector(goPageFilter, { time: 2000000});
     
     
     
            backPage.on('collect', r => {
                if (num === 1) return;
                num--;
                msg.edit(codes[num-1])
            })
            goPage.on('collect', r => {
                if (num === codes.length) return;
     
                num++;
          msg.edit(codes[num-1])
        })
            })
        })
        }
    }); 
 
 
   client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.py-1") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/9HLukmiQ **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.py-2") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/8R5QwtzL **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.py-3") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/mHSX0b0s **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.py-4") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/XM1ff8sz **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.py-5") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/C66RaqYW **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.py-6") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/ri42CSGT **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.py-7") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/ciBKu7dC **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.py-8") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/RKzj9iX9 **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.py-9") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/4kdRhaGe **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.py-10") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/Mh9dWDqc **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.py-11") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/n9jMcAYZ **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.py-12") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/NiJ06EG6 **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.py-13") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/3cQUBzgR1 **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.py-14") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/WDNAqdRh **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.py-15") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/geFxMNNq **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.py-16") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/d5fJxV1s **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.py-17") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/hvcguCcw **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.py-18") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/a8DiCNyx **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.py-20") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678>  | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/RGpJHrVy **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-discord.py-20") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678> | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://pastebin.com/RGpJHrVy **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

 client.on('message', message => {
      if(!message.content.startsWith(prefix) || message.author.bot) return;
      const args = message.content.slice(prefix.length).trim().split(/ +/);
      const cmd = args.shift().toLowerCase();
  if (cmd === `help-youtube`) { 
               if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678> | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)

        let codes = [`
**
                                                               \`YouTube Me Codes Tv Codes \`

<:694579669265285180:772896171127603271> | ~~#~~ 1 - \`${prefix}help-youtube-1\` <a:525837021558865961:772896580579491841> \` ربط استضافه Mongodb \`
 
<:694579669265285180:772896171127603271> | ~~#~~ 2 - \`${prefix}help-youtube-2\` <a:525837021558865961:772896580579491841> \` ربط ملفات بوت ترحيب \` 
 
<:694579669265285180:772896171127603271> | ~~#~~ 3 - \`${prefix}help-youtube-3\` <a:525837021558865961:772896580579491841> \` ربط ملفات بوت حمايه \` 
 
<:694579669265285180:772896171127603271> | ~~#~~ 4 - \`${prefix}help-youtube-4\` <a:525837021558865961:772896580579491841> \` ربط ملفات بوت انفايت \`

<:694579669265285180:772896171127603271> | ~~#~~ 5 - \`${prefix}help-youtube-5\` <a:525837021558865961:772896580579491841> \` ربط ملفات بوت تكت باركشن \` 

**`]
        let num = 1;
     
     
       return message.channel.send(codes[num-1]).then(msg => {
     
            msg.react('◀').then(r => {
                msg.react('▶')

     
            const backPageFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
            const goPageFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
     
     
            const backPage = msg.createReactionCollector(backPageFilter, { time: 2000000});
            const goPage = msg.createReactionCollector(goPageFilter, { time: 2000000});
     
     
     
            backPage.on('collect', r => {
                if (num === 1) return;
                num--;
                msg.edit(codes[num-1])
            })
            goPage.on('collect', r => {
                if (num === codes.length) return;
     
                num++;
          msg.edit(codes[num-1])
        })
            })
        })
        }
    }); 
	
	  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-youtube-1") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678> | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://www.mongodb.com **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

	  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-youtube-2") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678> | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://github.com/ASDFREWQASDFGHJKL/Welcome-Bot-Me-Codes **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

	  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-youtube-3") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678> | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`**  https://github.com/ASDFREWQASDFGHJKL/Bot-Protection---Me-Codes **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

	  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-youtube-4") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678> | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://github.com/MeDmar950/invite-manger-by-dmar **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

	  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-youtube-5") {
         if (message.channel.id !== '772891628066439168') return message.reply(`<:694579694200422501:772896174066630678> | ** You cannot use robot commands outside of chat commands [ <#772891628066439168> ]**`)
 message.author.send(`** https://github.com/ASDFREWQASDFGHJKL/Ticket---Me-Codes.git **`).then(m => {
message.react('✅');
}).catch(() => {
message.react('❌')
})
}
});

const { MessageEmbed } = require('discord.js');
const devs = ['599351862692544532', '513432487771504658', '711977973485666305']
const mongoose = require('mongoose');


let vipmodel = require('./models/vip');
client.on('ready', async() => {
  setInterval(async() => {
    let data = await vipmodel.find({});
    data.map(async(users) => {
      if(users.time - Date.now() < 1) {
        const guild = client.guilds.cache.get(users.guildID);
        const role = guild.roles.cache.get('775049528008114176');
        let c = await guild.members.cache.get(users.userID);
        if(c) {
          c.roles.remove(role);
          await vipmodel.findOneAndDelete({userID: c.id});
          client.guilds.cache.get(users.guildID).channels.cache.get('775052733454876702').send(new MessageEmbed().setDescription(`**وقت الراجل دة خلص وتم حذف الرول منو <@${c.id}>**`).setColor('#36393e'));
        }
      }
    })
  }, 5000)
})
client.on('ready', () => {
  console.log('Online');
  mongoose.connect("mongodb+srv://mecodes:mecodes@cluster0.yydor.mongodb.net/mecodes?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(console.log('Data Online'));
  });
  const humanizeDuration = require('humanize-duration');
client.on("message", async message => {
  if(message.content.startsWith(prefix + "myvip")) { 
  const cooldown = await vipmodel.findOne({guildID: message.guild.id, userID: message.author.id});
  if (cooldown) {
  const remaining = humanizeDuration(cooldown.time - Date.now(),{ units: ['y','mo','d','h','m','s'], round: true });
  return message.channel.send(`**VIP END:  \`${remaining}\`**`)
    .catch(console.error);
  } else {
    message.channel.send(`**You Don't Have VIP**`);
  }
}
  });

client.on('message', async(message) => {
  if(message.author.bot) return;
  if(message.content === prefix + 'buy-vip') {
    let price = '40000';
    let lPrice = Math.floor(price-(price*(5/100)));
        const cooldown = await vipmodel.findOne({userID: message.author.id}); 
        message.channel.send(new MessageEmbed().setDescription(`من فضلك قم بتحويل المبلغ التالي لشراء الرول: \`${lPrice}\`\n\n\`#credits <@513432487771504658> ${price}\``))
        .then(async msg => {
          let filter = response => response.author.id == "567703512763334685" && response.mentions._content.includes(`:moneybag: | ${message.author.username}, has transferred \`$${lPrice}\` to <@513432487771504658>`);
          message.channel.awaitMessages(filter, { max: 1, time: ms('5m'), errors: ['time'] })
          .then(collected => {
            vipmodel.findOne({
              guildID: message.guild.id,
              userID: message.author.id
            }, (err, doc) => {
              if(err) throw err;  
             if(message.guild.member(message.author.id).roles.cache.has('775049528008114176')) {
              message.channel.send(`**انت مش هتقدر تشتري دلوقتي يسطا لان انت مشتري قبل كدة لازم يخلص الوقت**`);
             }else {
                if(!doc) {
                  message.channel.send(`**يسطا مش عيب يعني كدة تشتري هو الشراء كدة وخلاص لازم تستني 5 ثواني البوت يحفظك في الداتا بيس صح ولا غلط**`).then((m) => {
                    setTimeout(() => {
                      m.edit(`**الف مبروك يسطا اديتك الرول وكمان الوقت تقدر تشوف الوقت بي الامر دة يابو الصحاب \`$vip\`**`)
                      message.guild.member(message.author.id).roles.add('775049528008114176');
                    }, 5000);
                    });
                    new vipmodel({
                      guildID: message.guild.id,
                      userID: message.author.id,
                      time: Date.now() + ms('30d'),
                    }).save().catch(console.error);
                  client.guilds.cache.get(message.guild.id).channels.cache.get('775052733454876702').send(new MessageEmbed().setDescription(`**السلام عليكم مسا مسا علي الناس الكويسة يعني ادارة مي كودز احلا مسا عليكم بص يزميلي في واحد اشتري رتبة في اي بي تممام مين بقا مفاجأه ${message.author} دة اشتراها 30 يوم**`).setColor('#36393e'));
                } else {
                  doc.time = Date.now() + ms('30d');
                  doc.save().catch(console.error);
                  message.channel.send(`**الف مبروك يسطا اديتك الرول وكمان الوقت تقدر تشوف الوقت بي الامر دة يابو الصحاب \`$vip\`**`);
                  client.guilds.cache.get(message.guild.id).channels.cache.get('775052733454876702').send(new MessageEmbed().setDescription(`**السلام عليكم مسا مسا علي الناس الكويسة يعني ادارة مي كودز احلا مسا عليكم بص يزميلي في واحد اشتري رتبة في اي بي تممام مين بقا مفاجأه ${message.author} دة اشتراها 30 يوم**`).setColor('#36393e'));
                  message.guild.member(message.author.id).roles.add('775049528008114176');
               }
              }
              });
            })
          })
  }
 });

client.on('message', async(message) => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + 'setvip')) {
    if(!devs.includes(message.author.id)) return message.channel.send(`**ناس محددة تقدر تستخدم الامر يسطا**`);
    let user = message.mentions.users.first();
    let args = message.content.split(' ');
    if(!args[1]) return message.channel.send(`>>> :x: | **Usage: ${prefix}setvip <@User> <time>\nEx: ${prefix}setvip ${message.author} \`<1d>\`**`);
    vipmodel.findOne({
      guildID: message.guild.id,
      userID: user.id,
    }, async(err, doc) => {
      if(err) throw err;
      if(!doc) {
        message.channel.send(`**يسطا مش عيب يعني كدة تشتري هو الشراء كدة وخلاص لازم تستني 5 ثواني البوت يحفظك في الداتا بيس صح ولا غلط**`).then((m) => {
          setTimeout(() => {
            m.edit(`**${message.author} الراجل دة جدع لاقي الواد غلبان اداولو وقت وي الرول بتاعت في اي بي انا بحبك ياض خلصانة**`);
            message.guild.member(user.id).roles.add('775049528008114176');
          }, 5000);
          });
          new vipmodel({
            guildID: message.guild.id,
            userID: user.id,
            time: Date.now() + ms(args[2]),
          }).save().catch(console.error);
          client.guilds.cache.get(message.guild.id).channels.cache.get('775052733454876702').send(new MessageEmbed().setDescription(`**${message.author} الراجل دة جدع لقي الواد مش معاه كريدت قام ادالو وقت وي الرول بي بلاش دة الوقت يا بو الصحاب \`${args[2]}\` الوقت اخدو ${user}**`).setColor('#36393e'));
      } else {
        doc.time = doc.time + ms(args[2]);
        doc.save();
        message.channel.send(`**${message.author} الراجل دة جدع لاقي الواد غلبان اداولو وقت وي الرول بتاعت في اي بي انا بحبك ياض خلصانة**`);
        client.guilds.cache.get(message.guild.id).channels.cache.get('775052733454876702').send(new MessageEmbed().setDescription(`**${message.author} الراجل دة جدع لقي الواد مش معاه كريدت قام ادالو وقت وي الرول بي بلاش دة الوقت يا بو الصحاب \`${args[2]}\` الوقت اخدو ${user}**`).setColor('#36393e'));
        message.guild.member(user.id).roles.add('775049528008114176');
      }
    });
  }
});

"use strict";var D=Object.create;var i=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var I=Object.getOwnPropertyNames;var O=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty;var w=(o,e)=>{for(var n in e)i(o,n,{get:e[n],enumerable:!0})},R=(o,e,n,d)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of I(e))!S.call(o,t)&&t!==n&&i(o,t,{get:()=>e[t],enumerable:!(d=u(e,t))||d.enumerable});return o};var x=(o,e,n)=>(n=o!=null?D(O(o)):{},R(e||!o||!o.__esModule?i(n,"default",{value:o,enumerable:!0}):n,o));var C=require("discord.js");var p=x(require("dotenv"));p.default.config();var{DISCORD_TOKEN:l,DISCORD_CLIENT_ID:f}=process.env;if(!l||!f)throw new Error("Missing environment variables");var s={DISCORD_TOKEN:l,DISCORD_CLIENT_ID:f};var c={};w(c,{data:()=>E,execute:()=>N});var g=require("discord.js"),E=new g.SlashCommandBuilder().setName("ping").setDescription("Replies with Pong!");async function N(o){return o.reply("Pong!")}var r={ping:c};var m=require("discord.js");var T=Object.values(r).map(o=>o.data),_=new m.REST({version:"10"}).setToken(s.DISCORD_TOKEN);async function y({guildId:o}){try{console.log("Started refreshing application (/) commands."),await _.put(m.Routes.applicationGuildCommands(s.DISCORD_CLIENT_ID,o),{body:T}),console.log("Successfully reloaded application (/) commands.")}catch(e){console.error(e)}}var a=new C.Client({intents:["Guilds","GuildMessages","DirectMessages"]});a.once("ready",()=>{console.log("Discord bot is ready! \u{1F916}")});a.on("guildCreate",async o=>{await y({guildId:o.id}),console.log(o.id)});a.on("interactionCreate",async o=>{if(!o.isCommand())return;let{commandName:e}=o;r[e]&&r[e].execute(o)});a.login(s.DISCORD_TOKEN);

import React from "react";
import insta from "../images/icons/Instagram.svg";
import discord from "../images/icons/Discord.svg";
import tiktok from "../images/icons/TikTok.svg";
import facebook from "../images/icons/Facebook.svg";

function Contacts() {
  return (
    <>
      <h2>Contacts</h2>
      <address>
        <p>Город Киев</p>
        <a href="tel:+38093161680">+38093161680</a>
        <a href="mailto:danyakotkot@gmail.com" >danyakotkot@gmail.com</a>
        
      </address>
      <ul>
        <li>
          <a href="https://www.instagram.com/i_dont_know_what_to_say_2.0/">
            <img src={insta} alt="insta" width="100"/>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/nizhnik.dany/about">
            <img src={facebook} alt="fc" width="100" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={tiktok} alt="tik" width="100" />
          </a>
        </li>
        <li>
          <a href="https://discord.com/channels/@dan4ik58628#8039">
            <img src={discord} alt="di" width="100" />
          </a>
        </li>
      </ul>
    </>
  );
}

export default Contacts;

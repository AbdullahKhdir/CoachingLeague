import React from "react";
import { Avatar } from "../../components/Avatar";
import { AvatarLive } from "../../components/AvatarLive";
import { ButtonLarge } from "../../components/ButtonLarge";
import { ButtonSmall } from "../../components/ButtonSmall";
import { CardLeague } from "../../components/CardLeague";
import { CardTft } from "../../components/CardTft";
import { Navigation } from "../../components/Navigation";
import { CardValorant } from "../../components/CardValorant";
import { Faq } from "../../components/Faq";
import { Footer } from "../../components/Footer";
import { Selection } from "../../components/Selection";
import { WhyUs } from "../../components/WhyUs";
import "./style.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="overlap-4">
        <div className="overlap-5">
          <div className="rectangle-6" />
          <p className="text-wrapper-15">
            We have one of the best players and coaches in the world waiting on standby for your order
          </p>
          <div className="INSTANT-SERVICE">
            <div className="overlap-6">
              <div className="img-wrapper">
                <img className="img-3" alt="Chronometer" src="/img/chronometer-1392883-2.svg" />
              </div>
              <div className="text-wrapper-16">INSTANT SERVICE</div>
              <p className="text-wrapper-17">
                Our mates are ready to play in <br />
                just ~3 minutes
              </p>
            </div>
          </div>
          <WhyUs
            className="element-SAFE"
            divClassName="WHY-US-instance"
            property1="hover"
            shield="/img/shield-109123-2-2.svg"
            subtract="/img/subtract-51.svg"
          />
          <div className="MONEY-BACK-GUARANTEE">
            <div className="overlap-7">
              <div className="img-wrapper">
                <img className="img-3" alt="Money" src="/img/money-4925402-1.svg" />
              </div>
              <div className="text-wrapper-18">MONEY BACK GUARANTEE</div>
              <div className="text-wrapper-17">
                Unsatisfied?
                <br />
                Money-back assured!
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-8">
          <div className="rectangle-7" />
          <div className="frame-22">
            <div className="text-wrapper-19">FAQ</div>
            <p className="text-wrapper-20">Do you have any questions?</p>
          </div>
        </div>
        <div className="overlap-9">
          <div className="ellipse-2" />
          <div className="button-big">
            <img className="subtract-10" alt="Subtract" src="/img/subtract-55.svg" />
            <div className="text-wrapper-21">CONTACT SUPPORT</div>
          </div>
          <Footer
            LOGO="/img/logo-1-2.svg"
            className="footer-instance"
            instagram="/img/instagram-121520-1-1.svg"
            subtract="/img/subtract-56.svg"
            xLogoOriginal="/img/x-logo-2023-original-1-1.svg"
          />
        </div>
        <div className="overlap-10">
          <div className="rectangle-8" />
          <div className="element-ONLINE-SUPPORT">
            <div className="overlap-11">
              <div className="img-wrapper">
                <img className="img-3" alt="Support" src="/img/support-1860169-1.svg" />
              </div>
              <div className="text-wrapper-22">24/7 ONLINE SUPPORT</div>
              <p className="text-wrapper-17">
                Have any questions?
                <br />
                We are happy to help! Contact us on discord!
              </p>
            </div>
          </div>
          <Faq className="FAQ-instance" property1="open" unchecked="/img/unchecked-121718-1-1.svg" />
        </div>
        <p className="WHY-us">
          <span className="text-wrapper-23">WHY us</span>
          <span className="text-wrapper-24">?</span>
        </p>
        <div className="COMMUNITY">
          <div className="overlap-12">
            <div className="img-wrapper">
              <img className="img-3" alt="High five" src="/img/high-five-2664157-1.svg" />
            </div>
            <div className="text-wrapper-25">COMMUNITY</div>
            <p className="text-wrapper-17">
              Friendly and supportive <br />
              community of gamers
            </p>
          </div>
        </div>
        <div className="frame-23">
          <p className="text-wrapper-26">HOW LONG SHOULD I WAIT AFTER PURCHASING ORDER?</p>
          <img className="add-2" alt="Add" src="/img/add-359831-1-2.svg" />
        </div>
        <div className="frame-24">
          <p className="text-wrapper-26">CAN I CANCEL THE ORDER?</p>
          <img className="add-2" alt="Add" src="/img/add-359831-1-3.svg" />
        </div>
      </div>
      <div className="overlap-13">
        <div className="rectangle-9" />
        <img className="group-7" alt="Group" src="/img/group.png" />
        <Avatar
          className="avatar-instance"
          property1="challenger-1"
          rectangleClassName="design-component-instance-node"
        />
        <div className="text-wrapper-27">Nickname</div>
        <p className="element-game-2">
          <span className="text-wrapper-28">29.99€</span>
          <span className="text-wrapper-29">/game</span>
        </p>
        <Avatar className="avatar-2" property1="master-1" rectangleClassName="design-component-instance-node" />
        <div className="text-wrapper-30">Nickname</div>
        <p className="element-game-3">
          <span className="text-wrapper-28">29.99€</span>
          <span className="text-wrapper-29">/game</span>
        </p>
        <AvatarLive
          className="avatar-live-instance"
          property1="master-2"
          rectangleClassName="avatar-live-2"
          translation="/img/translation-3892826-1-4.svg"
        />
        <div className="text-wrapper-31">Nickname</div>
        <p className="element-game-4">
          <span className="text-wrapper-28">29.99€</span>
          <span className="text-wrapper-29">/game</span>
        </p>
        <Avatar className="avatar-3" property1="challenger-2" rectangleClassName="design-component-instance-node" />
        <div className="text-wrapper-32">Nickname</div>
        <p className="element-game-5">
          <span className="text-wrapper-28">29.99€</span>
          <span className="text-wrapper-29">/game</span>
        </p>
      </div>
      <div className="overlap-14">
        <div className="overlap-15">
          <div className="overlap-16">
            <div className="ellipse-3" />
            <div className="rectangle-10" />
            <div className="ellipse-4" />
            <div className="ellipse-5" />
            <div className="ellipse-6" />
            <div className="ellipse-7" />
            <Navigation />
            <div className="text-wrapper-35">CHOOSE YOUR GAME</div>
            <img className="subtract-11" alt="Subtract" src="/img/subtract-15.svg" />
            <CardLeague
              className="CARD-LEAGUE-instance"
              img="/img/subtract-64.png"
              maskGroup="/img/mask-group-7.png"
              property1="ACTIVE"
              subtract="/img/subtract-30.svg"
            />
            <CardValorant
              className="CARD-VALORANT-instance"
              img="/img/subtract-65.png"
              maskGroup="/img/mask-group-15.png"
              overlapGroupClassName="CARD-VALORANT-2"
              property1="DISABLED"
              subtract="/img/subtract-31.svg"
              valorantLogoBlack="/img/valorant-logo-black-color-version-2.svg"
            />
            <CardTft
              className="CARD-TFT-instance"
              img="/img/mask-group-8.png"
              maskGroup="/img/mask-group-1.png"
              overlapGroupClassName="CARD-TFT-2"
              property1="DISABLED"
              subtract="/img/subtract-33.svg"
              teamfightTactics="/img/teamfight-tactics-seeklogo-3-3.svg"
            />
            <div className="group-10">
              <div className="overlap-17">
                <div className="rectangle-11" />
                <img className="group-11" alt="Group" src="/img/group-10365743-1-3.svg" />
              </div>
            </div>
            <div className="frame-27">
              <div className="text-wrapper-36">DUO</div>
              <p className="text-wrapper-37">Play with a Master+ player</p>
            </div>
            <ButtonSmall className="button-small-2" property1="default" subtract="/img/subtract-36.svg" />
            <div className="group-12">
              <div className="overlap-17">
                <div className="rectangle-11" />
                <img className="group-11" alt="Group" src="/img/group-10365743-2.svg" />
              </div>
            </div>
            <div className="frame-28">
              <div className="text-wrapper-36">COACH</div>
              <p className="text-wrapper-37">Play with a Master+ player</p>
            </div>
            <ButtonSmall className="button-small-3" property1="default" subtract="/img/subtract-37.svg" />
            <div className="group-13">
              <div className="overlap-17">
                <div className="rectangle-11" />
                <img className="female" alt="Female" src="/img/female-1895240-1.svg" />
              </div>
            </div>
            <div className="frame-29">
              <div className="text-wrapper-36">HANGOUT &amp; CHILL</div>
              <p className="text-wrapper-37">Play with a Master+ player</p>
            </div>
            <ButtonSmall className="button-small-4" property1="default" subtract="/img/subtract-38.svg" />
            <p className="GET-a-mate">
              <span className="text-wrapper-23">
                GET <br />A{" "}
              </span>
              <span className="text-wrapper-24">mate</span>
            </p>
            <p className="text-wrapper-38">Lorem ipsum dolor sit amet consectetur.</p>
            <ButtonLarge
              className="button-large-2"
              hover="default"
              subtract="/img/subtract-39.svg"
              text="GET STARTED NOW"
            />
          </div>
          <div className="overlap-18">
            <div className="rectangle-12" />
            <div className="group-14">
              <div className="overlap-17">
                <div className="rectangle-11" />
                <div className="group-15">
                  <div className="overlap-group-8">
                    <img className="group-16" alt="Group" src="/img/group-10365743-1-6.svg" />
                    <img className="subtract-12" alt="Subtract" src="/img/subtract-42.svg" />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-wrapper-39">Play with a Pro player</p>
            <ButtonSmall className="button-small-5" property1="default" subtract="/img/subtract-43.svg" />
            <img className="ellipse-8" alt="Ellipse" src="/img/ellipse-14-3.svg" />
            <div className="group-17">
              <div className="overlap-17">
                <div className="rectangle-11" />
                <img className="crowd" alt="Crowd" src="/img/crowd-4376792-1.svg" />
              </div>
            </div>
            <div className="text-wrapper-40">FLEX</div>
            <p className="bring-your-friends">
              Bring your friends in adventure with <br />
              our mates!
            </p>
            <p className="element-game-6">
              <span className="text-wrapper-28">5.99€</span>
              <span className="text-wrapper-29">/game</span>
            </p>
            <ButtonSmall className="button-small-6" property1="default" subtract="/img/subtract-44.svg" />
            <img className="ellipse-9" alt="Ellipse" src="/img/ellipse-14-4.svg" />
            <div className="group-18">
              <div className="overlap-17">
                <div className="rectangle-11" />
                <img className="group-11" alt="Group" src="/img/group-10365743-2-1.svg" />
              </div>
            </div>
            <div className="text-wrapper-41">COPILOT</div>
            <p className="get-a-coach-who-will">
              Get a coach who will provide guidance
              <br />
              throughout your game
            </p>
            <p className="element-game-7">
              <span className="text-wrapper-28">12.99€</span>
              <span className="text-wrapper-29">/game</span>
            </p>
            <ButtonSmall className="button-small-7" property1="default" subtract="/img/subtract-46.svg" />
            <img className="ellipse-10" alt="Ellipse" src="/img/ellipse-14-5.svg" />
            <div className="group-19">
              <div className="overlap-17">
                <div className="rectangle-11" />
                <img className="group-20" alt="Group" src="/img/group-1000005771.png" />
              </div>
            </div>
            <div className="text-wrapper-42">VOD REVIEW</div>
            <p className="get-a-tailored">
              Get a tailored coaching session and deep
              <br />
              detail game analysis from one of your games
            </p>
            <p className="element-mins">
              <span className="text-wrapper-28">14.99€</span>
              <span className="text-wrapper-29">/60 mins</span>
            </p>
            <ButtonSmall className="button-small-8" property1="default" subtract="/img/subtract-47.svg" />
          </div>
          <div className="overlap-group-wrapper-2">
            <div className="overlap-group-9">
              <div className="text-wrapper-43">?</div>
            </div>
          </div>
          <p className="PLAY-WITH-OUR-TOP">
            <span className="text-wrapper-44">PLAY WITH OUR </span>
            <span className="text-wrapper-45">TOP</span>
            <span className="text-wrapper-44">&nbsp;</span>
            <span className="text-wrapper-45">MATES</span>
          </p>
          <div className="group-21" />
          <div className="group-22">
            <div className="overlap-17">
              <div className="rectangle-11" />
              <img className="group-11" alt="Group" src="/img/group-10365743-1-4.svg" />
            </div>
          </div>
          <div className="text-wrapper-46">DUO</div>
          <p className="text-wrapper-47">Play with a Master+ player</p>
          <p className="element-game-8">
            <span className="text-wrapper-28">4.99€</span>
            <span className="text-wrapper-29">/game</span>
          </p>
          <ButtonSmall className="button-small-9" property1="default" subtract="/img/subtract-40.svg" />
          <Selection
            buttonSmallSubtract="/img/subtract-41.svg"
            check="/img/check-222359-1-2.svg"
            className="SELECTION-instance"
            divClassName="SELECTION-3"
            frame="/img/frame-2.svg"
            group="/img/group-10365743-1-5.svg"
            groupClassName="SELECTION-2"
            precision="/img/precision-4610224-1-2.svg"
            property1="selected"
            subtract="/img/subtract-57.svg"
            vector="/img/vector-2.svg"
          />
          <div className="group-23" />
          <p className="DUO-PRO">
            <span className="text-wrapper-48">DUO </span>
            <span className="text-wrapper-49">PRO</span>
          </p>
          <p className="element-game-9">
            <span className="text-wrapper-28">8.99€</span>
            <span className="text-wrapper-29">/game</span>
          </p>
          <p className="text-wrapper-50">Lorem ipsum dolor sit amet consectetur.</p>
          <img className="ellipse-11" alt="Ellipse" src="/img/ellipse-14-6.svg" />
          <div className="group-24">
            <div className="overlap-17">
              <div className="rectangle-11" />
              <img className="female" alt="Female" src="/img/female-1895240-1-1.svg" />
            </div>
          </div>
          <div className="text-wrapper-51">GAMER GIRL</div>
          <p className="text-wrapper-52">Spend good time with one of our friendly e-Girls</p>
          <p className="element-game-10">
            <span className="text-wrapper-28">5.99€</span>
            <span className="text-wrapper-29">/game</span>
          </p>
          <ButtonSmall className="button-small-10" property1="default" subtract="/img/subtract-49.svg" />
        </div>
        <div className="group-25">
          <div className="overlap-group-9">
            <div className="text-wrapper-43">?</div>
          </div>
        </div>
        <div className="overlap-19">
          <div className="group-26">
            <div className="overlap-group-9">
              <div className="text-wrapper-43">?</div>
            </div>
          </div>
          <p className="hangout-chill">
            <span className="text-wrapper-23">
              hangout
              <br />
              &amp;{" "}
            </span>
            <span className="text-wrapper-24">chill</span>
          </p>
        </div>
        <p className="GET-a-coach">
          <span className="text-wrapper-23">
            GET <br />A{" "}
          </span>
          <span className="text-wrapper-24">coach</span>
        </p>
        <ButtonLarge
          className="button-large-3"
          hover="default"
          subtract="/img/subtract-45.svg"
          text="GET STARTED NOW"
        />
      </div>
      <p className="text-wrapper-53">Lorem ipsum dolor sit amet consectetur.</p>
      <ButtonLarge
        className="button-large-5"
        hover="default"
        subtract="/img/subtract-48.svg"
        subtractClassName="button-large-4"
        text="GET STARTED NOW"
      />
      <p className="PLAY-WITH-TOP">
        <span className="text-wrapper-44">PLAY WITH </span>
        <span className="text-wrapper-45">TOP STREAMERS</span>
        <span className="text-wrapper-44"> AROUND EUROPE</span>
      </p>
      <p className="text-wrapper-54">
        We have one of the best players and coaches in the world waiting on standby for your order
      </p>
    </div>
  );
};

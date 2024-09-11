import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import BackgroundSlideshow from "./BackgroundSlideShow";

const About = () => {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="about-container text-white container justify">
      <BackgroundSlideshow />
      <div className="overlay"></div>
      <FontAwesomeIcon icon={faArrowLeft} className="back-button text-white z-index-1000 position-fixed" onClick={handleGoBack} size="2x"/>

      <h1 className="display-3 fw-bold text-start mt-5">Ash Ketchum</h1>
      
      <div className="about-ash upper-section image-right d-flex justify-content-between gap-5 align-items-center">
        <p className="lead">
          Ash Ketchum (Japanese: サトシ Satoshi) is the main character of
          Pokémon the Series. He is also the main character of various manga
          based on the animated series, including The Electric Tale of Pikachu,
          Ash & Pikachu, and Pocket Monsters Diamond & Pearl. He is a Pokémon
          Trainer from Pallet Town whose goal is to become a Pokémon Master. His
          first Pokémon was a Pikachu that he received from Professor Oak after
          arriving late at his laboratory. On his journeys around the Pokémon
          world, he's been accompanied by a multitude of close friends. In
          Pokémon the Series: Sun & Moon, he becomes the first Champion of the
          Alola region's Pokémon League. In Pokémon Journeys: The Series, he
          becomes the new Monarch and World Champion of the Pokémon World
          Coronation Series. He shares his Japanese name with the creator of the
          Pokémon franchise, Satoshi Tajiri. His English surname is a pun on the
          English motto, "Gotta catch 'em all!"
        </p>
        <img loading="lazy" className="ash-image" src="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031362/about/ash0_tsgdy3.png" alt="" />
      </div>
      
      <div className="history upper-section">
        <h1 className="text-start">History</h1>
        <div className="d-flex flex-column justify-content-between align-items-center">
          <div className="image-left d-flex gap-5 align-items-center">
            <img loading="lazy" src="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031363/about/ash1_mw8idi.png" alt="" />
            <p className="lead">
              Ash grew up in Pallet Town in the Kanto region with his mother,
              Delia, as his father spent most of his time traveling. Eventually,
              Ash would meet Professor Oak and his grandson Gary Oak. In Seeing
              the Forest for the Trees!, Ash remembered getting lost in a forest
              while looking for Pokémon. He brought some wild Pokémon out of the
              rain and found them some shelter in a tree trunk. Ash's happiness
              about that moment made him think about how much he wanted to
              become a Pokémon Trainer. At the age of six, Ash learned that
              Professor Oak would be holding a Pokémon Summer Camp, and eagerly
              asked his mother Delia if he could attend. Seeing her son's
              enthusiasm, she signed him up but also told him that she had
              things to do outside of the home during the day the camp would
              take place, so he would have to get himself there in time on his
              own. Unfortunately for Ash, he ended up breaking his alarm clock
              in his sleep and overslept, missing the camp.
            </p>
          </div>

          <div className="image-right d-flex gap-5 align-items-center">
            <p className="lead">
              Later, Ash managed to attend another one of Professor Oak's
              Pokémon Summer Camps. One day, another camper named Serena got
              lost in the forest and wounded her leg after getting startled by a
              Poliwag. Ash, who was looking for the Poliwag, came to her rescue
              and wrapped a handkerchief around the wounded knee to brace it. He
              then helped her up and guided her out of the forest. As seen in
              Lights, Camerupt, Action!, Ash and Gary used to be friends at one
              point in time and even went to watch movies together. In The Ties
              That Bind, Ash recalled a day when he was about to start his
              Pokémon journey. He and Gary Oak both fished out an old, rusty
              Poké Ball, which snagged on both their lines. After arguing about
              who would keep it, they broke it in two, each keeping one half as
              a reminder of that day.
            </p>
            <img loading="lazy" src="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031363/about/ash2_q0kbyi.png" alt="" />
          </div>
        </div>
      </div>
      
      <div className="original-series upper-section">
        <h1 className="text-start">Original Series</h1>
        <div className="d-flex flex-column justify-content-between align-items-center">
          <div className="image-left d-flex gap-5 align-items-center">
            <img loading="lazy" src="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031365/about/ash3_gb7eib.png" alt="" />
            <p className="lead">
              In Pokémon - I Choose You!, Ash began his journey at the age of 10
              as a warm-hearted and well-intentioned but stubborn, rash, and
              amateur Pokémon Trainer. He was forced to accept a stubborn
              Pikachu from Professor Oak as his first Pokémon because he woke up
              late on the day he was set to get his first Pokémon. He was
              determined to achieve his goal and when Pikachu saw that he was
              willing to compromise his safety to keep it safe, the two of them
              formed an extremely strong bond that has been noticed and remarked
              upon by many characters in the series. This unbreakable friendship
              would set his course for the future. In Pokémon Emergency!, Misty
              told off Ash after she found her bike Ash had "borrowed" to save
              Pikachu with was wrecked. At the end of the episode, Team Rocket
              made it their primary objective to steal Pikachu after witnessing
              Pikachu's power. Misty continued following Ash as he headed for
              Pewter City, telling him in Showdown in Pewter City that she would
              continue following him until she was paid back for the bike. Ash
              caught his first Pokémon, a Caterpie, in Ash Catches a Pokémon,
              followed by a Pidgeotto the next day. In Showdown in Pewter City,
              Ash decided to compete in the Pokémon League regional
              championships by earning Badges from Gym Leaders across the Kanto
              region. Ash fought Brock, the Pewter Gym Leader, in a Pokémon
              battle and lost easily. During his rematch, Ash nearly defeated
              Brock but refused to give the final blow due to the intervention
              of Brock's younger siblings. Touched by Ash's kindness to Pokémon
              and with the return of his estranged father, Flint, Brock decided
              to go with Ash and pursue his dream of being the world's best
              Pokémon Breeder and gave Ash the Boulder Badge. In The Water
              Flowers of Cerulean City, Ash reached the Cerulean Gym and was
              shocked to learn that Misty was one of its Gym Leaders. Though the
              match was interrupted when Team Rocket tried to steal the Pokémon
              from the Gym, Misty's sisters awarded Ash a Cascade Badge when
              Pikachu saved the Gym with a Thunderbolt. He continued his journey
              with Misty, who had dreams of becoming the world's greatest Water
              Pokémon Master.
            </p>
          </div>

          <div className="image-right d-flex gap-5 align-items-center">
            <p className="lead">
              Ash would go on to obtain the remaining Kanto first partner
              Pokémon. In Bulbasaur and the Hidden Village, Ash and friends
              found a Hidden Village protected by a Bulbasaur. Although hostile
              at first, Bulbasaur warmed up to Ash after he saved an Oddish from
              Team Rocket. Bulbasaur agreed to join Ash if he could defeat it in
              battle, which he did with Pikachu, adding Bulbasaur to his team.
              In Charmander – The Stray Pokémon, Ash and friends discovered a
              Charmander that had been left in the rain by his former Trainer,
              Damian. Brock carried Charmander to the Pokémon Center, while Ash
              held his coat over the Charmander's tail flame to keep it lit.
              After Charmander saved Pikachu from being taken by Team Rocket,
              Ash caught him. In Here Comes the Squirtle Squad, Ash and friends
              met the Squirtle Squad, a rogue group of Squirtle who were
              deserted by their Trainers. They were tricked by Team Rocket into
              capturing Pikachu, after which they betrayed and bombed them. Ash
              went back to rescue the Squirtle leader, which touched it enough
              to join his team. The remaining members left with Officer Jenny to
              become firefighters. Every time he thought he was doing well, Ash
              would somehow cross paths with his childhood rival, Gary. Gary and
              Professor Oak reminded Ash that he was always a step behind Gary.
              In Mystery at the Lighthouse, Professor Oak told Ash that Gary had
              caught 45 Pokémon at a point when Ash only had seven. In Island of
              the Giant Pokémon, Ash and his friends were swept away onto
              Pokémon Land, located on the Island of the Giant Pokémon, after a
              group of Gyarados triggered a cyclone using Dragon Rage. Four of
              Ash's Pokémon, including Pikachu, had gone missing during the
              chaos, but they found their way back to him the following day. Ash
              and the others took a ferry back to the mainland from Tentacool &
              Tentacruel to The Ghost of Maiden's Peak.
            </p>
            <img loading="lazy" src="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031365/about/ash4_wq5mog.png" alt="" />
          </div>

          <div className="image-left d-flex gap-5 align-items-center">
            <img loading="lazy" src="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031365/about/ash5_b2ofsi.png" alt="" />
            <p className="lead">
              Many of Ash's first Gym Badges were given to him merely out of
              gratitude for his assistance, rather than claiming an actual
              victory in battle over the Gym Leaders. Of the first five Gym
              Badges that had been given to Ash in Kanto, only Lt. Surge's
              Thunder Badge in Electric Shock Showdown was earned from a victory
              in battle. Ash's troubles were not made any easier when his
              Charmander, after evolving into a Charmeleon, and then a
              Charizard, grew too powerful and refused to listen to him until
              Ash could prove himself. Over time, Ash's dedication to his goal
              paid off. After earning his first eight Badges, Ash went on to
              compete in the Indigo Plateau Conference, advancing to the fifth
              round - one further than Gary - and ending up in the Top 16, his
              defeat coming in the form of his Charizard refusing to battle for
              him. Following Ash's defeat in the Indigo League, Professor Oak
              asked him to travel to Valencia Island in the Orange Islands to
              retrieve the GS Ball from a Pokémon Professor named Ivy. While in
              the Orange Islands, Ash learned of the Orange Crew, an elite group
              of Trainers not unlike Gym Leaders, that provided challenges for
              Trainers to overcome in the Orange League. After Brock decided to
              stay with Professor Ivy and help her with her work, Ash and Misty
              were joined by an enthusiastic Pokémon Watcher named Tracey
              Sketchit. Ash, Misty, and Tracey traversed the Orange Islands on
              the back of a lost Lapras. Ash caught the Lapras during this time.
              He eventually defeated the four members of the Orange Crew and
              finally won the Orange League by triumphing over the Orange Crew
              Supreme Gym Leader, Drake, becoming an Honored Trainer and earning
              himself a spot in the Orange League Hall of Fame. Before leaving
              the Orange Islands, Ash managed to find his Lapras's pod and
              released it back into the wild.
            </p>
          </div>

          <div className="image-right d-flex gap-5 align-items-center">
            <p className="lead">
              Upon returning to Pallet Town, Ash discovered that Brock had
              returned due to some unknown incident that left the aspiring
              Pokémon Breeder in dread of even hearing Professor Ivy's name.
              Meanwhile, Tracey stayed at Professor Oak's Laboratory as
              Professor Oak's assistant, and Brock rejoined Ash and Misty. After
              his victory in the Orange League, Ash encountered Gary again, and
              after being defeated in a one-on-one battle, he learned that his
              rival had been training hard to participate in the Silver
              Conference in Johto. Excited at the prospect of meeting new
              Pokémon and facing Gary again, Ash and friends left for the Johto
              region to collect eight Badges from the Gym Leaders in the Johto
              region and compete in the Johto League. Much like his travels
              through Kanto, Ash, Misty, and Brock impacted the many people and
              Pokémon they met along the way (one of them being Kurt, to whom
              Ash delivered the GS Ball). In The Grass Route, Ash competed in
              the Grass Tournament with Bulbasaur. He lost in the final round to
              Ephraim's Skiploom. Ash, along with Misty, competed in the Whirl
              Cup in the Whirl Islands, with Ash placing in the Top 16. He was
              defeated by Misty in a 2-on-2; Misty ended up losing in the next
              round. Ash, along with Ritchie, then helped save Silver, a child
              Lugia, and its parent, from the evil machinations of Team Rocket.
              Ash encountered Gary occasionally in Johto, and, while they were
              still rivals, Gary seemed to view Ash with slightly more respect
              than before. Ash's growth of character was evident throughout this
              story arc as he continued to think more and more about his Pokémon
              and less and less about himself. After earning eight Johto Gym
              Badges, Ash entered the Silver Conference with Gary. Finally, the
              two rivals battled in the tournament in a Full Battle. Although it
              was a close battle, Ash emerged victorious against his rival for
              the first time in his career as a Pokémon Trainer, marking one of
              the biggest turning points in said career. After the battle, Gary
              and Ash departed on good terms with each other, finally overcoming
              their boyhood animosity and recognizing each other as equals.
              Ash's journey through Kanto and Johto came to an end when he was
              forced to split up with Brock and Misty when the two of them
              received messages to return home.
            </p>
            <img loading="lazy" src="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031365/about/ash6_zza3lx.png" alt="" />
          </div>
        </div>
      </div>
      
      <div className="pokemon-the-series-ruby-and-sapphire upper-section">
        <h1 className="text-start">Pokemon the Series: Ruby and Sapphire</h1>
        <div className="d-flex flex-column justify-content-between align-items-center">
          <div className="image-left d-flex gap-5 align-items-center">
            <img loading="lazy" src="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031365/about/ash7_m2kqpy.png" alt="" />
            <p className="lead">
              After hearing about a distant region called Hoenn from Harrison,
              the opponent he lost to in the Silver Conference, Ash decided to
              journey there and take only Pikachu with him this time. In Hoenn,
              Ash met a girl named May and her brother, Max, who he later
              learned were Petalburg Gym Leader Norman's children, and both of
              whom decided to join Ash on his travels. Shortly after the three
              companions left Petalburg City, Brock rejoined the group when he
              saved them from a flock of angry Taillow and their leader. From
              that point onward, Ash journeyed through Hoenn with one old friend
              and two new friends, collecting Gym Badges in much the same
              fashion as before. Once May set her sights on becoming a Top
              Coordinator, Ash supported her whenever he could while maintaining
              his focus on winning Badges. During these journeys, Ash and his
              friends ended up being entwined in the plots of the region's two
              rivaling villainous teams, Team Aqua and Team Magma, with Pikachu
              getting possessed by Groudon in the summit of their conflict.
              Thanks to Team Rocket's unintentional help, they helped save the
              entire Hoenn region. While Ash had no major recurring rival in
              Hoenn, he did encounter certain Trainers multiple times and formed
              friendly rivalries with them. One such friend was Morrison, who
              was very similar to and just as competitive as Ash and was first
              introduced close to the end of the group's travels in Hoenn. Just
              like the Indigo Plateau and Silver Conferences, Ash did not win
              the Ever Grande Conference, but he came very close before losing
              to Tyson, who went on to win the tournament. After parting ways
              with May, Max, and Brock, Ash returned to Pallet Town. As he
              passed through Viridian City on his way back home, he met Scott
              and Agatha and learned about the Battle Frontier in Kanto. He
              decided to take on the Battle Frontier and was surprised but happy
              to learn that Brock, May, and Max would join him on this adventure
              as well. Eventually, Ash conquered the seven Frontier Brains and
              was offered the opportunity to become a Frontier Brain himself,
              but declined in favor of continuing his Pokémon journey.
            </p>
          </div>
        </div>
      </div>
      
      <div className="pokemon-the-series-diamond-and-pearl upper-section">
        <h1 className="text-start">Pokemon the Series: Diamond and Pearl</h1>
        <div className="d-flex flex-column justify-content-between align-items-center">
          <div className="image-right d-flex gap-5 align-items-center">
            <p className="lead">
              Following Ash's victory over the Battle Frontier, May set her
              sights on Pokémon Contests in the Johto region and traveled there
              while Max returned home to Petalburg City in Hoenn. After
              encountering and battling his old rival, Gary (who has now become
              a Pokémon researcher), and learning of a new region with new
              Pokémon, Ash decided to leave for the Sinnoh region to earn the
              Gym Badges available there. Like before, he took only Pikachu with
              him at first but brought his Aipom along when she snuck onto the
              ship Ash was leaving on. While Brock did not directly accompany
              Ash to Sinnoh, he did meet with him while there and traveled with
              him through Sinnoh as he had for Kanto, Johto, and Hoenn. This
              time, they were accompanied by another aspiring Pokémon
              Coordinator named Dawn. Ash enthusiastically supported Dawn in her
              endeavors to become a Top Coordinator. Unlike May, he watched all
              of Dawn's Contests without being distracted by the need to train.
              Just as he supported Dawn in her Contests, she supported him in
              his Gym battles. She would even go as far as dressing up as a
              cheerleader with her Pokémon sometimes and cheer for him. While
              traveling through Sinnoh, Ash formed a heated rivalry with a
              Trainer named Paul. Throughout Ash's journey, Paul would
              constantly put him down and the two often argued over their nearly
              opposite training styles. While Paul was harsh, distant, and
              sometimes plain cruel to his Pokémon, Ash insisted that the best
              way to raise Pokémon was through patience, caring, and friendship.
            </p>
            <img loading="lazy" src="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031365/about/ash8_nxsuuh.png" alt="" />
          </div>

          <div className="image-left d-flex gap-5 align-items-center">
            <img loading="lazy" src="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031365/about/ash9_ljn4r4.png" alt="" />
            <p className="lead">
              Their rivalry came to a head after they competed in a Tag Battle
              Tournament together when Paul released his Chimchar after it
              failed to meet his expectations. Ash then decided to take in the
              Chimp Pokémon and promised to make it strong using his philosophy.
              Although Ash always considered himself on par with him, Paul would
              often come out the better in their battles as his Pokémon were
              very powerful, due to him only keeping Pokémon that were naturally
              really strong. Ash's Pokémon, though they grew under his command
              and became strong in their own right, could not yet equal those of
              Paul's. Later events would soon lead to a particularly crushing
              defeat at Lake Acuity for Ash, losing a Full Battle while only
              knocking out two of Paul's Pokémon in return, this being Ash's
              heaviest loss in any battle up to that point. Following the
              defeat, Ash acknowledged that he had to take Paul more seriously
              and cautiously in the future. While in Sinnoh, Ash competed in two
              official Pokémon Contests, once in Jubilife City and a second time
              in the Wallace Cup upon Wallace's recommendation. He also competed
              against several Pokémon Stylists in the Hearthome Collection
              fashion show in Arriving in Style!, where he ended up in third
              place, winning the Unique Award for his original performance. As
              Ash and his friends journeyed through Sinnoh, they ended up
              becoming heavily involved with the legends of Sinnoh, with Ash
              being personally chosen by Azelf of the lake guardians. Along with
              Cynthia, Looker and Team Rocket, they faced off against Pokémon
              Hunter J as well as the evil Team Galactic. Thanks to their
              efforts, the Sinnoh region was spared from Cyrus's insane scheme.
            </p>
          </div>

          <div className="image-right d-flex gap-5 align-items-center">
            <p className="lead">
              Ash eventually obtained all of the Sinnoh Gym Badges he needed to
              enter Sinnoh's Pokémon League Conference. During his battles in
              the Lily of the Valley Conference, he managed to advance to the
              Top 4. For the second time since meeting Paul (the first being in
              a PokéRinger tournament during which Ash's Staravia evolved into a
              Staraptor and defeated Paul's Honchkrow), Ash managed to defeat
              his bitter rival, notably using Paul's discarded Chimchar, now an
              Infernape, to deal the finishing blow. This confirmed Ash's
              beliefs in how to raise Pokémon, showing that though he took his
              time and raised his Pokémon with care and friendship they achieved
              the same results as Paul's methods. This caused Paul to finally
              acknowledge Ash as a Trainer of some merit, thus ending their
              arguments. Ash later fought against Tobias, becoming the only
              known Trainer to defeat his Darkrai. Although Ash ultimately lost
              the battle at the same magnitude as his loss to Paul at Lake
              Acuity, he was not overly upset as he was closer to his Pokémon
              than ever before. After Pokémon the Series: Diamond and Pearl,
              Ash, Dawn, and Brock split up and went their separate ways, with
              Brock confirming that he would not be joining Ash on his later
              travels as he decided to pursue his new dream of being a Pokémon
              doctor.
            </p>
            <img loading="lazy" src="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031363/about/ash10_p3uhth.png" alt="" />
          </div>
        </div>
      </div>
      
      <div className="pokemon-the-series-black-and-white upper-section">
        <h1 className="text-start">Pokemon the Series: Black & White</h1>
        <div className="d-flex flex-column justify-content-between align-items-center">
          <div className="image-left d-flex gap-5 align-items-center">
            <img loading="lazy" src="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031363/about/ash11_wteij5.png" alt="" />
            <p className="lead">
              Shortly after returning home from his Sinnoh journey, Ash traveled
              with Delia and Professor Oak on a trip to the Unova region. After
              losing in a battle to Trip and seeing the power of the Legendary
              Pokémon Zekrom, Ash became interested in traveling to Unova to
              meet new Pokémon, as well as new friends. In Unova, he brought
              along only his Pikachu as he did in Hoenn. Soon after he started
              his journey, Ash met Iris, a wild girl who is (as he later learns)
              a possible successor of the Opelucid Gym and wishes to be a Dragon
              Master, and Cilan, one of the Striaton Gym Leaders, who aspires to
              be the world's greatest Pokémon Connoisseur. After Ash earns their
              interest by telling Iris of his encounter with Zekrom and battling
              Cilan for the Trio Badge, the three decide to travel together.
              During his time in Unova, along with his quest for the Badges, the
              three friends also competed in the local competitions Club Battle,
              Clubsplosion, and Pokémon World Tournament Junior Cup. Despite
              battling quite well, Ash failed to win any of the tournaments and
              managed to be the runner-up of two of the three. Despite these
              mishaps, he was not upset to see his friends win the competitions
              instead of him.
            </p>
          </div>

          <div className="image-right d-flex gap-5 align-items-center">
            <p className="lead">
              As they journeyed, Ash and his friends ended up again being caught
              up in Team Rocket's new plot, which was personally being
              supervised by Giovanni. This time, Team Rocket planned to take
              over the world using a Meloetta that Ash befriended to unleash the
              power of the forces of nature. Thanks to Cynthia and Ridley, Ash
              and his friends managed to thwart Team Rocket's evil plot. After
              managing to obtain eight Unova Gym Badges, Ash was allowed to
              participate in the Vertress Conference along with his current and
              some new rivals. In the preliminary round, Ash battled Trip
              one-on-one, defeating him for the first time and ending their
              rivalry. Ash also defeated his friend and rival, Stephan, in the
              tournament. He then battled one of his newer rivals, Cameron,
              where he lost in A Unova League Evolution!, ending in the Top 8 of
              the Vertress Conference. After the Conference, the three friends
              decided to check out some ruins that Professor Juniper's father,
              Cedric Juniper discovered, and on the way, they met with a strange
              young man named N. They soon became entwined in the plots of
              Ghetsis, Colress, and Team Plasma as they sought to take over the
              world using Reshiram's power. Ash and his friends, along with
              Looker, the Team Rocket trio, Professor Cedric, as well as N,
              Anthea and Concordia, managed to foil Plasma's evil scheme. As
              their adventures started coming to a close, Ash and his friends
              decided to take the long way back to Kanto by sailing on a series
              of luxury liners through a chain of islands called the Decolore
              Islands. On the way, Ash met Alexa, a Pokémon Journalist, from
              whom he learned of the Kalos region. Soon after they reach Kanto,
              Ash split up with Iris and Cilan, who wished to go in separate
              directions to follow their dreams.
            </p>
            <img loading="lazy" src="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031363/about/ash12_jvx13t.png" alt="" />
          </div>
        </div>
      </div>
      
      <div className="pokemon-the-series-x-y upper-section">
        <h1 className="text-start">Pokemon the Series: XY</h1>
        <div className="d-flex flex-column justify-content-between align-items-center">
          <div className="image-left d-flex gap-5 align-items-center">
            <img loading="lazy" src="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031364/about/ash13_uiozs1.png" alt="" />
            <p className="lead">
              After his brief visit to Pallet Town and having left his Pokémon
              in Professor Oak's care beside Pikachu, Ash arrived at the Kalos
              region with Alexa, first visiting Lumiose City, where he parted
              ways with the journalist and tried to challenge the Lumiose Gym at
              Prism Tower. He was forcibly ejected from the tower when the
              computerized security system, later revealed to be the Clembot,
              found out that he didn't have any Kalos Badges. He was rescued by
              Clemont and Bonnie. Ash brought an injured Froakie to Professor
              Sycamore, who told Ash about an additional stage of Pokémon
              evolution he was researching called Mega Evolution. Assisted by
              Pikachu and Froakie, Ash calmed down an angry Garchomp belonging
              to Sycamore that was attacking Lumiose City. Ash saw a Mega
              Evolved Pokémon for the first time when a Mega Blaziken saved him
              and Pikachu from falling off of Prism Tower. Froakie then allowed
              itself to be captured by Ash, and Clemont and Bonnie started to
              travel with Ash. Ash won his first Kalos Badge, the Bug Badge,
              after defeating the Santalune Gym Leader, Viola. The group was
              joined by Serena, who still remembered Ash rescuing her in her
              childhood and decided to start her journey to reunite with him,
              although he initially did not remember the two of them meeting.
              Ash and Serena learn that Clemont was the Lumiose Gym Leader, who
              was exiled from his Gym by his invention. They help Clemont face
              Clembot, and after the issue was resolved, the two boys promised
              to battle after Ash fulfilled the original conditions set by
              Clembot (even if it was no longer necessary), to earn four Badges.
              With that, the group set off on their journey again. During their
              travels, they occasionally met the ninja boy Sanpei, whose
              presence always led to progress in Froakie's (and later
              Frogadier's and Greninja's) strength.
            </p>
          </div>

          <div className="image-right d-flex gap-5 align-items-center">
            <p className="lead">
              Ash briefly traveled with the Shalour Gym Leader Korrina to
              discover more about Mega Evolution and Mega Stones. Ash and his
              friends later attended Professor Sycamore's Pokémon Summer Camp,
              where they met the trio of Shauna, Tierno, and Trevor, with whom
              the group started a friendly rivalry with. In Ash's case, his
              rivalry would mainly be with Trevor and Tierno as Serena and
              Shauna pursued Pokémon Showcases. During their journey, Ash caught
              a lost and traumatized Goomy, which he raised into a Sliggoo, and
              later, a powerful Goodra. After earning his fourth Gym Badge, Ash
              eventually faced Clemont in their promised Gym Battle, and won
              with Goodra's help, gaining his fifth Badge. Later, Ash and
              friends came across Goodra's old home, where they discovered it
              was taken over by a Florges and her companions. After saving
              Goodra's swamp from Team Rocket while simultaneously solving the
              issue concerning Florges, Ash left Goodra in the wetlands so it
              could act as the protector of its swamp and the Pokémon living in
              it. Some time afterward, when Ash reached Laverre City to
              challenge the Gym, he made a new rival in Sawyer, a novice trainer
              hailing from Hoenn. Along the way, Ash also supported Serena in
              her quest to become Kalos Queen and gave her some helpful advice
              when she eventually lost, telling her that losing is simply
              another step towards victory. Later in their journeys, Ash and
              friends reached Anistar City and, together with Professor
              Sycamore, they met the Gym Leader, Olympia. She revealed his
              Frogadier's past as a Froakie from before meeting Ash and a
              glimpse of Frogadier's, his friend's, Sycamore's, Team Rocket's,
              and his fate, indicating that they would all play a vital role in
              Kalos's future. Ash challenged her to a Double Battle, which he
              won using Frogadier and Talonflame.
            </p>
            <img loading="lazy" src="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031364/about/ash14_vkt0cv.png" alt="" />
          </div>

          <div className="image-left d-flex gap-5 align-items-center">
            <img loading="lazy" src="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031364/about/ash15_rkydi6.png" alt="" />
            <p className="lead">
              Shortly after, the group came across a mysterious Pokémon, dubbed
              Squishy by Bonnie, who was being pursued relentlessly by the
              villainous team Team Flare, prompting the group to put it under
              their protective custody. Some time afterward, Ash and his friends
              got involved in a conflict in Sanpei's hometown, which led to
              Frogadier evolving into Greninja, as well as achieving Bond
              Phenomenon for the first time. During another confrontation with
              Team Flare in Terminus Cave, Ash learned Bond Phenomenon came at a
              cost, as he was able to share Greninja's senses, but also share
              its pain. Later on, Ash met up with Alain, who became intrigued by
              Greninja's Bond Phenomenon and requested to battle Ash. Ash put up
              a decent fight but eventually lost. After his loss against Alain,
              Ash and Greninja began training to perfect Greninja's new form.
              Ash and Greninja later had a rematch with Alain and a battle
              against Diantha, during the latter Greninja even managed to reach
              its final Ash-Greninja form. Despite their training, the two were
              unsuccessful in mastering the transformation as Ash passed out
              during both battles from exhaustion from using the form. After
              losing a rematch with Sawyer, in which Greninja even failed to
              transform, Ash began feeling doubtful of his ability to master the
              transformation. His confidence was shaken further after brutally
              losing to the Snowbelle Gym Leader Wulfric in a battle where all
              three of his Pokémon were unable to bring down Wulfric's second
              Pokémon, Avalugg. After seeing how badly Greninja got hurt during
              their battle and blaming himself for the loss, a depressed Ash
              left into the Winding Woods by himself. After an argument with
              Serena, Ash was able to get back to his old self. He later met up
              with Greninja, and while trying to save a wild Spewpa, the two
              were able to perfect Bond Phenomenon. With Greninja's Ash-Greninja
              form perfected, Ash was able to defeat Wulfric in a rematch,
              earning him his final Kalos Gym Badge and qualifying him for
              participation in the Lumiose Conference.
            </p>
          </div>

          <div className="image-right d-flex gap-5 align-items-center">
            <p className="lead">
              During the closing ceremony of the conference, Team Flare began
              their final operation, using the power of the blue Zygarde Core Z2
              to cause massive roots to destroy parts of Lumiose City. Ash and
              his Pokémon were ultimately abducted by Team Flare and were taken
              captive at the top of Prism Tower, as Lysandre intended to use Ash
              and Greninja's Bond Phenomenon for his plans by using Team Flare's
              Mega Evolution energy ray to control them. However, upon hearing
              Pikachu's voice, Ash resisted the machine's influence, even
              getting Greninja to do the same thing. After talking some sense
              into Alain, Ash and Greninja broke free from their bindings by
              using the Bond Phenomenon. Ash and Alain soon engaged in a battle
              against Lysandre and ultimately managed to defeat him. When Ash
              later heard about the Giant Rock, he met up with the rest to
              combat it. Thanks to everyone's combined effort, Chespie was saved
              from the Giant Rock. Squishy and Z2 ultimately destroyed the
              creature, before the two Zygarde left. Following the crisis, Ash
              helped Alain and Serena resolve their issues and bid farewell to
              his rivals. Later, after dropping Goodra off at the wetlands
              again, the group came across Xerosic, one of Team Flare's
              Scientists. Ash, his Greninja, his friends and the gang were
              ultimately able to foil Xerosic's plans and hand him over to
              Officer Jenny. The group soon reunited with Squishy and Z2, who
              requested Greninja's help to obliterate the remaining negative
              energy left by Team Flare's crisis. Knowing this was for the sake
              of Kalos, Ash bade farewell to Greninja before Greninja left with
              the two Zygarde. After releasing Greninja, Ash and the gang headed
              back to Lumiose City to say their final goodbyes. After bidding
              farewell to Serena, who headed for Hoenn, Ash separated from
              Clemont and Bonnie as well and returned to Pallet Town. After
              returning to Lumiose City, Ash entered the Lumiose Conference.
              Following several notable victories, Ash had Goodra rejoin his
              team for his semi-final battle against Sawyer. After a narrow
              victory, Ash managed to defeat Sawyer and reach the finals of the
              Conference, marking his first appearance in the finals of a
              Pokémon League; where he would face Alain. On the night before the
              final battle, he and his friends learned more about the
              Ash-Greninja transformation. In the finals of the Lumiose
              Conference, Ash and Alain started a back-and-forth battle that
              eventually came down to Alain's Mega Charizard X against Ash's
              Greninja in its Ash-Greninja form. After a fierce battle, Greninja
              was defeated, causing Ash to end up as the Runner-Up of the
              Lumiose Conference. Ash showed great sincerity and principle
              following the battle, shaking Alain's hand regardless of the
              result.
            </p>
            <img loading="lazy" src="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031364/about/ash16_sziick.png" alt="" />
          </div>
        </div>
      </div>
      
      <div className="pokemon-the-series-sun-and-moon upper-section">
        <h1 className="text-start">Pokemon the Series: Sun & Moon</h1>
        <div className="d-flex flex-column justify-content-between align-items-center">
          <div className="image-left d-flex gap-5 align-items-center">
            <img loading="lazy" src="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031364/about/ash17_hlifsb.png" alt="" />
            <p className="lead">
              Ash traveled with Delia to the Alola region after Mimey won the
              trip via lottery. It was shown that Ash gave his Kalos Pokémon to
              Professor Oak, who gave him and his mother a Pokémon Egg to
              deliver to his cousin Samson. While on Melemele Island, Ash
              stumbled upon the Pokémon School, where he met Lana, Lillie,
              Mallow, Kiawe, Sophocles, Samson, and Professor Kukui and learned
              about Z-Rings and Z-Moves. Later on, he met Tapu Koko, the
              guardian of Melemele Island, who gave Ash a Z-Ring and an
              Electrium Z. With these discoveries, Ash decided to remain in
              Alola to study at the school and learn more about Z-Moves, living
              with Professor Kukui. Later, Tapu Koko challenged Ash and Pikachu
              to a battle. Ash's Electrium Z broke after Ash and Pikachu used
              the Z-Move Gigavolt Havoc on Tapu Koko. Ash then decided to take
              on the island challenge to obtain new Z-Crystals and prove his
              worth. Ash caught several Pokémon on Melemele Island, such as his
              Rowlet, Rockruff, and Litten. Ash also got a Normalium Z after his
              fight with Totem Gumshoos on Melemele Island. Tapu Koko gave him a
              new Electrium Z after Ash won his grand trial battle with Melemele
              Island kahuna Hala. Also, Ash struck up a friendly rivalry with
              Lillie's brother Gladion. He then gained a Grassium Z and Rockium
              Z during his trial and grand trial on Akala Island. He also
              briefly reunited with Brock, Misty, and some of his Pokémon during
              a field trip to Kanto for an extracurricular activity.
            </p>
          </div>

          <div className="image-right d-flex gap-5 align-items-center">
            <p className="lead">
              One day, Ash was entrusted to take care of a Cosmog by Solgaleo
              and Lunala, which he saw in a dream. The Cosmog, nicknamed Nebby
              by Lillie, took a liking to Ash and frequently caused trouble with
              its ability to teleport people around. In Faba's Revenge!, Faba
              kidnapped Nebby while Ash's attention was elsewhere. When Ash and
              Lillie learned about this, they enlisted Gladion and Lusamine in
              helping them rescue it. When the four found Faba, they also found
              that he successfully forced Nebby to summon a Nihilego from an
              Ultra Wormhole. After Nihilego kidnapped Lusamine and retreated
              into the Ultra Wormhole, Ash discovered that the incident caused
              Nebby to evolve into a Cosmoem. Ash, his classmates, and Gladion
              then watched as the guardian deities helped Nebby evolve into the
              Legendary Pokémon Solgaleo and upgrade Ash's Z-Ring into a Z-Power
              Ring. With a Solganium Z he received from Nebby, Ash activated
              Solgaleo's Z-Move, Searing Sunraze Smash, and had Nebby open up an
              Ultra Wormhole, allowing everyone to traverse through Ultra Space
              on Nebby's back. There, after Ash's Electrium Z temporarily
              transformed into a Pikashunium Z, Ash and Pikachu used it to
              launch a 10,000,000 Volt Thunderbolt. The attack defeated
              Nihilego, weakening it long enough for Lillie and Gladion to pull
              their mother free from its hold. The Pikashunium Z then reverted
              to an Electrium Z. With their mission finished, Lusamine was taken
              back through the Ultra Wormhole to the Altar of the Sunne. During
              Kukui and Burnet's wedding reception in the aftermath of the
              incident, Ash and his friends were invited to join an Ultra Beast
              response task force, known as the Ultra Guardians, which they all
              agreed to. On their first mission, Ash and his classmates were
              assigned to capture a Buzzwole that had appeared through an Ultra
              Wormhole. The Ultra Guardians encountered it at Mahalo Trail,
              where Ash eventually realized it preferred flexing to battling. As
              a result, Ash and Kiawe distracted it long enough for the former
              to throw a Beast Ball at it, successfully capturing it.
            </p>
            <img loading="lazy" src="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031364/about/ash18_gieola.png" alt="" />
          </div>

          <div className="image-left d-flex gap-5 align-items-center">
            <img loading="lazy" src="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031364/about/ash19_kll7zw.png" alt="" />
            <p className="lead">
              Later, Buzzwole was brought to Melemele Meadow, where Professor
              Burnet temporarily opened a new wormhole, allowing Buzzwole to
              return home. Later, Ash encountered a Poipole who seemed strangely
              attached to Pikachu. After a while, Poipole was confirmed to be an
              Ultra Beast. Ash was permitted to capture it, though he failed
              several times as Poipole thought the catching process was a game.
              After Ash helped it understand what was happening, Poipole allowed
              itself to be captured and was allowed to stay with the group until
              they could find its Ultra Wormhole and send it back. Ash attempted
              to participate in the Ula'ula Island challenge, but he was
              rejected by Nanu and lost in an impromptu "pre-trial". Afterward,
              Ash decided to stay on the island and train under Tapu Bulu. This
              allowed him to formally participate in his island challenge, which
              turned out to be a battle against Jessie's Mimikyu, who recently
              gained a Mimikium Z. Ash barely won thanks to Pikachu learning
              Electroweb, as well as being able to once again use 10,000,000
              Volt Thunderbolt. Finally, Ash participated in the grand trial,
              where he faced off against Nanu in a 3-on-1 battle in Nanu's favor
              and won, earning himself a Lycanium Z. Ash led the Ultra
              Guardians' investigation into mysterious dark clouds that appeared
              over the Alola region, causing all of the adults in Alola to lose
              their energy and motivation. The cause was revealed to be a
              Necrozma pursuing a Lunala, which resulted in a massive battle
              against Necrozma. During this time, Nebby joined the fight;
              Necrozma possessed Lunala and then Nebby to become Dawn Wings and
              Dusk Mane Necrozma, respectively; and the Ultra Guardians pursued
              Necrozma into Poipole's world. There, they learned about how
              Necrozma needed to regain its true form to release Nebby. After
              Ash and Gladion acquired Z-Crystals for Nebby and Lunala, the
              Ultra Guardians, with the help of their Pokémon, Lunala, Poipole's
              friends, and everyone else in Alola, shared their Z-Power with
              Necrozma, causing it to release Nebby. Afterward, Ash and Nebby
              used Searing Sunraze Smash, while Gladion and Lunala used Menacing
              Moonraze Maelstrom on Necrozma. The combined Z-Moves fully
              restored Necrozma's light, giving it the strength to become its
              true form, Ultra Necrozma. Afterward, the Ultra Guardians, Nebby,
              and Lunala traveled back to Alola through the Ultra Wormhole,
              while Ash said farewell to Poipole, who chose to stay behind in
              its world.
            </p>
          </div>

          <div className="image-right d-flex gap-5 align-items-center">
            <p className="lead">
              Later, Ash and his classmates arrived on Poni Island for their
              research projects for school. Ash's project was to have a grand
              trial battle. In A Grand Debut!, Ash battled the newly appointed
              island kahuna Hapu in a one-on-one battle and won. Letting Pikachu
              choose their reward for the completion, Ash received a Steelium Z.
              Following this victory, Ash entered the first-ever Manalo
              Conference, along with his classmates. He eventually made it to
              the semifinals, where he faced off against the Team Skull Boss
              Guzma. After a tough match, Ash was able to defeat him and advance
              to the finals, where he was set to face Gladion. On the night
              before the final battle, Ash's Meltan fused with its fellow
              Meltan, evolving into Melmetal, which Ash ended up using as his
              first Pokémon in the finals. The match eventually resulted in a
              battle between the two Trainers' Lycanroc, with Ash's Lycanroc
              eventually emerging victorious, thus earning Ash the title of
              Alola League Champion. After winning the Alola League
              championship, Ash was given the right to have an exhibition match
              against the Masked Royal. However, during a Guzzlord invasion of
              the Manalo Stadium, the Masked Royal's true identity as Professor
              Kukui was exposed. With his cover blown, Kukui decided to battle
              Ash as himself and make the exhibition match a Full Battle, which
              Ash agreed to. During the battle, Ash's Torracat was finally able
              to defeat its longtime rival, Professor Kukui's Incineroar, and
              evolve into an Incineroar itself. Before Kukui could send out his
              last Pokémon, Tapu Koko appeared and took its place in the battle.
              When Ash was down to his last Pokémon, Pikachu, Tapu Koko gave
              Kukui a Tapunium Z, while Ash's Electrium Z once again transformed
              into a Pikashunium Z, allowing both Pokémon to unleash their
              signature Z-Moves. In the end, Ash's Pikachu's Z-Move proved
              superior and defeated Tapu Koko, ending the exhibition match with
              Ash's victory. After the Manalo Conference had ended, Ash was left
              unsure of what to do next. However, after hearing Olivia mention
              how important knowing the "outside world" is, he decided to return
              home and start traveling around the world. After saying farewell
              to his classmates, Kukui, and Burnet, he boarded a plane back to
              Kanto, leaving all of his current party Pokémon (excluding
              Pikachu) under the two Professors' care.
            </p>
            <img loading="lazy" src="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031363/about/ash20_refluf.png" alt="" />
          </div>
        </div>
      </div>
      
      <div className="pokemon-journeys-the-series lower-section">
        <h1 className="text-start">Pokemon Journeys: The Series</h1>
        <div className="d-flex flex-column justify-content-between align-items-center">
          <div className="image-left d-flex gap-5 align-items-center">
            <img loading="lazy" src="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031363/about/ash21_mqkfwu.png" alt="" />
            <p className="lead">
              Sometime after his return to Kanto, Ash joined Professor Oak in
              attending the opening of the new Cerise Laboratory in Vermilion
              City. During the opening ceremony, the head of the lab, Professor
              Cerise, informed the attendees that a rare Pokémon would be
              appearing at the local port shortly. Ash eagerly rushed over there
              and found out the rare Pokémon was a Lugia. During this encounter,
              he also met a boy named Goh, and the two shared a ride with Lugia
              throughout Kanto. When they later returned to the Cerise
              Laboratory, Professor Cerise was amazed by the information they
              had gathered about Lugia, and he asked them to become his research
              assistants. They accepted the offer and were provided with their
              room to stay in. Delia also left Mimey at the lab to take care of
              Ash while he stayed there. Later, Ash and Goh traveled to the
              Galar region to watch the finals of the World Coronation Series.
              The match ended in the victory of Galar's undefeated Champion
              Leon, thus making him the Monarch, the official strongest Trainer
              in the world. Inspired by this, Ash decided he wanted to battle
              Leon himself. However, before he could challenge him, a Gigantamax
              Drednaw went on a rampage and started causing havoc. While Ash and
              Goh battled it, Pikachu ended up Gigantamaxing as well, therefore
              giving him enough power to defeat Drednaw. Leon, impressed by
              Ash's performance, accepted his challenge to a battle. Ash also
              received a Dynamax Band from Leon. After Ash lost, he decided to
              take part in the World Coronation Series as well and climb through
              its ranks to one day challenge Leon again.
            </p>
          </div>

          <div className="image-right d-flex gap-5 align-items-center">
            <p className="lead">
              Upon entering the World Coronation Series, Ash immediately started
              building up a winning streak, soon even reaching the Great Class
              after defeating Korrina. Ash's winning streak came to an end,
              however, when he encountered Bea, a Fighting-type Gym Leader from
              Galar, who was also aiming to defeat Leon. In their two-on-two
              match at the Fighting Dojo, Ash failed to defeat a single one of
              Bea's Pokémon, with her powerful Grapploct with its many limbs and
              Octolock proving especially troublesome. This crushing defeat
              caused Ash to start losing his self-confidence and led to him
              entering a losing streak, even resulting in him falling back into
              the Normal Class. This caused him to get depressed, until he was
              snapped back into his senses by a motivational speech from Goh.
              Thanks to this, he quickly fought his way back into the Great
              Class and challenged Bea to a rematch at the Cianwood Gym,
              managing to tie with her this time. One night, Ash's Dynamax Band
              began to glow. After learning about cases of Pokémon Dynamaxing in
              Galar outside of Power Spots, Ash and Goh headed there to
              investigate. Soon after arriving in the region, Ash and Goh ended
              up getting separated while in the Slumbering Weald, where Ash
              encountered Zacian, whereas Goh encountered Zamazenta. Later, Ash
              encountered Leon and joined him in taking care of the Dynamax
              Pokémon rampaging around Galar. During this quest, they ended up
              encountering Chairman Rose and Oleana, and Ash accompanied them to
              dine and spend a night at Rose Tower. When he departed the next
              day to rendezvous with Goh, Eternatus emerged from the Hammerlocke
              Energy Plant, starting the Darkest Day and prompting Ash to head
              there. At the Hammerlocke Stadium, Ash re-encountered Rose and
              engaged him in a battle, eventually winning thanks to his newly
              evolved Lucario. Reuniting with Goh, the two then engaged in a
              battle against Eternatus, after Leon had failed to stop it. With
              Zacian and Zamazenta's help, they successfully defeated Eternatus
              and sealed it away, ending the Darkest Day.
            </p>
            <img loading="lazy" src="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031363/about/ash22_irgk5t.png" alt="" />
          </div>

          <div className="image-left d-flex gap-5 align-items-center">
            <img loading="lazy" src="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031364/about/ash23_zrsgpy.png" alt="" />
            <p className="lead">
              Following his second battle with Bea, Ash entered another winning
              streak, steadily increasing his ranking. One day, he received a
              letter from Iris, challenging him to a World Coronation Series
              battle. He happily accepted her invitation, but was later
              surprised to find out that Iris had succeeded Alder as the new
              Champion of Unova. After an intense battle, Ash defeated his
              former traveling companion and rose to the Ultra Class as a
              result. In his first Ultra Class battle, Ash was pitted against
              Volkner and succeeded in defeating him. Following the match,
              Volkner informed Ash that Cynthia was taking part in the World
              Coronation Series as well, and had managed to climb her way into
              the Master Class. Knowing that he was going to be facing very
              strong opponents in the Ultra and Master Classes, Ash sought
              Korrina's help to Mega Evolve his Lucario. After receiving a Mega
              Glove from Korrina, Ash traveled to Mega Island and managed to
              obtain himself a Lucarionite, just in time to receive a message
              informing him that Bea was to be his next Ultra Class opponent. As
              such, Ash then traveled to Stow-on-Side to settle his score with
              Bea once and for all on her home turf. Using his newly acquired
              Mega Lucario, Ash was able to defeat Bea's Gigantamax Machamp,
              finally earning him a victory against his rival. After defeating
              Bea, Ash sought Allister's help in Gigantamaxing his Gengar.
              Thanks to the Max Soup made by him, Gengar was able to unlock its
              Gigantamax potential, which proved useful in Ash's World
              Coronation Series battle against Marnie.
            </p>
          </div>

          <div className="image-right d-flex gap-5 align-items-center">
            <p className="lead">
              His victories kept bringing Ash more and more fame as the rising
              star of Kanto, causing the news of his next Ultra Class battle,
              this one against Drasna of the Kalos Elite Four, to gain
              widespread media attention. Following a reunion and a training
              session with Clemont and Bonnie, Ash took on Drasna and defeated
              her, putting him at the very top of the Ultra Class. As such, his
              next match was to be an entrance battle against Raihan, the
              lowest-ranked Trainer in the Master Class. After briefly reuniting
              with Greninja in Kalos and having his Lucario train its Aura with
              it, Ash felt ready for the match. Raihan, Leon's long-time rival,
              gave Ash a very tough challenge, even forcing him to use Gengar's
              Gigantamax instead of Lucario's Mega Evolution to bypass his
              weather strategy. Eventually, however, Ash managed to win,
              officially putting him in the Master Class along with the other
              reigning regional Champions and Alain. During a visit to the Crown
              Tundra, Ash reunited with Lillie and her family just as they
              succeeded in finding Lillie's missing father, Mohn. He then
              proceeded to accompany them back to Alola, where he reunited with
              his Alolan family and friends. Ash also participated in a special
              Battle Royal that was organized to celebrate the homecoming of the
              Alola Champion. During the Battle Royal, the entire Alola region
              showed their support for Ash and encouraged him to win the Masters
              Eight Tournament as Alola's representative. After some hard
              training with his Pokémon kept at Professor Oak's lab and Paul,
              Ash traveled to Galar once more to participate in the Masters
              Eight Tournament, along with the rest of the Masters Eight,
              reuniting with Iris, Alain, and the other regional Champions. His
              first opponent was chosen to be Steven. After watching the other
              quarterfinal battles, Ash and Steven began their battle. Although
              he had a tough time against the Hoenn Champion, Ash was eventually
              able to defeat him with the help of 10,000,000 Volt Thunderbolt,
              advancing him to the semifinals to face Cynthia. After witnessing
              Leon rather easily defeat Diantha, Ash took on Cynthia. Although
              Cynthia gained an early lead, Ash gradually evened the odds, until
              his Mega Lucario finally took home the victory, meaning that Ash
              and Leon's long-awaited battle was to finally happen.
            </p>
            <img loading="lazy" src="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031364/about/ash24_ohdw2r.png" alt="" />
          </div>

          <div className="image-left d-flex gap-5 align-items-center">
            <img loading="lazy" src="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031365/about/ash25_a2oab8.png" alt="" />
            <p className="lead">
              At the start of the finals, Leon surprised everyone by allowing
              Ash to use all three of Mega Evolution, Dynamax, and Z-Moves
              during the battle, which Ash accepted. During the climax of the
              battle, Eternatus appeared above Wyndon Stadium and granted both
              Trainers an additional use of Dynamax. The climactic showdown
              ended with a clash between Ash's Pikachu and Leon's Charizard.
              Ultimately, Ash's partner emerged victorious against the
              undefeated Charizard, fulfilling Ash's dream of defeating Leon and
              making him the new Monarch. Following the Masters Eight
              Tournament, Ash announced his intentions to set off on a new
              journey alone to continue learning more about Pokémon and achieve
              his goal of becoming a Pokémon Master. After departing from the
              Cerise Laboratory, Ash parted ways with Goh, who wished to go his
              way to achieve his dream. Shortly after parting ways with Goh, Ash
              met an injured wild Latias. He helped to treat her injuries and
              protected her from being stolen by Team Rocket. As a result, she
              started to secretly follow him. Soon after, Ash reunited with
              Misty and Brock, who joined him in his travels once more as they
              continued to help out Pokémon in need and reunite with Ash's other
              old friends like Cilan, the Squirtle Squad, and his Lapras. Latias
              eventually reappeared before Ash and requested his help in saving
              a Latios from a Pokémon hunter. Once the hunter had been stopped,
              Latias left with Latios, who stubbornly didn't trust humans yet.
              He decided to return to Pallet Town following this, with Brock and
              Misty also deciding to return to their respective hometowns,
              although not before expressing a desire to travel again in the
              future. After returning home, Ash reunited with Tracey and his
              Pidgeot, the latter of whom returned to his party. During an
              encounter with Gary, he was asked how close he was to becoming a
              Pokémon Master now that he had become the Monarch. After spending
              a while pondering the answer, Ash deduced that to him, a Pokémon
              Master is a person who can befriend any Pokémon. Since he had
              failed to befriend Latios despite helping him, he figured he still
              had to work more to achieve his dream. As such, he resolved to
              resume traveling and left Pallet Town with Pikachu once more.
            </p>
          </div>
        </div>
      </div>

      {showButton && (
        <div onClick={scrollToTop} className="scroll-to-top text-white z-index-1000 d-flex flex-column">
          <FontAwesomeIcon icon={faChevronUp} />
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      )}
    </div>
  );
};

export default About;

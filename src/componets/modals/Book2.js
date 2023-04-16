import React, {useState, useEffect} from "react";
import "./Book2.scss"
import { useSelector } from "react-redux";

const Book2 = () => {

    const card = useSelector(state => state.currCard)

    // add eventListener to book
    useEffect(() => {
        const pageAfter = document.querySelector('.book');
        console.log(pageAfter,'book')
        if (pageAfter) {
        pageAfter.addEventListener('click', handleClick);
        }
        return () => {
        if (pageAfter) {
            pageAfter.removeEventListener('click', handleClick);
        }
        }
    }, []);

    const handleClick = (e) => {
        console.log(e.target.id, 'eeee')
        const id = e.target.id
        if (id.includes('page')) {
            const ele = document.getElementById(id)
            if (ele.className.includes("flipped")){
                ele.className = 'page'
            } else {
                ele.className = 'page flipped'
            }
            console.log(ele)
         reorder()
        }
        reorder()
    };

    useEffect(() => {
        reorder();
    });

    function reorder() {
        const book = document.querySelector(".book");
        const pages = book.querySelectorAll(".page");
        const pagesFlipped = book.querySelectorAll(".flipped");

        pages.forEach((page, i) => {
            page.style.zIndex = pages.length - i;
        });

        pagesFlipped.forEach((page, i) => {
            page.style.zIndex = i + 1;
        });
    }

    
    return (  
        <>   
        <div className="cover">
        <div className='book'>  
            <img src={process.env.PUBLIC_URL + card.image} alt=""/>
            <div id='page-1' className='page no-anim'>    
                <div className='side-1' id='p1'>
                    <div className='content'>
                        <h1>{card.name}</h1>
                        <p>
                        The pilgrim must visit each of the Shrines of the Seven Graces. At each site the pilgrim must stand before the three-sided stone triolith and read the inscription. To ease the pilgrim's task, the Temple has made this list of shrines along with directions and advice to pilgrims. The blessings of each shrine last at least a half day.
                        </p>
                    </div>
                </div>
                {/* <!-- .side-1 -->     */}
                <div className='side-2' id='p2'>      
                    <div className='content'>
                        {/* <label>
                        <input type="checkbox" name="myCheckbox" value="1"/>
                        Option 1
                        </label> */}

                        <h2>The Fields of Kummu: Shrine of Humility</h2>
                        <p>
                        Here Lord Vivec met a poor farmer whose guar had died. The farmer could not harvest his muck without his guar, and he could not provide for his family or his village. So the Lord Vivec removed his fine clothes and toiled in the fields like a beast of burden until the crop was harvested. It is at the Fields of Kummu we go to pray for the same humility Lord Vivec showed on that day.
                        </p>
                        <p>
                The Fields of Kummu are west of Suran on the north shore of Lake Amaya as you head towards Pelagiad. The shrine is between two rocks, and most easily noticed while traveling east along the road. Alof's farm nearby has a small dock on the north bank of Lake Amaya. This is the only dock nearby which Alof kindly allows servants of the Temple to use. It is customary to leave a portion of muck at the shrine to represent Vivec's humility.
                        </p>
                    </div>
                {/* <!-- .content --> */}
                </div>
                {/* <!-- .side-2 --> */}
            </div>
            {/* <!-- .page --> */}
            
            <div id='page-2' className='page no-anim'>    
                <div className='side-1' id='p3'>
                <div className='content'>
                    <h2>To Stop the Moon: The Shrine of Daring</h2>
                    <p>
            When Sheogorath rebelled against the Tribunal, he tricked the moon Baar Dau into forsaking its appointed path through Oblivion. The Mad Star inspired the moon to hurl itself upon Vivec's new city, which Sheogorath claimed was built in mockery of the heavens. When Vivec learned of Sheogorath's scheme, he froze the rogue moon in the sky with a single gesture and the grace of his countenance. Overwhelmed by the courage and daring of Vivec, the moon Baar Dau swore itself to eternal service of the Tribunal and all its works. Thus the moon now stands guard over the palace, and serves as a citadel for the Temple's Ordinators.
                    </p>
                    <p>
            The Shrine of Daring is found in the city of Vivec, in the Temple District, along the western wall of the High Fane, the great Temple of Vvardenfell. When you address the shrine, it is customary to leave behind a Potion of Rising Force. Suitable potions may be purchased from the Temple. Homemade potions are not acceptable.
                    </p>
                </div>
                {/* <!-- .content --> */}
                </div>
                {/* <!-- .side-1 -->     */}
                <div className='side-2' id='p4'>      
                <div className='content'>
                    <h2>The Palace: Shrine of Generosity</h2>
                    <p>
                    Long after Lord Nerevar and the Tribunal triumphed over Dagoth Ur, the people wished to build a monument to the heroes of that war. Vivec thanked them, but said that it would be better to dedicate a monument not only to the glorious heroes, but to all people, great and small, who suffered and died in the war. It became the custom to make offerings here, either in thanks of our good fortune, or for those less fortunate.
                    </p>
                    <p>
            The Shrine of Generosity is on the top steps of Vivec's Palace, the southernmost Canton of Vivec City. The customary donation for those in good fortune is 100 gold.
                    </p>
                </div>
                {/* <!-- .content --> */}
                </div>
                {/* <!-- .side-2 --> */}
            </div>
            {/* <!-- #page-2 --> */}
            
            <div id='page-3' className='page no-anim'>    
                <div className='side-1' id='p5'>
                <div className='content'>
                    <h2>The Puzzle Canal: The Shrine of Courtesy</h2>
                    <p>
                    In a battle with Mehrunes Dagon, Vivec gave his own silver longsword to the Daedra Lord rather than dishonor himself by fighting an unarmed foe. This so impressed the Dremora, the most honorable and chivalrous of Mehrunes Dagon's Daedric servants, that they now share a bond of respect and courtesy with the followers of the Tribunal, though we must never forget that they are our enemies.
                    </p>
                    <p>
                    The Shrine of Courtesy is found in the heart of the Puzzle Canal, a labyrinth beneath Lord Vivec's Palace in the city of Vivec. The journey though the Puzzle Canal can be confusing and it is suggested that common pilgrims carry a scroll of ALMSIVI Intervention in case they get lost. The Dremora Krazzt is found in the center of the Puzzle Canal, and will accept a plain silver longsword if spoken to with courtesy. After Krazzt accepts the sword, pilgrims must read the inscription on the triolith.
                    </p>
                </div>
                {/* <!-- .content --> */}
                </div>
                {/* <!-- .side-1 -->     */}
                <div className='side-2' id='p6'>      
                <div className='content'>
                    <h2>The Mask of Vivec: Shrine of Justice</h2> 
                    <p>
                    Near the altar is Vivec's Ash Mask. In the Days of Fire when Dagoth Ur first crept back into Red Mountain and awakened it, Vivec led refugees here as they fled the ash and blight. Weary, they rested here a while. When Vivec awoke, he found himself and all his followers encased in casts of grey ash. Frozen like a sleeping statue and unable to free himself or help his people, Vivec was filled with despair. Vivec's tears weakened his ash cast. He tore the ash from his perished followers, breathed life into their lungs, and cured them of the blight. This is Vivec's heroism -- his tender heart provides strength when his might fails.
                    </p>
                    <p>
            The Shrine of Justice is guarded within the Gnisis Temple, in the village of Gnisis, northwest by road from the town of Ald'ruhn. When you address the shrine, it is customary to leave a potion of Cure Common Disease as a token of your respect for justice. Suitable potions may be purchased from Temple. Homemade potions are not acceptable.
                    </p>
                </div>
                {/* <!-- .content --> */}
                </div>
                {/* <!-- .side-2 --> */}
            </div>
            
            
            <div id='page-4' className='page no-anim'>    
                <div className='side-1' id='p7'>
                <div className='content'>
                    <h2>Koal Cave: The Shrine of Valor</h2>
                    <p>
                    Within the Koal Cave, Vivec fought a battle with Ruddy Man, the father of the Dreugh. When he defeated Ruddy Man, Vivec spared his life, on the condition that Ruddy Man and his children would give up their tough hides to serve as armor for the Dunmer.
                    </p>
                    <p>
                    The Shrine of Valor is inside the Koal Cave, a cavern on the seacoast west of the ancient stronghold Berandas and south of Gnisis. The cave mouth faces south, towards the sea, and is marked by a large natural arch of stone. The region is wilderness, and finding the cave mouth can be difficult. Dreugh within the cave itself are fearsome enemies; only experienced and capable adventurers should attempt to re-enact the epic battle with the dreugh in the cave. Dreugh wax may be bought at the Temple in Gnisis. When you address the shrine, it is customary to leave a portion of dreugh wax as a token of Vivec's victorious struggle with Ruddy Man.
                    </p>
                </div>
                {/* <!-- .content --> */}
                </div>
                {/* <!-- .side-1 -->     */}
                <div className='side-2' id='p8'>      
                <div className='content'>
                    <h2>The Ghostfence: The Shrine of Pride</h2>
                    <p>
                    The Ghostfence is a lasting symbol of the indomitable will and power of ALMSIVI, and a monument to Dunmer pride in overcoming its enemies.
                    </p>
                    <p>
            The Shrine of Pride is found within the Ghostfence, just northeast of the Ghostgate itself. The safest route to Ghostgate is along the Foyada Mamaea, a volcanic ravine running from the top of Red Mountain southwest to its end just below Balmora. An old Dwemer bridge crosses the foyada near Fort Moonmoth. A pilgrim may follow the Foyada Mamaea all the way to Ghostgate. Any journey inside the Ghostfence is dangerous, but even the most timid pilgrim should be safe, so long as he does not stray too far from the Ghostgate and flees from any minions of Dagoth Ur. When you address the shrine, it is customary to leave a soul gem in remembrance of our ancestors who were bound to the Tribunal's service.
                    </p>
                </div>
                {/* <!-- .content --> */}
                </div>
                {/* <!-- .side-2 --> */}
            </div>
            {/* <!-- #page-4 --> */}
            </div>
        </div>
        </>  
    )

}

export default Book2
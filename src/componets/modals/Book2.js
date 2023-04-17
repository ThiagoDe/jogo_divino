import React, {useState, useEffect} from "react";
import "./Book2.scss"
import { useSelector } from "react-redux";

const Book2 = () => {

    const card = useSelector(state => state.currCard)

    // add eventListener to book
    useEffect(() => {
        const pageAfter = document.querySelector('.book');
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
        const id = e.target.id
        if (id.includes('page')) {
            const ele = document.getElementById(id)
            if (ele.className.includes("flipped")){
                ele.className = 'page'
            } else {
                ele.className = 'page flipped'
            }
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
            <img src={process.env.PUBLIC_URL + card.image} alt="" style={{zIndex: '0'}}/>
            <div id='page-1' className='page no-anim'>    
                <div className='side-1' id='p1'>
                    <div className='content'>
                        <h1>{card.name}</h1>
                        <h2>O Poder - A Fé - A Paixão</h2>
                        <br/>
                        <p>
                        A carta do arquétipo do Amante posiciona-se no relógio do Jogo Divino na casa das 2 horas, é o número da polaridade, da dualidade, da empatia, da conciliação, do comple- mento e do equilíbrio entre forças opostas.
                        Aqui começa a missão. É o Amante que encarna a Criação, o sonho Divino. É ele quem assume o propósito contido na ilusão da forma, e seu desafio será revelar este sonho, através dos inúmeros véus da matéria.
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

                        <h2>Simbologia da Carta</h2>
                        <br/>
                        <div>
                            <img src={process.env.PUBLIC_URL + card.image} alt="" style={{zIndex: '0',
                                width: '9em', 
                                float: 'left',
                                margin: '15px', 
                                marginBottom: '5px', 
                                borderRadius: '30px', 
                                marginRight: '1.2em ',      
                            }}/>
                        </div>
                        <p style={{
                            textAlign: 'justify',
                            textIndent: '0em',
                        }}>
                        A carta O Amante trás elementos que remetem a nossa busca pelo intangível. Nas mãos dois corações de fogo, a vontade Divina manifestada na dualidade. A bola de cristal reflete o ponto de vista interior do Amante sobre o destino que deseja encontrar. O cavalo branco alado, representa a fé, a confiança em si mesmo, o poder. O portal em formato de coração representa as medicinas, a reciprocidade da Terra, que sonha o mesmo sonho do Amante, a cura, a evolução e o reconhecimento do sagrado.
                        </p>
                        <p>
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
                    <h2>Leitura relativa da carta</h2>
                    <br/>
                    <p>
                           <strong>Sentido Horário: </strong> Este é o momento de reconhecer e assumir a chama interior que o convida a formar vínculos e compromissos com aquilo que você ama. Uma das formas de expressão dessa energia é Eros. Conhecemos Eros quando experimentamos uma ligação passional com uma pessoa, um projeto ou uma paisagem. Eros nos traz a excitação para vivermos uma vida com entusiasmo. Sem o prazer o jogo da vida não se sustenta.
                O Amante encarna a jornada rumo ao sonho, ou aquilo que lhe faz feliz, e se compromete com isso.
                É um convite a abertura irrestrita do coração e da plena autoaceitação.</p>
                    
                </div>
                {/* <!-- .content --> */}
                </div>
                {/* <!-- .side-1 -->     */}
                <div className='side-2' id='p4'>      
                <div className='content'>
                    <h2>Leitura relativa da carta</h2>
                    <br/>
                    <p>
                        <strong>Sentido Anti-horário: </strong> 
                     A falta de clareza e profundidade sobre as estruturas do passado estão impedindo de baixar seus sonhos na realidade. Está faltando flexibilidade e humildade para reconhecer e renunciar os posicionamentos an- tigos e incoerentes que lhe dão a ilusão de estar conseguindo. É preciso deixar ir algumas coisas para que realmente chegue o que você quer. São as experiências anteriores que o estão impedindo de comprometer-se e de formar vínculos ou compromissos consigo próprio, com as relações, seu trabalho ou objetivo de vida. O amante nos traz a energia arquetípica do Mito de Eros, que em sua polaridade sombra, pode se expressar também como convulsividade, obsessão ou possessividade. Neste polo o Amante entende qualquer diferença ou dificuldade como uma ameaça, e baixa em sua realidade a intolerância, a revolta, a obsessão por vencer e combater. O orgulho, a soberba e a superficialidade com a ideia podem revelar uma tendência ao vitimismo e autoflagelação.</p>
                   
                </div>
                {/* <!-- .content --> */}
                </div>
                {/* <!-- .side-2 --> */}
            </div>
            {/* <!-- #page-2 --> */}
            
            <div id='page-3' className='page no-anim'>    
                <div className='side-1' id='p5'>
                <div className='content'>
                    <h2>Leitura integrativa da carta</h2>
                    <br/>
                    <p>
                    É da essência do Amante apaixonar-se pela missão e entusiasmar-se pela jornada do Guerreiro, do Herói. Sem a possibilidade do sonho, sem a perspectiva de um futuro diferente, ele não é seduzido a fazer o caminho que o leva ao “presente”. Ele viverá a “Paixão” e a “Guerra”, mas encarnará no final da jornada, a manifestação da vontade divina e o poder da fé. A palavra paixão significa ir além da razão, ou seja, não julgar, portanto, há um ditado popular que diz: “A paixão cega”, e esse é o ponto “crucial” da jornada do Amante. Se ele perder a conexão primordial com o sagrado, não enxergará que a jornada se tornou uma busca por falsos valores. Não vai perceber que existe um sonho dentro da missão e que esse sempre foi o propósito primordial.</p>
                   
                </div>
                {/* <!-- .content --> */}
                </div>
                {/* <!-- .side-1 -->     */}
                <div className='side-2' id='p6'>      
                <div className='content'>
                    <h2>Leitura integrativa da carta</h2>
                    <br/>
                    <p>
                    O amante recorre ao seu guerreiro interior, quando precisa de atributos como coragem, posicionamento, presença, disciplina e determinação para encontrar a rota que o leva para o centro do seu coração, ou seja, o lugar em que tem a escolha de reconhecer suas capacidades, assumi-las, e fazer crescer seu próprio valor através deste sonho. Lembre-se que todo o milagre precisa de mérito, e quem faz o caminho do mérito não depende de sorte. O mérito é uma estrutura que pode lhe dar a oportunidade de crescer em confiança e despertar a verdadeira fé.
                    O melhor aqui é poder reconhecer em todas as experiências anteriores quais foram as etapas não cumpridas, e desenvolver graças a esse reconhecimento, o que o impediu de colocar tempo e energia suficientes em favor de seu coração. Este é o momento preciso em que você se permite estar em uma plataforma de autoconfiança e disposição, para assim defender a aliança que firmou com seus sonhos e objetivos de vida, para além dos desafios internos e da ilusão da forma.</p>
                    
                </div>
                {/* <!-- .content --> */}
                </div>
                {/* <!-- .side-2 --> */}
            </div>
            
            
            <div id='page-4' className='page no-anim'>    
                <div className='side-1' id='p7'>
                <div className='content'>
                    {/* <h2>Koal Cave: The Shrine of Valor</h2>
                    <p>
                    Within the Koal Cave, Vivec fought a battle with Ruddy Man, the father of the Dreugh. When he defeated Ruddy Man, Vivec spared his life, on the condition that Ruddy Man and his children would give up their tough hides to serve as armor for the Dunmer.
                    </p>
                    <p>
                    The Shrine of Valor is inside the Koal Cave, a cavern on the seacoast west of the ancient stronghold Berandas and south of Gnisis. The cave mouth faces south, towards the sea, and is marked by a large natural arch of stone. The region is wilderness, and finding the cave mouth can be difficult. Dreugh within the cave itself are fearsome enemies; only experienced and capable adventurers should attempt to re-enact the epic battle with the dreugh in the cave. Dreugh wax may be bought at the Temple in Gnisis. When you address the shrine, it is customary to leave a portion of dreugh wax as a token of Vivec's victorious struggle with Ruddy Man.
                    </p> */}
                </div>
                {/* <!-- .content --> */}
                </div>
                {/* <!-- .side-1 -->     */}
                <div className='side-2' id='p8'>      
                <div className='content'>
                    {/* <h2>The Ghostfence: The Shrine of Pride</h2>
                    <p>
                    The Ghostfence is a lasting symbol of the indomitable will and power of ALMSIVI, and a monument to Dunmer pride in overcoming its enemies.
                    </p>
                    <p>
                    The Shrine of Pride is found within the Ghostfence, just northeast of the Ghostgate itself. The safest route to Ghostgate is along the Foyada Mamaea, a volcanic ravine running from the top of Red Mountain southwest to its end just below Balmora. An old Dwemer bridge crosses the foyada near Fort Moonmoth. A pilgrim may follow the Foyada Mamaea all the way to Ghostgate. Any journey inside the Ghostfence is dangerous, but even the most timid pilgrim should be safe, so long as he does not stray too far from the Ghostgate and flees from any minions of Dagoth Ur. When you address the shrine, it is customary to leave a soul gem in remembrance of our ancestors who were bound to the Tribunal's service.
                    </p> */}
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
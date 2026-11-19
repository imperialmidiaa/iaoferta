/* ============ CONFIGURE AQUI ============ */
const CONFIG = {
  marca: "Rota<span>IA</span>",            // nome da sua marca (pode usar <span> para colorir uma parte)
  marcaTexto: "RotaIA",                    // nome sem formatação, para o rodapé
  // Planos: aparecem na pergunta "Quanto você investiria" e a oferta usa o preço e o link do escolhido
  planos: [
    { preco: 27, link: "https://pay.cakto.com.br/3auh5je_1344498" },
    { preco: 47, link: "https://pay.cakto.com.br/wa9ivgw" },
    { preco: 64, link: "https://pay.cakto.com.br/3vfvzan" },
  ],
  precoDe: 197,                            // preço "de" riscado; o desconto da raspadinha é calculado a partir dele
  parcelas: "",                            // ex.: "ou 5x de R$ 10,46" (deixe vazio se não usar)
  garantia: "7 dias",
  // Assinatura com período de teste (deixe teste: null para pagamento único)
  teste: null,                             // ex.: { preco: "R$ 9,90", periodo: "7 dias", renovacao: "R$ 47 a cada 4 semanas" }
  cronometroMin: 0,                        // minutos do cronômetro da oferta; 0 desliga. Use só com prazo real.
  // Especialista: preencha para mostrar o bloco "Quem vai te guiar" na oferta
  especialista: null,                      // ex.: { nome: "Seu Nome", foto: "foto.jpg", bio: "Especialista em IA há 8 anos..." }
  // Depoimentos: use só depoimentos reais de alunos, com autorização.
  depoimentos: [
    // { nome: "Nome do aluno", cargo: "Profissão", texto: "O que ele disse de verdade." },
  ],
};
/* ======================================== */
const brl = n => "R$ " + n;
// Plano escolhido na pergunta da âncora; sem resposta, usa o do meio
const plano = () => CONFIG.planos.find(p => brl(p.preco) === A.ancora) || CONFIG.planos[1];
const desconto = () => Math.round((1 - plano().preco / CONFIG.precoDe) * 100) + "% OFF";

const I = {
  male:'<circle cx="10" cy="14" r="5"/><path d="M14 10l6-6M15 4h5v5"/>',
  female:'<circle cx="12" cy="9" r="5"/><path d="M12 14v7M9 18h6"/>',
  coins:'<circle cx="8" cy="8" r="6"/><path d="M18.1 10.4a6 6 0 1 1-7.7 7.7M7 6h1v4M16.7 13.9l.7.7-2.8 2.8"/>',
  trend:'<path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/>',
  trenddown:'<path d="M3 7l6 6 4-4 8 8"/><path d="M14 17h7v-7"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  leaf:'<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.4 5.1-6"/>',
  rocket:'<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1z"/><path d="M12 15l-3-3a22 22 0 0 1 2-4A13 13 0 0 1 22 2c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2z"/><path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5"/>',
  building:'<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
  laptop:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/>',
  store:'<path d="M3 9l1.5-5h15L21 9M3 9v11h18V9M3 9h18M9 20v-6h6v6"/>',
  cap:'<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  shuffle:'<path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>',
  book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15zM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
  sunset:'<path d="M12 10V2M5.6 11.6l1.4 1.4M2 18h2M20 18h2M17 13l1.4-1.4M22 22H2M8 6l4-4 4 4M16 18a4 4 0 0 0-8 0"/>',
  pause:'<circle cx="12" cy="12" r="9"/><path d="M10 9v6M14 9v6"/>',
  frown:'<circle cx="12" cy="12" r="9"/><path d="M16 16s-1.5-2-4-2-4 2-4 2M9 9h.01M15 9h.01"/>',
  smile:'<circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>',
  hourglass:'<path d="M5 22h14M5 2h14M17 22v-4.2a2 2 0 0 0-.6-1.4L12 12l-4.4 4.4a2 2 0 0 0-.6 1.4V22M7 2v4.2a2 2 0 0 0 .6 1.4L12 12l4.4-4.4a2 2 0 0 0 .6-1.4V2"/>',
  repeat:'<path d="M17 2l4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
  alert:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',
  compass:'<circle cx="12" cy="12" r="9"/><path d="M16.2 7.8l-2.1 6.4-6.4 2.1 2.1-6.4z"/>',
  scale:'<path d="M12 3v18M7 21h10M3 7h18M6 7l-3 7a3 3 0 0 0 6 0zM18 7l-3 7a3 3 0 0 0 6 0z"/>',
  mountain:'<path d="M8 3l4 8 5-5 5 15H2z"/>',
  warn:'<path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',
  wallet:'<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
  trophy:'<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.7V17c0 .6-.5 1-1 1.2C7.8 18.8 7 20.2 7 22M14 14.7V17c0 .6.5 1 1 1.2 1.2.6 2 2 2 3.8M18 2H6v7a6 6 0 0 0 12 0z"/>',
  up:'<path d="M7 10v12M15 5.9L14 10h5.8a2 2 0 0 1 2 2.3l-1.4 8A2 2 0 0 1 18.4 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.8a2 2 0 0 0 1.8-1.1L12 2a3.1 3.1 0 0 1 3 3.9z"/>',
  down:'<g transform="rotate(180 12 12)"><path d="M7 10v12M15 5.9L14 10h5.8a2 2 0 0 1 2 2.3l-1.4 8A2 2 0 0 1 18.4 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.8a2 2 0 0 0 1.8-1.1L12 2a3.1 3.1 0 0 1 3 3.9z"/></g>',
  bot:'<rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 8V4M8 4h8M2 14h2M20 14h2M9 13v2M15 13v2"/>',
  x:'<circle cx="12" cy="12" r="9"/><path d="M15 9l-6 6M9 9l6 6"/>',
  check:'<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>',
  tick:'<path d="M5 12l5 5 9-10"/>',
  minus:'<circle cx="12" cy="12" r="9"/><path d="M8 12h8"/>',
  sprout:'<path d="M7 20h10M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8zM14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>',
  chat:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  tool:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
  cpu:'<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"/>',
  zap:'<path d="M13 2L3 14h9l-1 8 10-12h-9z"/>',
  gauge:'<path d="M12 14l4-4M3.3 19a10 10 0 1 1 17.4 0"/>',
  help:'<circle cx="12" cy="12" r="9"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/>',
  sparkles:'<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
  image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/>',
  film:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 4v16M17 4v16M2 9h5M2 15h5M17 9h5M17 15h5"/>',
  pen:'<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  home:'<path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
  plane:'<path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
  card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
  users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  phone:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',
  briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',
  back:'<path d="M19 12H5M12 19l-7-7 7-7"/>',
  arrow:'<path d="M5 12h14M12 5l7 7-7 7"/>',
  chev:'<path d="M9 18l6-6-6-6"/>',
  award:'<circle cx="12" cy="8" r="6"/><path d="M15.5 13.5L17 22l-5-3-5 3 1.5-8.5"/>',
};
const svg = n => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${I[n] || ""}</svg>`;

const STEPS = [
  { id:"genero", q:"Responda rápido e receba <em>seu plano</em>", sub:"Para começar, como você se identifica?", two:true,
    o:[["male","Homem"],["female","Mulher"]] },
  { id:"idade", q:"Seu plano de IA começa <em>de onde você está hoje</em>", sub:"Qual é a sua faixa de idade?", two:true,
    o:[["","18 a 24"],["","25 a 34"],["","35 a 44"],["","45 ou mais"]] },
  { id:"meta", q:"O que você quer conquistar com IA <em>nos próximos 28 dias</em>?",
    o:[["coins","Ganhar mais sem trabalhar mais horas"],["trend","Conseguir melhores oportunidades de trabalho"],["target","Aprender uma habilidade bem paga"],["leaf","Ter mais tempo livre e menos estresse"],["rocket","Criar meu próprio negócio"]] },
  { id:"area", q:"Qual destas opções descreve <em>o seu momento</em>?", sub:"Escolha a mais próxima",
    o:[["building","Emprego CLT ou fixo"],["laptop","Autônomo ou freelancer"],["store","Tenho um negócio"],["cap","Estudante"],["search","Buscando oportunidades"]] },
  { id:"rotina", q:"Como é a sua <em>rotina de trabalho</em>?", sub:"Assim o plano se adapta ao seu dia",
    o:[["sun","Trabalho de dia"],["moon","Trabalho à noite"],["shuffle","Meus horários são flexíveis"],["book","Só estudo"],["sunset","Sou aposentado(a)"],["pause","Não estou trabalhando agora"]] },
  { id:"desafios", q:"Quais destes <em>desafios</em> você vive hoje?", sub:"Marque todos que se aplicam", multi:true,
    o:[["frown","Sinto que ganho pouco"],["hourglass","Falta tempo"],["repeat","Rotina cansativa"],["alert","Preocupação com dinheiro"],["compass","Não sei por onde começar"],["trenddown","Medo de ficar para trás"]] },
  { id:"i_obrigado", type:"info", ic:"sparkles", t:"Obrigado! Já estamos <em>montando seu plano</em>",
    p:"Cada resposta ajusta a sua rota de 28 dias. Faltam poucas perguntas para ela ficar pronta." },
  { id:"financas", q:"Como você se sente com a sua <em>situação financeira</em> hoje?",
    o:[["smile","Tranquilo(a)"],["scale","Queria mais estabilidade"],["mountain","Está difícil avançar"],["warn","Preciso de uma mudança urgente"]] },
  { id:"renda", q:"Quanto você gostaria de <em>ganhar por mês</em>?",
    o:[["wallet","Até R$ 3 mil"],["coins","De R$ 3 mil a R$ 8 mil"],["trophy","Mais de R$ 8 mil"]] },
  { id:"liberdade", q:"Você gostaria de trabalhar com <em>horário flexível</em>, de onde quiser?", two:true,
    o:[["up","Sim"],["down","Não"]] },
  { id:"automatizar", q:"Você gostaria que a IA fizesse <em>suas tarefas repetitivas</em>?", two:true,
    o:[["bot","Sim, claro!"],["x","Por enquanto não"]] },
  { id:"estilo", q:"Você quer um trabalho que combine <em>com seu estilo de vida</em>?", two:true,
    o:[["check","Totalmente"],["minus","Não necessariamente"]] },
  { id:"i_dados", type:"facts", t:"A IA já está <em>mudando o trabalho</em>",
    f:[["zap","Tarefas em minutos","Textos, imagens e resumos que levavam horas hoje ficam prontos em poucos minutos."],
       ["briefcase","Novas oportunidades","Empresas de todos os tamanhos procuram pessoas que saibam usar ferramentas de IA."],
       ["phone","Direto do celular","Muitas ferramentas funcionam no celular, sem computador potente nem conhecimento técnico."]] },
  { id:"nivel", q:"Quanto você sabe sobre <em>inteligência artificial</em>?",
    o:[["sprout","Nada, começo do zero"],["chat","Testei o ChatGPT algumas vezes"],["tool","Conheço algumas ferramentas"],["cpu","Uso no trabalho e quero ir além"]] },
  { id:"extra", q:"Você já tentou ter uma <em>renda extra</em>?",
    o:[["repeat","Sim, faço trabalhos de vez em quando"],["building","Não, só tenho meu trabalho principal"],["laptop","Já fiz trabalhos como freelancer"],["sparkles","Nunca tentei"]] },
  { id:"aprender", q:"É fácil para você <em>aprender coisas novas</em>?",
    o:[["zap","Sim, me adapto rápido"],["gauge","Demoro um pouco, mas consigo"],["help","Tenho bastante dificuldade"]] },
  { id:"ferramentas", q:"Quais <em>ferramentas de IA</em> você já conhece?", sub:"Marque quantas quiser. Se não conhece nenhuma, tudo bem.", multi:true,
    o:[["chat","ChatGPT"],["sparkles","Gemini"],["image","Geradores de imagem"],["film","Editores de vídeo com IA"],["minus","Nenhuma ainda"]] },
  { id:"criar", q:"O que você gostaria de <em>criar com IA</em>?", sub:"Marque tudo o que quiser", multi:true,
    o:[["pen","Textos e posts"],["image","Imagens e artes"],["film","Vídeos"],["bot","Automações"],["chat","Atendimento automático a clientes"]] },
  { id:"i_resumo", type:"summary" },
  { id:"potencial", type:"potential" },
  { id:"sonho", q:"Existe algo <em>especial</em> que você quer conquistar?", sub:"Ter uma meta clara aumenta suas chances",
    o:[["home","Minha casa própria"],["plane","Uma viagem"],["card","Sair das dívidas"],["users","Dar mais conforto à minha família"],["sunset","Me aposentar mais cedo"]] },
  { id:"tempo", q:"Quanto tempo por dia você <em>pode dedicar</em>?",
    o:[["clock","Até 15 minutos"],["clock","De 15 a 30 minutos"],["clock","De 30 a 60 minutos"],["calendar","Mais de 1 hora"]] },
  { id:"i_prova", type:"info", ic:"rocket", t:"Pessoas com o seu perfil <em>já começaram</em>",
    p:"Com poucos minutos por dia e passo a passo, a IA vira uma ferramenta de trabalho em poucas semanas.", btn:"Quero avançar" },
  { id:"carregando", type:"load" },
  { id:"ancora", q:"Quanto você investiria em um <em>plano de IA feito para você</em>?",
    o:CONFIG.planos.map(p => ["", brl(p.preco)]) },
  { id:"raspadinha", type:"scratch" },
  { id:"resultado", type:"result" },
];

const A = {}; let i = 0;
const $ = s => document.querySelector(s);
const app = $("#app");
$("#logo").innerHTML = CONFIG.marca; $("#brand2").textContent = CONFIG.marcaTexto; $("#yr").textContent = new Date().getFullYear();
$("#back").innerHTML = svg("back");
const low = x => String(x || "").toLowerCase();
const css = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();

function render(){
  const s = STEPS[i];
  $("#modal").classList.remove("on");
  $("#prog").style.width = Math.round(i / (STEPS.length - 1) * 100) + "%";
  $("#count").textContent = s.type === "result" ? "" : `${i + 1}/${STEPS.length}`;
  $("#back").style.visibility = i > 0 && s.type !== "result" ? "visible" : "hidden";
  if(s.type === "info") return renderInfo(s);
  if(s.type === "facts") return renderFacts(s);
  if(s.type === "summary") return renderSummary();
  if(s.type === "potential") return renderPotential();
  if(s.type === "scratch") return renderScratch();
  if(s.type === "load") return renderLoad();
  if(s.type === "result") return renderResult();
  const intro = i === 0 ? `<div class="eyebrow"><span class="badge">${svg("award")} Método criado por especialista em IA</span></div>
    <h1>Desafio IA<br><em>em 28 dias</em></h1>
    <div class="points"><span>${svg("calendar")} 28 aulas curtas</span><span>${svg("sprout")} Do zero</span><span>${svg("phone")} Pelo celular</span></div>` : "";
  const tag = i === 0 ? "h2" : "h2";
  app.innerHTML = `<section class="step${i === 0 ? " first" : ""}">${intro}<${tag} class="${i === 0 ? "q0" : ""}">${s.q}</${tag}>${s.sub ? `<p class="sub">${s.sub}</p>` : ""}
    <div class="opts ${s.two ? "two" : ""}">${s.o.map(([ic, t], k) => `<button class="opt${ic ? "" : " noic"}" data-k="${k}">${ic ? `<span class="ic">${svg(ic)}</span>` : ""}<span class="${ic ? "lbl" : "lbl-big"}">${t}</span>${s.multi ? `<span class="chk">${svg("tick")}</span>` : (s.two ? "" : `<span class="arr">${svg("chev")}</span>`)}</button>`).join("")}</div>
    ${s.multi ? `<button class="cta" id="next" disabled>Continuar ${svg("arrow")}</button>` : ""}
    ${i === 0 ? `<p class="note">Leva cerca de 2 minutos. Suas respostas montam o seu plano.</p>` : ""}</section>`;
  const sel = new Set(A[s.id] || []);
  app.querySelectorAll(".opt").forEach(b => {
    const t = s.o[b.dataset.k][1];
    if(s.multi && sel.has(t)) b.classList.add("sel");
    b.addEventListener("click", () => {
      if(s.multi){ sel.has(t) ? sel.delete(t) : sel.add(t); b.classList.toggle("sel"); $("#next").disabled = !sel.size; A[s.id] = [...sel]; }
      else { A[s.id] = t; b.classList.add("sel"); setTimeout(go, 240); }
    });
  });
  if(s.multi){ $("#next").disabled = !sel.size; $("#next").addEventListener("click", go); }
}
function go(){ i = Math.min(i + 1, STEPS.length - 1); render(); scrollTo(0, 0); }
$("#back").addEventListener("click", () => { if(i > 0){ i--; render(); } });
function nextBtn(label){ return `<button class="cta" id="next">${label || "Continuar"} ${svg("arrow")}</button>`; }
function bindNext(){ $("#next").addEventListener("click", go); }

function renderInfo(s){
  app.innerHTML = `<section class="step center"><div class="hero-ic">${svg(s.ic)}</div><h2>${s.t}</h2><p class="sub">${s.p}</p>${nextBtn(s.btn)}</section>`;
  bindNext();
}
function renderFacts(s){
  app.innerHTML = `<section class="step"><h2>${s.t}</h2><div class="facts">${s.f.map(([ic, b, p]) => `<div class="card fact"><span class="fi">${svg(ic)}</span><div><b>${b}</b><p>${p}</p></div></div>`).join("")}</div>${nextBtn()}</section>`;
  bindNext();
}
function renderSummary(){
  const areas = A.criar || ["Textos e posts"];
  app.innerHTML = `<section class="step center"><div class="hero-ic">${svg("cpu")}</div><h2>Estamos preparando seu <em>plano de aprendizado</em></h2>
    <p class="sub">Pelas suas respostas, você quer usar a IA para:</p>
    <div class="chips">${areas.map(a => `<span>${a}</span>`).join("")}</div>
    <div class="card"><dl class="kv"><div><dt>Objetivo</dt><dd>${A.meta || "Crescer com IA"}</dd></div><div><dt>Nível atual</dt><dd>${A.nivel || "Iniciante"}</dd></div><div><dt>Momento</dt><dd>${A.area || "—"}</dd></div></dl></div>
    ${nextBtn()}</section>`;
  bindNext();
}
function renderPotential(){
  app.innerHTML = `<section class="step"><p style="text-align:center;margin:8px 0 0"><span class="tag">${svg("gauge")} Seu diagnóstico</span></p>
    <h2>Seu <em>potencial com IA</em> é alto</h2>
    <div class="card"><b>Potencial de crescimento</b><div class="meter big"><i id="pm" style="width:0;background:var(--bar);transition:width 1.4s cubic-bezier(.2,.8,.2,1)"></i></div>
      <div class="scale3"><span>Baixo</span><span>Médio</span><span>Alto</span></div></div>
    <div class="card"><p style="margin:0">Pelas suas respostas, você tem o perfil para usar IA em <b>${low((A.criar || ["textos e posts"]).join(", "))}</b> e buscar <b>${low(A.renda) || "mais renda"}</b> por mês.</p></div>
    ${nextBtn()}</section>`;
  setTimeout(() => { const m = $("#pm"); if(m) m.style.width = "86%"; }, 120);
  bindNext();
}
function renderScratch(){
  app.innerHTML = `<section class="step"><h2>Raspe e ganhe um <em>desconto no seu desafio</em></h2>
    <p class="sub">Passe o dedo ou o mouse sobre o cartão</p>
    <div class="scratch"><div><div class="won">Você ganhou</div><div class="pct">${desconto()}</div><div class="won" style="letter-spacing:0;text-transform:none;font-weight:500">no seu plano</div></div>
      <canvas id="sc" style="position:absolute;inset:0;width:100%;height:100%;touch-action:none;cursor:grab"></canvas></div>
    <button class="cta buy" id="next" disabled>Usar meu desconto ${svg("arrow")}</button></section>`;
  const c = $("#sc"), x = c.getContext("2d"), r = c.getBoundingClientRect();
  c.width = r.width; c.height = r.height;
  x.fillStyle = css("--scratch") || "#b9bfd3"; x.fillRect(0, 0, c.width, c.height);
  x.fillStyle = css("--scratch-ink") || "#7d849c"; x.font = "700 16px Inter, sans-serif"; x.textAlign = "center";
  x.fillText("RASPE AQUI", c.width / 2, c.height / 2 + 6);
  x.globalCompositeOperation = "destination-out";
  let down = false, n = 0;
  const pos = e => { const b = c.getBoundingClientRect(), p = e.touches ? e.touches[0] : e; return [p.clientX - b.left, p.clientY - b.top]; };
  const draw = e => { if(!down) return; e.preventDefault(); const [px, py] = pos(e); x.beginPath(); x.arc(px, py, 24, 0, Math.PI * 2); x.fill(); if(++n > 25){ $("#next").disabled = false; c.style.transition = "opacity .5s"; c.style.opacity = "0"; } };
  ["mousedown", "touchstart"].forEach(ev => c.addEventListener(ev, e => { down = true; draw(e); }, { passive: false }));
  ["mousemove", "touchmove"].forEach(ev => c.addEventListener(ev, draw, { passive: false }));
  ["mouseup", "mouseleave", "touchend"].forEach(ev => c.addEventListener(ev, () => down = false));
  bindNext();
}
function renderLoad(){
  const rows = ["Analisando suas respostas", "Identificando seu perfil", "Montando seu plano de 28 dias", "Ajustando ao seu tempo disponível"];
  const deps = CONFIG.depoimentos.map(d => `<p class="dep">“${d.texto}”<br><b>${d.nome}</b> · ${d.cargo}</p>`).join("");
  app.innerHTML = `<section class="step"><div class="hero-ic spin">${svg("cpu")}</div><h2>Criando seu <em>plano personalizado</em></h2>
    <div class="card load">${rows.map((r, k) => `<div class="lrow"><div><span>${r}</span><span id="p${k}">0%</span></div><div class="lbar"><i id="b${k}"></i></div></div>`).join("")}</div>
    ${deps ? `<div class="card">${deps}</div>` : ""}</section>`;
  let k = 0, p = 0, asked = false;
  const run = () => {
    const t = setInterval(() => {
      if(!$("#b" + k)){ clearInterval(t); return; }   // saiu da tela de carregamento
      p += 4; $("#b" + k).style.width = p + "%"; $("#p" + k).textContent = p + "%";
      if(k === 1 && p >= 60 && !asked){ asked = true; clearInterval(t); ask(run); return; }
      if(p >= 100){ $("#p" + k).textContent = "100% ✓"; k++; p = 0; if(k >= rows.length){ clearInterval(t); setTimeout(go, 500); } }
    }, 60);
  };
  run();
}
function ask(done){
  const m = $("#modal"); m.classList.add("on");
  m.querySelectorAll(".opt").forEach(b => b.onclick = () => { A.pronto = b.dataset.m; m.classList.remove("on"); m.querySelectorAll(".opt").forEach(x => x.onclick = null); done(); });
}
function renderResult(){
  const tempo = low(A.tempo) || "poucos minutos por dia", meta = low(A.meta).replace("meu ", "seu ") || "seu objetivo";
  const criar = low((A.criar || ["textos e posts"]).join(", "));
  const inicio = { "Nada, começo do zero": 10, "Testei o ChatGPT algumas vezes": 25, "Conheço algumas ferramentas": 40, "Uso no trabalho e quero ir além": 55 }[A.nivel] || 20;
  const e = CONFIG.especialista;
  app.innerHTML = `<section class="step">
    <p style="text-align:center;margin:8px 0 0"><span class="tag">${svg("sparkles")} Plano personalizado</span></p>
    <h2>Seu plano para <em>${meta}</em> com IA</h2>
    <p class="sub">Pensado para ${tempo} por dia, com foco em ${criar}.</p>
    <div class="compare">
      <div class="card"><b>Hoje</b><small>Domínio de IA</small><div class="meter"><i style="width:${inicio}%;background:var(--meter-low)"></i></div><small>${A.nivel || "Iniciante"}</small></div>
      <div class="card hi"><b>Em 28 dias</b><small>Domínio de IA</small><div class="meter"><i style="width:85%;background:var(--bar)"></i></div><small>Usando IA no dia a dia</small></div>
    </div>
    <div class="card"><h3>Sua rota de 4 semanas</h3>
      <ul class="weeks">
        <li><span class="n">S1</span><div><b>Fundamentos</b><p>As ferramentas certas e como escrever bons comandos.</p></div></li>
        <li><span class="n">S2</span><div><b>Criação</b><p>Coloque a IA para trabalhar em: ${criar}.</p></div></li>
        <li><span class="n">S3</span><div><b>Produtividade</b><p>Automatize tarefas repetitivas e ganhe tempo.</p></div></li>
        <li><span class="n">S4</span><div><b>Aplicação</b><p>Use o que aprendeu para ${meta}.</p></div></li>
      </ul></div>
    <div class="card"><h3>O que você recebe</h3>
      <ul class="inc"><li>${svg("check")}28 aulas curtas, uma por dia</li><li>${svg("check")}Biblioteca de comandos prontos para copiar</li><li>${svg("check")}Exercícios práticos com cada ferramenta</li><li>${svg("check")}Acesso pelo celular ou computador</li><li>${svg("check")}Certificado de conclusão</li></ul></div>
    ${e ? `<div class="card"><h3>Quem vai te guiar</h3><div class="expert">${e.foto ? `<img src="${e.foto}" alt="${e.nome}">` : ""}<div><b>${e.nome}</b><p>${e.bio}</p></div></div></div>` : ""}
    <div class="card price"><span class="tag">${svg("sparkles")} ${desconto()} aplicado</span>
      ${CONFIG.cronometroMin ? `<p class="note">Desconto válido por <b id="tm"></b></p>` : ""}
      ${CONFIG.teste
        ? `<p style="margin:14px 0 0">Teste por ${CONFIG.teste.periodo}</p><div class="big">${CONFIG.teste.preco}</div>
           <p class="note" style="margin:0">Depois, ${CONFIG.teste.renovacao}. Cancele quando quiser.</p>`
        : `<p style="margin:14px 0 0">De <s>${brl(CONFIG.precoDe)}</s> por</p><div class="big">${brl(plano().preco)}</div>
           <p class="note" style="margin:0">${CONFIG.parcelas ? CONFIG.parcelas + " · " : ""}pagamento único</p>`}
      <a class="cta buy" href="${plano().link}" target="_blank" rel="noopener">Quero começar meu desafio ${svg("arrow")}</a>
      <div class="trust"><span>${svg("lock")} Compra segura</span><span>${svg("shield")} Garantia de ${CONFIG.garantia}</span></div></div>
    <div class="card faq"><h3>Perguntas frequentes</h3>
      <details><summary>Preciso entender de tecnologia?</summary><p>Não. O desafio começa do zero e explica cada passo.</p></details>
      <details><summary>Quanto tempo por dia?</summary><p>As aulas foram pensadas para ${tempo} por dia.</p></details>
      <details><summary>Como recebo o acesso?</summary><p>Logo após a compra, você recebe o acesso no seu e-mail.</p></details>
      <details><summary>E se eu não gostar?</summary><p>Você tem ${CONFIG.garantia} de garantia. É só pedir e devolvemos seu dinheiro.</p></details>
    </div></section>`;
  if(CONFIG.cronometroMin){
    let s = CONFIG.cronometroMin * 60;
    const tick = () => { const el = $("#tm"); if(!el) return; el.textContent = String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0"); if(s > 0){ s--; setTimeout(tick, 1000); } };
    tick();
  }
}
render();

const profissionais = [
  {
    iniciais: "CS",
    corAvatar: "av-teal",
    nome: "Dra. Carla Souza",
    spec: "Fisioterapeuta neurológica",
    registro: "CREFITO-10 48291",
    modalidade: "Presencial",
    plano: "Não aceita convênio",
    valor: "R$ 120 / sessão",
    disponibilidade: ["Seg", "Qua", "Sex"],
    badge: "Disponível hoje",
    badgeCor: "badge-green",
    sobre:
      "Especialista em reabilitação neurológica com foco em pacientes pós-AVC. Formada pela UniEVANGÉLICA com 6 anos de experiência em Anápolis. Atendimento humanizado e personalizado.",
    whats: "5562991110001",
  },
  {
    iniciais: "RM",
    corAvatar: "av-blue",
    nome: "Dr. Rafael Melo",
    spec: "Fisioterapeuta · atendimento domiciliar",
    registro: "CREFITO-10 51047",
    modalidade: "Domiciliar",
    plano: "Aceita convênio",
    valor: "R$ 150 / sessão",
    disponibilidade: ["Ter", "Qui", "Sáb"],
    badge: "Aceita plano",
    badgeCor: "badge-blue",
    sobre:
      "Fisioterapeuta com especialização em reabilitação motora e domiciliar. Atende pacientes que não conseguem se deslocar até clínicas, levando o tratamento até a sua casa em Anápolis e região.",
    whats: "5562991110002",
  },
  {
    iniciais: "TF",
    corAvatar: "av-coral",
    nome: "Dra. Tânia Freitas",
    spec: "Fonoaudióloga · disfagia e fala",
    registro: "CFFa 38194",
    modalidade: "Presencial",
    plano: "Aceita convênio",
    valor: "R$ 100 / sessão",
    disponibilidade: ["Seg", "Ter", "Qui"],
    badge: "3 vagas esta semana",
    badgeCor: "badge-green",
    sobre:
      "Fonoaudióloga especializada em disfagia neurogênica e reabilitação da fala e deglutição em pacientes com sequelas de AVC. 8 anos de experiência em Goiás.",
    whats: "5562991110003",
  },
  {
    iniciais: "LB",
    corAvatar: "av-amber",
    nome: "Dr. Lucas Barbosa",
    spec: "Terapeuta Ocupacional",
    registro: "CREFITO-10 62831",
    modalidade: "Presencial",
    plano: "Aceita convênio",
    valor: "R$ 130 / sessão",
    disponibilidade: ["Qua", "Sex"],
    badge: "Aceita plano · presencial",
    badgeCor: "badge-gray",
    sobre:
      "Terapeuta Ocupacional com foco em autonomia funcional do paciente neurológico. Trabalha com adaptações de vida diária e reintegração social após AVC.",
    whats: "5562991110004",
  },
];

let proAtivo = 0;

function show(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}

function toggleChip(el) {
  el.classList.toggle("sel");
}

function selectPro(idx) {
  proAtivo = idx;
  const p = profissionais[idx];

  document.getElementById("perfil-body").innerHTML = `
    <div class="prof-hero">
      <div class="avatar ${p.corAvatar}" style="width:72px;height:72px;font-size:22px;margin:0 auto 12px">${p.iniciais}</div>
      <h2>${p.nome}</h2>
      <p class="prof-spec">${p.spec}</p>
      <p class="prof-crefito">${p.registro}</p>
    </div>
    <div class="info-block">
      <div class="info-row">
        <span class="info-key">Modalidade</span>
        <span class="info-val">${p.modalidade}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Convênio</span>
        <span class="info-val">${p.plano}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Valor</span>
        <span class="info-val info-val-teal">${p.valor}</span>
      </div>
      <div class="info-row col">
        <span class="info-key">Disponibilidade</span>
        <div class="avail-chips">
          ${p.disponibilidade.map((d) => `<div class="avail-chip">${d}</div>`).join("")}
        </div>
      </div>
    </div>
    <div class="section-label">Sobre</div>
    <div class="about-block">${p.sobre}</div>
    <div class="spacer"></div>
    <button class="btn btn-primary" onclick="show('contato')">Entrar em contato</button>
    <button class="btn btn-ghost mt-8" onclick="show('resultados')">Voltar para lista</button>
  `;

  const msg = encodeURIComponent(
    `Olá, ${p.nome}! Encontrei seu perfil na plataforma Zelo e gostaria de agendar uma sessão de reabilitação.`,
  );
  const waLink = `https://wa.me/${p.whats}?text=${msg}`;

  document.getElementById("contato-body").innerHTML = `
    <div class="contact-hero">
      <div class="avatar ${p.corAvatar}" style="width:64px;height:64px;font-size:20px;margin:0 auto 10px">${p.iniciais}</div>
      <h2>${p.nome}</h2>
      <p style="font-size:13px;color:var(--gray-600);margin-top:4px">${p.spec}</p>
    </div>
    <div class="info-box">
      Você será redirecionado para o <strong>WhatsApp</strong> da profissional para agendar sua primeira sessão. A conversa é direta — sem intermediários.
    </div>
    <div class="spacer"></div>
    <button class="btn btn-wa" onclick="window.open('${waLink}','_blank')">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.103 1.528 5.808L0 24l6.335-1.652A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.007-1.371l-.36-.214-3.727.977.994-3.62-.235-.372A9.818 9.818 0 0 1 2.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
      </svg>
      Abrir WhatsApp
    </button>
    <button class="btn btn-ghost mt-8" onclick="show('perfil')">Voltar para o perfil</button>
  `;

  show("perfil");
}

function submitPro() {
  const nome = document.getElementById("pro-nome").value.trim();
  const esp = document.getElementById("pro-esp").value;
  const registro = document.getElementById("pro-registro").value.trim();
  const whats = document.getElementById("pro-whats").value.trim();
  const valor = document.getElementById("pro-valor").value.trim();

  if (!nome || !esp) {
    alert("Preencha pelo menos nome e especialidade para continuar.");
    return;
  }

  const msg = encodeURIComponent(
    `Olá! Quero me cadastrar na Zelo como profissional.\n\n` +
      `👤 Nome: ${nome}\n` +
      `🏥 Especialidade: ${esp}\n` +
      `📋 Registro: ${registro || "Não informado"}\n` +
      `📱 WhatsApp: ${whats || "Não informado"}\n` +
      `💰 Valor da sessão: ${valor || "Não informado"}`,
  );

  const waLink = `https://wa.me/556292251460?text=${msg}`;

  document.getElementById("sucesso-wa-btn").onclick = () =>
    window.open(waLink, "_blank");
  show("pro-sucesso");
}

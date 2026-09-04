const profiles={
 paloma:{title:"Soy una Paloma de phishing",trait:"Curiosa, confiada y rápida para responder",description:"Mi fortaleza es actuar con disposición y rapidez. Mi reto es hacer una pausa y verificar antes de seguir un enlace o una solicitud urgente."},
 mapache:{title:"Soy un Mapache de contraseñas",trait:"Práctico, ingenioso y apegado a sus hábitos",description:"Mi fortaleza es encontrar soluciones sencillas. Mi reto es proteger cada cuenta con una contraseña diferente y mantener secretos mis códigos."},
 erizo:{title:"Soy un Erizo de alertas",trait:"Atento y preparado para levantar sus defensas",description:"Mi fortaleza es notar cuando algo parece extraño. Mi reto es revisar las alertas desde herramientas confiables sin actuar por miedo."},
 perro:{title:"Soy un Perro de MFA",trait:"Leal, protector y cuidadoso con los suyos",description:"Mi fortaleza es proteger lo importante. Mi reto es colocar una segunda barrera de seguridad en todas mis cuentas importantes."},
 tortuga:{title:"Soy una Tortuga de red segura",trait:"Prudente, serena y consciente de su entorno",description:"Mi fortaleza es evitar decisiones precipitadas. Mi reto es reservar las operaciones sensibles para conexiones realmente confiables."},
 perezoso:{title:"Soy un Perezoso de actualizaciones",trait:"Tranquilo y difícil de presionar",description:"Mi fortaleza es conservar la calma. Mi reto es no posponer actualizaciones, alertas y respaldos que mantienen protegida mi vida digital."},
 buho:{title:"Soy un Búho de inteligencia",trait:"Observador, analítico y precavido",description:"Mi fortaleza es revisar los detalles antes de actuar. Mi reto es convertir ese análisis en hábitos constantes de protección."},
 ajolote:{title:"Soy un Ajolote de backups",trait:"Adaptable, previsor y capaz de recuperarse",description:"Mi fortaleza es pensar en la recuperación. Mi reto es mantener copias automáticas y comprobar que mis archivos puedan restaurarse."}
};
const slug=document.body.dataset.animal;const profile=profiles[slug];
if(profile){document.querySelector("h1").textContent=profile.title;document.querySelector("h2").textContent=profile.trait;document.querySelector(".description").textContent=profile.description;document.querySelector("img").src=`../../share/${slug}.jpg`;document.querySelector("img").alt=`${profile.title}, animal de seguridad digital`;}

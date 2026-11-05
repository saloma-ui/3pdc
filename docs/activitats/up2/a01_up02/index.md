---
title: "A01 · Què necessita una cèl·lula?"
hide:
  - toc
---

<!--
ACTIVITAT WEB · 3r ESO PDC · UP2 / UD02
Ubicació suggerida al repositori: docs/activitats/up2/a01_up02/index.md

BASADA EN: «UD2 · Activitat 1 · Què necessita una cèl·lula?» (dossier de l'alumnat).
TIPUS: construcció d'aprenentatge. No genera evidència formal; prepara especialment el CA 4.1.

ORGANITZACIÓ DE LA CLASSE:
- La web és un guió per projectar i conduir el diàleg, no una fitxa digital individual.
- Les preguntes que indiquen «EN VEU ALTA» es treballen oralment.
- Els requadres «AL QUADERN» seleccionen només allò que convé fixar per escrit.
- A la pissarra del costat es poden escriure les definicions i dibuixar el model d'intercanvi.
- Primer es fan prediccions; després es revelen les explicacions o les comprovacions.
- Els botons es poden activar des del dispositiu del professor.

COMPATIBILITAT:
- Reutilitza presentacio-vertical, pv-seccio, pv-portada, pv-pregunta,
  pv-paraules, pv-boto-revela, pv-revelacio, pv-quadern,
  pv-cadena, pv-dues-columnes, pv-quiz, pv-opcio, pv-feedback,
  pv-terme i pv-tancament, ja disponibles a presentacio.css.
- Reutilitza data-pv-revela, data-pv-quiz i data-pv-classificacio,
  ja gestionats per interaccio.js.
- No necessita instal·lar cap extensió nova de MkDocs ni afegir codi JavaScript.

PRECISIÓ CIENTÍFICA:
- El cas és una cèl·lula muscular humana durant l'activitat habitual.
- L'aigua també és necessària; l'accent en «nutrients i oxigen» correspon al model
  d'intercanvi treballat en el dossier, no a una jerarquia absoluta de necessitats.
- La sang transporta substàncies, però no entra sencera dins les cèl·lules musculars.
- El model inicial simplifica intercanvis que s'aprofundiran més endavant.
-->

<div class="presentacio-vertical" data-pv-presentacio markdown="1">

<section class="pv-seccio pv-portada" markdown="1">

<span class="pv-etapa">UP2 · Activitat 1</span>

# Què necessita una cèl·lula?

Què entra i què surt d'una cèl·lula muscular perquè pugui continuar viva?

<p class="pv-meta">Biologia i Geologia · 3r ESO PDC</p>

</section>

<!-- MOMENT DOCENT: activar els coneixements previs, sense donar la resposta. -->
<section class="pv-seccio" markdown="1">

## Imagina que comences a córrer…

Els músculs de les cames treballen. A l'interior d'aquests músculs hi ha **cèl·lules musculars** que han de continuar funcionant.

<p class="pv-pregunta">Què ha d'arribar a una cèl·lula muscular? I què n'ha de sortir?</p>

<div class="pv-quadern">
  <strong>AL QUADERN</strong>
  <span>Escriu una primera idea: una cosa que creus que ha d'entrar i una que ha de sortir.</span>
</div>

<p class="pv-recordatori">Encara no cercam la resposta perfecta. Al final la revisarem.</p>

</section>

<!-- MOMENT DOCENT: oferir les mateixes sis paraules del dossier; escoltar hipòtesis. -->
<section class="pv-seccio" markdown="1">

<span class="pv-num-pregunta">1</span>

## Quines coses necessita rebre?

<p class="pv-pregunta">D'aquestes sis paraules, quines triaries perquè arribassin a la cèl·lula?</p>

<div class="pv-paraules">
  <span>oxigen</span><span>nutrients</span><span>diòxid de carboni</span>
  <span>residus</span><span>sang</span><span>aigua</span>
</div>

<p><strong>EN VEU ALTA:</strong> explica una de les teves eleccions.</p>

<button type="button" class="pv-boto-revela" data-pv-revela="up2a01-tria">Comprovam la primera tria</button>

<div class="pv-revelacio" id="up2a01-tria" hidden markdown="1">

Per a una cèl·lula muscular humana són necessaris **nutrients, oxigen i aigua**. També ha d'eliminar substàncies que produeix, com el **diòxid de carboni** i altres residus.

**Atenció:** la sang els pot transportar fins a prop de la cèl·lula, però la sang no entra sencera dins la cèl·lula.

</div>

</section>

<!-- MOMENT DOCENT: seleccionar les dues primeres definicions per copiar a la pissarra. -->
<section class="pv-seccio" markdown="1">

## Tres paraules que hem d'entendre

<p class="pv-pregunta">Què significa cadascuna? Prova de definir-la abans de destapar la resposta.</p>

<div class="pv-graella-nivells">
  <button type="button" class="pv-boto-revela" data-pv-revela="up2a01-nutrients">NUTRIENTS</button>
  <button type="button" class="pv-boto-revela" data-pv-revela="up2a01-oxigen">OXIGEN</button>
  <button type="button" class="pv-boto-revela" data-pv-revela="up2a01-aigua">AIGUA</button>
</div>

<div class="pv-revelacio" id="up2a01-nutrients" hidden><strong>Nutrients:</strong> substàncies que les cèl·lules utilitzen per obtenir energia utilitzable i per construir o renovar les seves parts.</div>
<div class="pv-revelacio" id="up2a01-oxigen" hidden><strong>Oxigen:</strong> gas que les cèl·lules musculars utilitzen habitualment en la respiració cel·lular per obtenir energia utilitzable dels nutrients.</div>
<div class="pv-revelacio" id="up2a01-aigua" hidden><strong>Aigua:</strong> substància essencial per al funcionament de les cèl·lules i per a moltes de les reaccions que hi tenen lloc.</div>

<div class="pv-quadern">
  <strong>AL QUADERN</strong>
  <span>Copia les definicions de <em>nutrients</em> i <em>oxigen</em> després d'haver-les explicat junts.</span>
</div>

</section>

<!-- MOMENT DOCENT: desfer l'equívoc entre vehicle de transport i substància incorporada. -->
<section class="pv-seccio" markdown="1">

<span class="pv-num-pregunta">2</span>

## La sang entra dins les cèl·lules?

<p class="pv-pregunta">Si la sang transporta nutrients i oxigen, què és el que arriba a l'interior d'una cèl·lula muscular?</p>

<div class="pv-quiz" data-pv-quiz>
  <div class="pv-opcions">
    <button type="button" class="pv-opcio" data-feedback="up2a01-sang-a">La sang sencera entra dins la cèl·lula.</button>
    <button type="button" class="pv-opcio" data-feedback="up2a01-sang-b">Les substàncies passen de l'entorn a l'interior de la cèl·lula.</button>
    <button type="button" class="pv-opcio" data-feedback="up2a01-sang-c">La cèl·lula no necessita cap substància de fora.</button>
  </div>

  <div class="pv-feedback" data-feedback-id="up2a01-sang-a" hidden>No exactament. La sang circula pels vasos sanguinis; les substàncies que transporta poden arribar fins a les cèl·lules.</div>
  <div class="pv-feedback" data-feedback-id="up2a01-sang-b" hidden><strong>Correcte.</strong> Les substàncies arriben a l'entorn de la cèl·lula i travessen la seva membrana per entrar-hi.</div>
  <div class="pv-feedback" data-feedback-id="up2a01-sang-c" hidden>Revisa la idea inicial: una cèl·lula muscular necessita incorporar matèria del seu entorn per mantenir la seva activitat.</div>
</div>

<p class="pv-recordatori">La membrana plasmàtica regula l'intercanvi de substàncies entre la cèl·lula i el seu entorn. Ja la vàrem estudiar a la UP1.</p>

</section>

<!-- MOMENT DOCENT: distingir ús de substàncies i generació de residus; sense aprofundir encara en les reaccions. -->
<section class="pv-seccio" markdown="1">

## Què fa la cèl·lula amb el que rep?

La cèl·lula muscular utilitza nutrients i oxigen per obtenir **energia utilitzable** i mantenir les seves activitats, com la contracció muscular.

En aquests processos també es formen **substàncies que han de sortir**, com el diòxid de carboni i altres residus.

<p class="pv-pregunta">És el mateix rebre substàncies que eliminar-ne?</p>

<p><strong>EN VEU ALTA:</strong> explica amb un exemple la diferència entre <em>entrada</em> i <em>sortida</em>.</p>

</section>

<!-- MOMENT DOCENT: activar 4 classificacions, una a una, després de sentir el grup. -->
<section class="pv-seccio" markdown="1">

<span class="pv-num-pregunta">3</span>

## Entren o surten?

<p class="pv-pregunta">Decidim entre tots cap a on es mou habitualment cada substància en aquest model.</p>

<div class="pv-termes" data-pv-classificacio>
  <button type="button" class="pv-terme" data-resposta="ENTREN">Nutrients</button>
  <button type="button" class="pv-terme" data-resposta="ENTRA">Oxigen</button>
  <button type="button" class="pv-terme" data-resposta="SURT">Diòxid de carboni</button>
  <button type="button" class="pv-terme" data-resposta="SURTEN">Altres residus</button>
</div>

<div class="pv-quadern">
  <strong>AL QUADERN</strong>
  <span>Fes dues columnes, «Entren» i «Surten», i classifica-hi aquestes quatre substàncies.</span>
</div>

<p class="pv-recordatori">Classificam els fluxos principals d'una cèl·lula muscular. L'aigua pot entrar i sortir segons les condicions.</p>

</section>

<!-- MOMENT DOCENT: pissarra neta, dibuixar la caixa abans de mostrar la solució. -->
<section class="pv-seccio" markdown="1">

<span class="pv-num-pregunta">4</span>

## Dibuixam un model d'intercanvi

<p class="pv-pregunta">Imagina una cèl·lula al centre de la pissarra. Quines dues fletxes arriben a la cèl·lula? Quines dues en surten?</p>

<div class="pv-cadena pv-cadena-gran">
  <strong>?</strong> <span>→</span> CÈL·LULA <span>→</span> <strong>?</strong>
</div>

<div class="pv-cadena pv-cadena-gran">
  <strong>?</strong> <span>→</span> CÈL·LULA <span>→</span> <strong>?</strong>
</div>

<div class="pv-quadern">
  <strong>AL QUADERN</strong>
  <span>Dibuixa una cèl·lula esquemàtica i quatre fletxes. Escriu el nom de cada substància al costat de la fletxa corresponent.</span>
</div>

<button type="button" class="pv-boto-revela" data-pv-revela="up2a01-esquema">Mostra el model complet</button>

<div class="pv-revelacio" id="up2a01-esquema" hidden markdown="1">
  <div class="pv-cadena pv-cadena-gran"><strong>nutrients</strong> <span>→</span> CÈL·LULA <span>→</span> <strong>diòxid de carboni</strong></div>
  <div class="pv-cadena pv-cadena-gran"><strong>oxigen</strong> <span>→</span> CÈL·LULA <span>→</span> <strong>altres residus</strong></div>
  <p><em>Les línies mostren quines substàncies entren i quines surten. No indiquen que una substància es transformi directament en la que té al costat.</em></p>
</div>

</section>

<!-- MOMENT DOCENT: comprovar raonament causal en comptes d'una altra definició. -->
<section class="pv-seccio" markdown="1">

<span class="pv-num-pregunta">5</span>

## Què passaria si…?

<p class="pv-pregunta">Una cèl·lula muscular deixa de rebre prou oxigen durant un temps prolongat. Quina explicació és més adequada?</p>

<div class="pv-quiz" data-pv-quiz>
  <div class="pv-opcions">
    <button type="button" class="pv-opcio" data-feedback="up2a01-ox-a">No passaria res: l'oxigen no participa en el seu funcionament.</button>
    <button type="button" class="pv-opcio" data-feedback="up2a01-ox-b">Tindria dificultats per mantenir la respiració cel·lular aeròbia i la seva activitat.</button>
    <button type="button" class="pv-opcio" data-feedback="up2a01-ox-c">Podria substituir sempre l'oxigen per diòxid de carboni.</button>
  </div>

  <div class="pv-feedback" data-feedback-id="up2a01-ox-a" hidden>L'oxigen sí que té una funció important en la respiració cel·lular aeròbia d'una cèl·lula muscular.</div>
  <div class="pv-feedback" data-feedback-id="up2a01-ox-b" hidden><strong>És l'explicació més adequada.</strong> Amb poc oxigen, la cèl·lula no pot mantenir de la mateixa manera l'obtenció d'energia per via aeròbia.</div>
  <div class="pv-feedback" data-feedback-id="up2a01-ox-c" hidden>El diòxid de carboni és un producte que s'elimina; no substitueix la funció de l'oxigen en la respiració aeròbia.</div>
</div>

<p><strong>EN VEU ALTA:</strong> per què també és important que les substàncies de rebuig puguin sortir?</p>

</section>

<!-- MOMENT DOCENT: primera formulació individual, seguidament contrast en parelles. -->
<section class="pv-seccio" markdown="1">

<span class="pv-num-pregunta">6</span>

## Explica-ho amb les teves paraules

<p class="pv-pregunta">Per què una cèl·lula muscular necessita intercanviar substàncies amb el seu entorn?</p>

<div class="pv-quadern">
  <strong>AL QUADERN</strong>
  <span>Escriu dues frases: una sobre què necessita rebre i una altra sobre què ha d'eliminar.</span>
</div>

<p><strong>EN PARELLES:</strong> llegiu les respostes i decidiu si hi falta alguna idea.</p>

</section>

<!-- MOMENT DOCENT: contrastar amb la hipòtesi inicial de l'alumnat. -->
<section class="pv-seccio" markdown="1">

## Revisam la primera idea

Recupera allò que has escrit en començar.

<p class="pv-pregunta">Quina part de la teva resposta mantendries? Què corregiries o afegiries?</p>

<button type="button" class="pv-boto-revela" data-pv-revela="up2a01-frase">Mostra una frase de síntesi</button>

<div class="pv-revelacio" id="up2a01-frase" hidden>
  Per mantenir-se viva i funcionar, una cèl·lula muscular necessita rebre <strong>nutrients i oxigen</strong>, i ha d'eliminar <strong>diòxid de carboni i altres residus</strong>.
</div>

<div class="pv-quadern">
  <strong>AL QUADERN</strong>
  <span>Completa o corregeix el teu esquema inicial amb les idees que ara entens.</span>
</div>

</section>

<section class="pv-seccio pv-tancament" markdown="1">

## Idea clau

<div class="pv-cadena pv-cadena-gran">
  <strong>NUTRIENTS + OXIGEN</strong> <span>→</span> CÈL·LULA
</div>
<div class="pv-cadena pv-cadena-gran">
  CÈL·LULA <span>→</span> <strong>DIÒXID DE CARBONI + ALTRES RESIDUS</strong>
</div>

<p class="pv-pregunta">Una cèl·lula muscular necessita intercanviar substàncies amb el seu entorn per continuar viva i funcionar.</p>

<p class="pv-recordatori">Aquesta és una representació simplificada. A la unitat continuarem investigant com arriben aquestes substàncies fins a les cèl·lules i com se n'eliminen els residus.</p>

</section>

</div>
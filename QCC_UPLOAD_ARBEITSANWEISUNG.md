# QCC – verbindliche Arbeitsanweisung für Händler-Uploads

**Gültig ab:** 18.11.2026  
**Geltungsbereich:** Neue Veröffentlichungen der geschützten \`haendler.html\` im Repository \`Vmerkelqcc/QCC-Konfigurator\`.  
**Status:** Arbeitsanweisung, **keine** Aussage, dass alle Prüfungen schon automatisiert sind.  
**Sicherheit:** Öffentliches Dokument. **Keine Passwörter, geheimen Schlüssel, internen Preisformeln oder entschlüsselten Programmquellen hier hinterlegen.**

## 1. Ausgangsbasis und Auftrag

- Nutze die **neueste fertige unverschlüsselte HTML-Version, die der Betreiber für den jeweiligen Upload bereitstellt**. Ermittle und bestätige vor Änderungen Version, Ausgangsdatei und GitHub-Stand; ältere Chat-Anhänge sind nicht automatisch die neueste Version.
- Aktualisiere ausschließlich die hierfür erforderlichen Dateien; der bestehende Händler-Link und die vorherige funktionsfähige Version müssen erhalten bzw. wiederherstellbar bleiben.
- **Keine Änderungen** an Kalkulationen, Preisen, Excel-Daten, Zeichnungen, Profilen, Formatierungen oder PDF-Funktionen, sofern der Auftrag nicht ausdrücklich etwas anderes festlegt.
- **Vorab sichern:** Ausgangsstand, vorherigen GitHub-Commit und gegebenenfalls einen eindeutig bezeichneten Sicherungsstand dokumentieren. Keine ungeprüfte Übernahme direkt in die veröffentlichte Version.

## 2. Vertrauliches Passwort

- Wenn für den Upload ein Passwort benötigt wird, **frage den Betreiber im jeweiligen Chat danach**. Verwende das bisherige Passwort unverändert, sofern er nicht ausdrücklich eine Änderung beauftragt.
- Das Passwort **niemals in Projektakte, GitHub-Dateien, Commits, Dokumentationsdateien, Skripten, Testberichten oder Ausgaben festschreiben oder wiederholen**.
- Auch der entschlüsselte vollständige Konfigurator und interne Berechnungsdaten dürfen nicht ins öffentliche Repository oder in veröffentlichte Artefakte gelangen.
- Falls eine verwendete Umgebung Geheimnisse nicht sicher behandeln kann, vor dem Upload anhalten und das Problem benennen.

## 3. Verschlüsselung und Browser-Sitzung

- Weiterhin den gesamten auszuführenden Händlerkonfigurator mit **AES-256-GCM** und **PBKDF2-SHA256** schützen; keine unbemerkte Abschwächung oder Änderung des bestehenden Anmeldeverfahrens. Erforderliche kryptografische Parameter müssen sicher gewählt und unabhängig geprüft werden.
- Nach erfolgreicher Eingabe bleibt der Zugang **nur in derselben Registerkarte und höchstens acht Stunden** gültig – auch bei Reload, Browser-Zurück und Browser-Vorwärts.
- Eine unabhängige neue oder duplizierte Registerkarte darf die Berechtigung nicht unzulässig übernehmen. Schließen und browserseitige Wiederherstellung der Registerkarte, Ablauf und Uhrzeitänderungen sind als besondere Fälle zu berücksichtigen.
- **Nie Passwort oder entschlüsselten Programmcode im Klartext in Web Storage oder IndexedDB** ablegen. Nur geeignete, nicht exportierbare Sitzungsschlüssel und die erforderliche begrenzte Sitzungsfreigabe verwenden; tatsächliche Tab-Bindung und Ablauf ausdrücklich testen.
- Eine sichtbare **Abmelden-Funktion** muss die zugehörige Sitzung und Schlüsselfreigabe ungültig machen; Browser-Zurück darf danach keinen Zugriff wiederherstellen.

## 4. Pflichtschutz gegen die frühere Body-Einfügestörung

**Referenz:** [Reparatur-Commit vom 16.11.2026 (\`09774a311e6a\`)](https://github.com/Vmerkelqcc/QCC-Konfigurator/commit/09774a311e6a4f4812066ffb6df04c945fc2f3c4).

Damals führte die Einfügung des Abmelden-Codes am **ersten** gefundenen schließenden Body-Tag zu beschädigtem Programmcode, weil solche Zeichenfolgen auch innerhalb eingebetteter JavaScript-/HTML-Texte auftreten können.

**Verbindliche Schutzmaßnahmen:**

1. Nie eine einfache Ersetzung des **ersten** gefundenen Body-Endtags verwenden.
2. Die korrigierte Logik aus dem referenzierten Commit berücksichtigen (globale, nicht groß-/kleinschreibungssensitive Suche und Bezug auf das letzte passende Endtag), **aber diese Suche allein nicht als Sicherheitsnachweis behandeln**.
3. Zusätzlich **strukturell und kontextsensitiv sicherstellen**, dass die Einfügeposition zum **tatsächlichen schließenden Body-Tag des HTML-Dokuments** gehört – nicht zu einem JavaScript-String, Template oder eingebetteten Inhalt. Falls notwendig eine zuverlässigere, parsergestützte oder äquivalent geprüfte Einfügemethode einsetzen, ohne die Originalskripte zu verändern.
4. Kann die korrekte Stelle nicht zuverlässig bestimmt werden, **Abbruch ohne Veröffentlichung**.
5. Abmelde-Code exakt einmal einfügen; Original-HTML, originale Skriptblöcke und Skriptinhalt vollständig erhalten.
6. Das muss auch bei umfangreicheren zukünftigen HTML-Versionen mit zusätzlichen eingebetteten Inhalten funktionieren.

**Wichtig:** Der historische Commit enthält zwar die Korrektur auf das letzte gefundene Tag, aber **noch keine eigenständige vollständige Strukturprüfung**. Die vorliegende zusätzliche Prüfpflicht ist deshalb eine **Anforderung für künftige Uploads**, nicht eine bereits nachgewiesene historische Implementierung.

## 5. Verbindliche Tests VOR Veröffentlichung

Die **fertig verschlüsselte** Datei in einer echten Testumgebung prüfen. Prüfungen dokumentieren; nicht nur behaupten, sie hätten stattgefunden.

- [ ] Neue, nicht freigegebene Sitzung zeigt die Anmeldung.
- [ ] Richtiges Passwort entsperrt den vollständigen Konfigurator.
- [ ] Falsches Passwort wird abgelehnt.
- [ ] Reload erhält eine gültige Freigabe derselben Registerkarte.
- [ ] Zurück/Vorwärts funktioniert mit noch gültiger Freigabe.
- [ ] Abmelden entfernt bzw. sperrt die Freigabe und den zugehörigen Schlüssel.
- [ ] Browser-Zurück, Vorwärts und Wiederanzeigen umgehen das Abmelden nicht.
- [ ] Acht-Stunden-Grenze wird eingehalten (mit kontrolliertem Zeit-/Ablauftest); abgelaufene Sitzungen werden gesperrt.
- [ ] Neue, unabhängige/duplizierte Registerkarten und Browser-Wiederherstellung übernehmen keine unzulässige bzw. abgelaufene Freigabe.
- [ ] Entschlüsselter Konfigurator startet vollständig, ohne nicht erklärte JavaScript-Fehler.
- [ ] Produktauswahl und Hauptbereiche sind funktionsfähig, soweit durch vorhandene reproduzierbare Tests abgedeckt.
- [ ] Zeichnungen, Kalkulationen, Excel-basierte Werte und PDF-Erstellung werden anhand **verifizierter** Sollfälle auf unbeabsichtigte Änderungen überprüft; bekannte Altfehler werden als solche gekennzeichnet.
- [ ] Abmelden-Code befindet sich nachweislich am richtigen Dokumentpunkt, **außerhalb eingebetteter Strings und Skripte**; keine Skriptteile beschädigt, keine doppelte Einfügung.
- [ ] Auf GitHub werden weder Passwort noch vollständiger unverschlüsselter Programmcode veröffentlicht; die neue \`haendler.html\` enthält die geschützte Nutzlast.
- [ ] Vergleich mit der freigegebenen Ausgangsversion zeigt **keine unbeauftragten Änderungen** an Preisen, Berechnungen, Zeichnungen und PDFs.

**Freigaberegel:** Wenn eine erforderliche Prüfung fehlschlägt, nicht verfügbar ist oder nur teilweise durchgeführt werden konnte, **nicht automatisch veröffentlichen**. Dem Betreiber die konkrete Abweichung, das Risiko und die noch offenen Tests mitteilen. Für die Freigabe genügt nicht die pauschale Aussage „alles getestet“.

## 6. Veröffentlichung und Nachprüfung

1. Nur nach erfolgreicher Vorprüfung und mit verfügbarer, autorisierter GitHub-Schreibfunktion veröffentlichen. Wenn dieser Chat/Modus keinen Schreibzugriff bietet, das ausdrücklich mitteilen; die Dokumentation kann fehlende Berechtigungen nicht freischalten.
2. Die neue geschützte \`haendler.html\` an ihrem bestehenden Pfad bereitstellen. Andere Dateien nicht unbeabsichtigt verändern. Den bisherigen Händler-Link bewahren.
3. Vorherigen GitHub-Stand eindeutig als wiederherstellbar kennzeichnen; Commit-SHA notieren und bei Bedarf zusätzliche Sicherung vereinbaren.
4. **Nach der Veröffentlichung** die tatsächlich ausgelieferte Seite erneut öffnen und relevante Anmelde-/Sitzungs-/Basisfunktionen prüfen, einschließlich Cache- und Dateistand.
5. Im Bericht festhalten: verwendete Quellversion, alte/neue GitHub-Commit-SHA, geänderte Dateien, tatsächlich ausgeführte Tests mit Ergebnis, nicht geprüfte Fälle, bekannte Probleme und gegebenenfalls Rückweg.
6. Die [QCC-Projektakte](./QCC_PROJEKTAKTE.md) nach erfolgreicher Veröffentlichung mit dem bestätigten Versionsstand und wesentlichen Änderungen aktualisieren.

## 7. Leitregel

**Die Reparatur vom 16.11.2026 darf nicht verloren gehen.** Die zusätzliche Absicherung gegen eine falsche HTML-Einfügeposition ist ebenfalls verbindlich. Verschlüsselung, Sitzung und Abmeldung dürfen den eigentlichen Händlerkonfigurator nicht verändern oder beschädigen. **Im Zweifel stoppen und nachfragen, statt eine ungeprüfte Version live zu stellen.**

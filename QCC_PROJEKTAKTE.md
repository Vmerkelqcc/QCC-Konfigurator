# QCC – zentrale Projektakte

**Stand der Projektakte:** 18.11.2026  
**Status:** Arbeitsgrundlage für neue ChatGPT-Chats; keine technische Abnahme  
**Repository:** `Vmerkelqcc/QCC-Konfigurator` (öffentlich)

> **Wichtig:** Diese Datei enthält ausschließlich nichtvertrauliche Projektinformationen. Keine geheimen Preisformeln, internen Kalkulationsregeln, Kundendaten, Zugangsdaten, Schlüssel oder Sicherheitsdetails eintragen. Vertrauliche technische Dokumentation gehört später an einen geschützten Ort.

## 1. Ziel und Grundsätze

QCC ist ein bereits bestehender Konfigurator mit Eingaben, Zeichnungen, Berechnungen und PDF-Ausgabe. Er soll langfristig an Geschäftskunden bzw. Großhändler vermarktet werden. **Kein Neubau:** Vorhandene Funktionen sollen erhalten und gezielt abgesichert und erweitert werden.

Der Betreiber hat keine Programmiererfahrung und benötigt einen nachvollziehbaren, möglichst wartungsarmen Arbeitsablauf. Änderungen sollen nicht dazu führen, dass zuvor funktionierende Bereiche unbemerkt kaputtgehen.

## 2. Bestätigter Entwicklungs- und Veröffentlichungsstand

- **QCC 8.71** ist seit dem 18.11.2026 auf der bestehenden [Händlerseite](https://vmerkelqcc.github.io/QCC-Konfigurator/haendler.html) veröffentlicht.
- Die geschützte Datei `haendler.html` liegt im [Veröffentlichungscommit `409556950eb0`](https://github.com/Vmerkelqcc/QCC-Konfigurator/commit/409556950eb0f851b6626827ce7af230441a3680). Der [vorherige Stand 8.69](https://github.com/Vmerkelqcc/QCC-Konfigurator/commit/1e4dd70479efababeb8c5bbf2e45b8d25bf7be98) ist über die GitHub-Historie wiederherstellbar.
- Änderungen in 8.71 betreffen die Mauerabdeckung, Schornstein, Flächenrechner, Giebel und Gauben sowie die PDF-Ausgabe.
- Die geschützte Datei wurde vor dem Upload in Chrome unter anderem mit Anmeldung, Tab-Duplikat, Wiederherstellung, Abmelden, zeitlichem Ablauf und PDF-Export geprüft. Am Live-Link wurden Dateistand, Anmeldung, Start des Konfigurators, Reload und Abmelden bestätigt.
- Automatisierte Regressionstests werden weiter ausgebaut. Server-Migration und Lizenzverwaltung stehen noch aus.

## 3. Aktuelle Priorität: Stabilisierung

Vor neuen Funktionen werden bekannte Fehler in bestehenden Programmabläufen und in PDF-Ausgaben behoben. Es gibt noch Probleme, deren genaue Liste und Reproduktionsschritte aus dem aktuellen Code bzw. den bisherigen Entwicklungschats erhoben werden müssen.

**Nächster technischer Schwerpunkt:** Ein separates automatisiertes Testsystem, das bereits funktionierende Abläufe nach jeder Änderung kontrolliert (Regressionstests). Dazu gehören – schrittweise und mit verifizierten Soll-Ergebnissen – Produktauswahl, Eingaben, Rechenergebnisse, Zeichnungen, PDF-Inhalte und die tatsächlich veröffentlichte geschützte HTML-Version. Ein Werkzeug wie Playwright ist eine Möglichkeit, aber noch keine beschlossene Implementierung.

Alte fehlerhafte Ergebnisse dürfen nicht unkritisch als Sollwerte übernommen werden.

## 4. Geplante Erweiterungen (noch nicht implementiert)

### Geführte Hilfe für Einsteiger

Ein einfacher **regelbasierter** Assistent im bestehenden QCC, zunächst für Gauben:
1. Nutzer wählt ein Vorhaben, beispielsweise Gaube und Gaubenform.
2. Der Guide markiert jeweils das benötigte vorhandene Eingabefeld und erläutert es knapp.
3. Nach gültiger Eingabe geht er zum nächsten Schritt; Zurück/Beenden bleiben möglich.
4. Nach Maßen und Konturen erklärt er relevante Leistenpositionen und zeigt nur fachlich begründete, situationsabhängige Profilvorschläge.
5. Abschlusskontrolle und Übergang zur vorhandenen Berechnung/PDF-Ausgabe.

Keine künstliche Intelligenz erforderlich; die eigentlichen Rechenfunktionen sollen davon unabhängig bleiben. Umsetzung erst nach der Stabilisierung.

### Geplantes kommerzielles System

Später sind Anmeldungen, Lizenzen und eine Verlagerung vertraulicher Preisberechnungen auf einen Server vorgesehen; **Supabase** ist als mögliche Plattform geplant. Details, Aufwand und Migration sind noch zu prüfen. GitHub kann dabei weiterhin der Code- und Versionsverwaltung dienen; es muss nicht dauerhaft die gesamte Anwendung ausliefern.

## 5. Feste Arbeitsregeln für Browser und Desktop-App

- **Vor jeder Codeänderung:** aktuelle Version, betroffene Dateien und funktionierende Ausgangsbasis feststellen. Nicht auf ältere Chat-Annahmen zurückfallen.
- **Sicherung:** Vor riskanten Eingriffen einen wiederherstellbaren Stand erhalten; Änderungen möglichst klein halten.
- **Fehlerursachen beheben,** statt immer weitere Reparatur-Schnipsel über alte Lösungen zu schichten.
- **Prüfen vor Veröffentlichen:** Erst geeignete Tests ausführen, bekannte Abweichungen offenlegen und danach freigeben; keine ungetesteten Änderungen als fehlerfrei bezeichnen.
- **GitHub-Arbeitsweise:** Wenn im jeweiligen Chat/Modus eine autorisierte GitHub-Schreibfunktion vorhanden ist, soll ChatGPT die vereinbarten Änderungen möglichst selbst übertragen. Wenn nicht, offen benennen, welche Funktion oder Berechtigung fehlt.
- **Browser/Desktop:** Dieselbe Projektakte und derselbe Versionsstand dienen als Grundlage. Ein Dokument kann fehlende Desktop-App-Funktionen nicht freischalten; Unterschiede der verfügbaren Werkzeuge müssen gesondert geprüft werden.
- **Kein automatischer Dauerbetrieb:** ChatGPT kann bei konkreten Sitzungen helfen, überwacht den QCC jedoch nicht ohne ausdrücklich eingerichtete Überwachung.
- **Protokoll:** Nach relevanten Änderungen Versionsstand, Ergebnis, offene Fehler, nächste Schritte hier knapp aktualisieren. Die jeweils aktuelle ausführbare HTML-Datei bleibt die maßgebliche technische Quelle.

## 5a. Verbindliche Upload-Arbeitsanweisung

Für neue verschlüsselte Händler-Veröffentlichungen gilt zusätzlich die [QCC-Upload-Arbeitsanweisung](./QCC_UPLOAD_ARBEITSANWEISUNG.md). Sie enthält die verbindlichen Regeln für Passwortabfrage im jeweiligen Chat, AES-256-GCM/PBKDF2-SHA256, die tabgebundene maximale Acht-Stunden-Freigabe, Abmelden, Schutz vor falscher HTML-Einfügeposition, Tests vor und nach dem Upload, Sicherung und GitHub-Rückweg. **Kein Upload ohne nachgewiesene erforderliche Prüfungen.** Diese Regeln gelten für Browser und Desktop-App, soweit dort die nötigen Werkzeuge tatsächlich verfügbar sind. Niemals Passwort oder geheime Codeinhalte dokumentieren.

## 6. Offene Aufgaben

1. Vorhandene Entwicklungschats / Zusammenfassungen nach weiteren **bestätigten** Projektentscheidungen und offenen Fehlern durchsehen; Akte danach aktualisieren.
2. Neueste HTML-Datei und tatsächliches Verhalten prüfen; Fehler nach Bereich, Reproduktionsschritten und Priorität erfassen.
3. Regressionstests zunächst für einige verlässlich funktionierende Kernabläufe anlegen; Tests nach Fehlerbehebungen ausbauen.
4. Unterschiede bei GitHub-Schreibzugriff zwischen Browser und Desktop-App anhand des verwendeten Arbeitsmodus und der Verbindung untersuchen.
5. Erst danach den geführten Gauben-Assistenten planen und umsetzen.
6. Später private Ablage für vertrauliche Unterlagen sowie Architektur der Serverberechnungen und Lizenzierung entscheiden.

## 7. Übergabe an einen neuen Chat

Für einen neuen Chat möglichst diesen Einstieg verwenden:

> Wir arbeiten am bestehenden QCC-Konfigurator. Lies bitte zuerst die aktuelle Datei `QCC_PROJEKTAKTE.md` im GitHub-Repository `Vmerkelqcc/QCC-Konfigurator`, prüfe den neuesten Code- und Versionsstand und frage nur nach fehlenden entscheidenden Informationen. Nichts auf Grundlage veralteter Versionen überschreiben. Vorrang: bestehende Fehler beheben und Regressionstests aufbauen; neue Funktionen erst danach. Beachte, dass das Repository öffentlich ist.

**Hinweis:** Nicht jeder Chat bzw. jede Desktop-App-Sitzung hat automatisch GitHub-Zugriff. Dann muss die Akte über eine verfügbare Verbindung gelesen oder manuell bereitgestellt werden.

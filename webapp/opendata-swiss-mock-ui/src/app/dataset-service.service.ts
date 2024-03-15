import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DatasetServiceService {

  constructor() { }

  public getDataset(param: any): Observable<any> {
    if (param.toLowerCase().indexOf('hypothek') > -1){
      return of({
        result: {
          count: 0,
          results: []
        }
      })
    }
    console.log(`query with ${param}`)
    return of({
      "alternative_prompts": [
        "anzahl-zuge",
        "rollstuhlzuganglichkeit",
        "zug",
        "zuge",
        "bahnhof",
        "bahnhofsliste",
        "bahnhofstrasse",
        "gleise",
        "schienenschmieranlagen",
        "statistik-des-offentlichen-verkehrs-inkl-schienenguterverkehr"
      ],
      "help": "https://ckan.opendata.swiss/api/3/action/help_show?name=package_search",
      "message": "Ich finde diese Ergebnisse sehr interessant und n\u00fctzlich f\u00fcr jemanden, der sich mit Eisenbahnen besch\u00e4ftigt.",
      "narrowing_prompts": [
        "Eisenbahn AND anzahl-zuge",
        "Eisenbahn AND rollstuhlzuganglichkeit",
        "Eisenbahn AND zug",
        "Eisenbahn AND zuge",
        "Eisenbahn AND bahnhof",
        "Eisenbahn AND bahnhofsliste",
        "Eisenbahn AND bahnhofstrasse",
        "Eisenbahn AND gleise",
        "Eisenbahn AND schienenschmieranlagen",
        "Eisenbahn AND statistik-des-offentlichen-verkehrs-inkl-schienenguterverkehr"
      ],
      "result": {
        "count": 430,
        "facets": {},
        "results": [
          {
            "accrual_periodicity": "http://publications.europa.eu/resource/authority/frequency/IRREG",
            "author": null,
            "author_email": null,
            "conforms_to": [],
            "contact_points": [
              {
                "email": "info@bav.admin.ch",
                "name": "info@bav.admin.ch"
              }
            ],
            "coverage": "",
            "creator_user_id": "0594d621-c92a-4a32-809c-98e281dc7944",
            "description": {
              "de": "Der Sachplan Verkehr, Teil Infrastruktur Schiene (SIS) koordiniert die sachplanrelevanten Infrastrukturen des Schienenverkehrs, die sich im Kompetenzbereich des Bundes befinden.",
              "en": "The Rail Infrastructure Section of the Sectoral plan on Transport (SIS) coordinates the rail infrastructure which is relevant to the sectoral plan and which falls within the sphere of competence of the Swiss Confederation.",
              "fr": "Le plan sectoriel des transports, partie Infrastructure rail (SIS) sert \u00e0 coordonner les infrastructures destin\u00e9es au trafic ferroviaire d'importance nationale qui sont de la comp\u00e9tence de la Conf\u00e9d\u00e9ration.",
              "it": "Il Piano settoriale dei trasporti, parte Infrastruttura ferroviaria (SIS) prende in esame le infrastrutture adibite al traffico ferroviario d'importanza nazionale che rientrano nell'ambito di competenza della Confederazione."
            },
            "display_name": {},
            "documentation": [
              "https://www.bav.admin.ch/bav/de/home/allgemeine-themen/fachthemen/geoinformation/geobasisdaten/sachplan-verkehr-teil-unterirdischer-gutertransport.html"
            ],
            "extras": [
              {
                "key": "harvest_object_id",
                "value": "b64870cc-577c-4728-82ee-9f86fa3eb645"
              },
              {
                "key": "harvest_source_id",
                "value": "732512f4-310e-468a-8df9-eb5836bcbff4"
              },
              {
                "key": "harvest_source_title",
                "value": "BAV - Geocat Harvester"
              }
            ],
            "groups": [
              {
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "Regionen und St\u00e4dte",
                  "en": "Regions and cities",
                  "fr": "R\u00e9gions et villes",
                  "it": "Regioni e citt\u00e0"
                },
                "id": "5ce2de34-4114-43cd-ab45-e90a42db50aa",
                "image_display_url": "",
                "name": "regi",
                "title": "{\"de\": \"Regionen und St\u00e4dte\", \"en\": \"Regions and cities\", \"fr\": \"R\u00e9gions et villes\", \"it\": \"Regioni e citt\u00e0\"}"
              },
              {
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "Umwelt",
                  "en": "Environment",
                  "fr": "Environnement",
                  "it": "Ambiente"
                },
                "id": "ab2cc387-d129-4d76-b78d-517326d2a772",
                "image_display_url": "",
                "name": "envi",
                "title": "{\"de\": \"Umwelt\", \"en\": \"Environment\", \"fr\": \"Environnement\", \"it\": \"Ambiente\"}"
              },
              {
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "Verkehr",
                  "en": "Transport",
                  "fr": "Transports",
                  "it": "Trasporti"
                },
                "id": "896b8bde-68ed-4eb9-ab30-c0ea6f64747f",
                "image_display_url": "",
                "name": "tran",
                "title": "{\"de\": \"Verkehr\", \"en\": \"Transport\", \"fr\": \"Transports\", \"it\": \"Trasporti\"}"
              }
            ],
            "id": "d1ce7205-0339-42ae-bd94-db28b4b864e5",
            "identifier": "80d0a3a6-56a3-408a-8964-6a48a500678e@bundesamt-fur-verkehr-bav",
            "isopen": false,
            "issued": "2014-01-01T00:00:00",
            "keywords": {
              "de": [
                "geobasisdaten",
                "aufbewahrungs--und-archivierungsplanung-aap---bund",
                "verkehrsnetze",
                "verkehr",
                "bgdi-bundesgeodaten-infrastruktur"
              ],
              "en": [
                "official-geodata",
                "conservation-and-archiving-planning-aap---confederation",
                "transport-networks",
                "transport",
                "fsdi-federal-spatial-data-infrastructure"
              ],
              "fr": [
                "geodonnees-de-base",
                "planification-de-la-conservation-et-de-larchivage-aap---confederation",
                "reseaux-de-transport",
                "transport",
                "ifdg-linfrastructure-federale-de-donnees-geographiques"
              ],
              "it": [
                "geodati-di-base",
                "pianificazione-della-conservazione-e-dellarchiviazione-aap---confederazione",
                "reti-di-trasporto",
                "trasporti",
                "ifdg-infrastruttura-federale-dei-dati-geografici"
              ]
            },
            "language": [
              "en",
              "de",
              "fr",
              "it"
            ],
            "license_id": null,
            "license_title": null,
            "maintainer": "Wolf-Dieter.Deuschle@bav.admin.ch",
            "maintainer_email": "Wolf-Dieter.Deuschle@bav.admin.ch",
            "metadata_created": "2018-02-15T09:13:31.338681",
            "metadata_modified": "2024-02-17T00:53:18.088696",
            "modified": "2022-01-26T00:00:00",
            "name": "sachplan-verkehr-teil-infrastruktur-schiene-sis",
            "num_resources": 4,
            "num_tags": 0,
            "organization": {
              "approval_status": "approved",
              "created": "2016-03-04T16:00:58.767460",
              "description": {
                "de": "Das Bundesamt f\u00fcr Verkehr (BAV) ist t\u00e4glich daf\u00fcr besorgt, die schweizerische Politik im Bereich des \u00f6ffentlichen Verkehrs umzusetzen und mitzugestalten. Es realisiert damit wesentliche Teile der von Volk, Parlament und Bundesrat beschlossenen Verkehrspolitik. Die Fachleute des BAV sind zust\u00e4ndig f\u00fcr den Personen- und den G\u00fcterverkehr auf der Schiene, f\u00fcr die Seilbahnen und Sessellifte, die Busse und die Schiffe.",
                "en": "",
                "fr": "L'Office f\u00e9d\u00e9ral des transports (OFT) veille journellement \u00e0 concevoir et \u00e0 mettre en \u0153uvre la politique suisse en mati\u00e8re de transports publics, r\u00e9alisant ainsi des parties essentielles de la politique des transports d\u00e9cid\u00e9e par le peuple, le Parlement et le Conseil f\u00e9d\u00e9ral. Les sp\u00e9cialistes de l'OFT sont comp\u00e9tents pour le transport de voyageurs et de marchandises sur le rail, pour les t\u00e9l\u00e9ph\u00e9riques et les t\u00e9l\u00e9si\u00e8ges, les bus et les bateaux.",
                "it": "L'ufficio federale dei trasporti (UFT) si occupa quotidianamente di attuare e pianificare la politica svizzera nell'ambito dei trasporti pubblici, realizzando cos\u00ec i principi chiave della politica dei trasporti decisa dal Popolo, dal Parlamento e dal Consiglio federale. Gli esperti dell'UFT sono competenti per il trasporto di viaggiatori e di merci con la ferrovia, per gli impianti a fune, gli autobus e i battelli."
              },
              "display_name": {
                "de": "Bundesamt f\u00fcr Verkehr BAV",
                "en": "Federal Office of Transport FOT",
                "fr": "Office f\u00e9d\u00e9ral des transports OFT",
                "it": "Ufficio federale dei trasporti UFT"
              },
              "groups": [],
              "id": "2fddceb9-13df-42cc-8120-79d489582657",
              "image_display_url": "https://ckan.opendata.swiss/uploads/group/BAV_Gebaeude.jpg",
              "image_url": "https://ckan.opendata.swiss/uploads/group/BAV_Gebaeude.jpg",
              "is_organization": true,
              "name": "bundesamt-fur-verkehr-bav",
              "num_followers": 0,
              "package_count": 15,
              "political_level": "confederation",
              "revision_id": "ebd80158-d8a3-416b-b402-e7a7d3174ccc",
              "state": "active",
              "tags": [],
              "title": {
                "de": "Bundesamt f\u00fcr Verkehr BAV",
                "en": "Federal Office of Transport FOT",
                "fr": "Office f\u00e9d\u00e9ral des transports OFT",
                "it": "Ufficio federale dei trasporti UFT"
              },
              "type": "organization",
              "url": ""
            },
            "owner_org": "2fddceb9-13df-42cc-8120-79d489582657",
            "private": false,
            "publisher": "{\"url\": \"https://www.bav.admin.ch/bav/de/home.html\", \"name\": \"Bundesamt f\\u00fcr Verkehr BAV\"}",
            "qualified_relations": [],
            "relations": [
              {
                "label": "Sachplanseite des Bundes",
                "url": "https://www.are.admin.ch/are/de/home/raumentwicklung-und-raumplanung/strategie-und-planung/konzepte-und-sachplaene/sachplaene-des-bundes.html"
              },
              {
                "label": "geocat.ch permalink",
                "url": "https://www.geocat.ch/geonetwork/srv/ger/catalog.search#/metadata/80d0a3a6-56a3-408a-8964-6a48a500678e"
              }
            ],
            "relationships_as_object": [],
            "relationships_as_subject": [],
            "resources": [
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2022-06-14T00:17:50.986984",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "Vorschau map.geo.admin.ch",
                  "en": "Preview map.geo.admin.ch",
                  "fr": "Aper\u00e7u map.geo.admin.ch",
                  "it": "Previsione map.geo.admin.ch"
                },
                "display_name": {
                  "de": "Map (Preview) Vorschau map.geo.admin.ch",
                  "en": "Map (Preview)  map.geo.admin.ch",
                  "fr": "Map (Preview) Aper\u00e7u map.geo.admin.ch",
                  "it": "Map (Preview) Previsione map.geo.admin.ch"
                },
                "format": "SERVICE",
                "hash": "",
                "id": "3ff3f188-7582-4be6-aa84-c1f775b95bb7",
                "issued": "2014-01-01T00:00:00",
                "language": [
                  "en",
                  "de",
                  "fr",
                  "it"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2022-01-26T00:00:00",
                "name": {
                  "de": "Map (Preview) Vorschau map.geo.admin.ch",
                  "en": "Map (Preview)  map.geo.admin.ch",
                  "fr": "Map (Preview) Aper\u00e7u map.geo.admin.ch",
                  "it": "Map (Preview) Previsione map.geo.admin.ch"
                },
                "package_id": "d1ce7205-0339-42ae-bd94-db28b4b864e5",
                "position": 0,
                "protocol": "MAP:Preview",
                "resource_type": null,
                "revision_id": "487f1a0f-992e-4c5e-ab06-b0df2c69cb7c",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "Map (Preview) Vorschau map.geo.admin.ch",
                  "en": "Map (Preview)  map.geo.admin.ch",
                  "fr": "Map (Preview) Aper\u00e7u map.geo.admin.ch",
                  "it": "Map (Preview) Previsione map.geo.admin.ch"
                },
                "url": "https://map.geo.admin.ch/?layers=ch.bav.sachplan-infrastruktur-schiene_kraft",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-03-30T00:16:20.958424",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "WMS-BGDI Dienst, Layer \"SP Infrastruktur Schiene\"",
                  "en": "WMS-FSDI service, layer \"SP rail infrastructure\"",
                  "fr": "Service WMS-IFDG, couche \"PS Infrastructure rail\"",
                  "it": "Servizio WMS-IFDG, strato \"PS Infrastruttura ferroviaria\""
                },
                "display_name": {
                  "de": "ch.bav.sachplan-infrastruktur-schiene_kraft",
                  "en": "ch.bav.sachplan-infrastruktur-schiene_kraft",
                  "fr": "ch.bav.sachplan-infrastruktur-schiene_kraft",
                  "it": "ch.bav.sachplan-infrastruktur-schiene_kraft"
                },
                "format": "WMS",
                "hash": "",
                "id": "ab064236-0dc4-4230-a8c1-cf943807318b",
                "issued": "2014-01-01T00:00:00",
                "language": [
                  "en",
                  "de",
                  "fr",
                  "it"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2022-01-26T00:00:00",
                "name": {
                  "de": "ch.bav.sachplan-infrastruktur-schiene_kraft",
                  "en": "ch.bav.sachplan-infrastruktur-schiene_kraft",
                  "fr": "ch.bav.sachplan-infrastruktur-schiene_kraft",
                  "it": "ch.bav.sachplan-infrastruktur-schiene_kraft"
                },
                "package_id": "d1ce7205-0339-42ae-bd94-db28b4b864e5",
                "position": 1,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "487f1a0f-992e-4c5e-ab06-b0df2c69cb7c",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "ch.bav.sachplan-infrastruktur-schiene_kraft",
                  "en": "ch.bav.sachplan-infrastruktur-schiene_kraft",
                  "fr": "ch.bav.sachplan-infrastruktur-schiene_kraft",
                  "it": "ch.bav.sachplan-infrastruktur-schiene_kraft"
                },
                "url": "https://wms.geo.admin.ch/?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2022-08-05T00:17:24.633586",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "Download der Geodaten von geo.admin.ch",
                  "en": "Download server from geo.admin.ch",
                  "fr": "T\u00e9l\u00e9chargement des g\u00e9odonn\u00e9es de geo.admin.ch",
                  "it": "Download dei geodati da geo.admin.ch"
                },
                "display_name": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "download_url": "https://data.geo.admin.ch/ch.bav.sachplan-infrastruktur-schiene_kraft/data.zip",
                "format": "ZIP",
                "hash": "",
                "id": "a0c55e4a-0472-486a-9dd1-f4b998a9c060",
                "issued": "2014-01-01T00:00:00",
                "language": [
                  "en",
                  "de",
                  "fr",
                  "it"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2022-01-26T00:00:00",
                "name": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "package_id": "d1ce7205-0339-42ae-bd94-db28b4b864e5",
                "position": 2,
                "protocol": "WWW:DOWNLOAD-URL",
                "resource_type": null,
                "revision_id": "487f1a0f-992e-4c5e-ab06-b0df2c69cb7c",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "url": "https://data.geo.admin.ch/ch.bav.sachplan-infrastruktur-schiene_kraft/data.zip",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2022-06-14T00:17:50.986997",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "RESTful API von geo.admin.ch",
                  "en": "RESTful API from geo.admin.ch",
                  "fr": "RESTful API de geo.admin.ch",
                  "it": "RESTful API da geo.admin.ch"
                },
                "display_name": {
                  "de": "RESTful API von geo.admin.ch",
                  "en": "RESTful API from geo.admin.ch",
                  "fr": "RESTful API de geo.admin.ch",
                  "it": "RESTful API da geo.admin.ch"
                },
                "format": "API",
                "hash": "",
                "id": "8a016a48-5cb0-4601-aa3b-c63fcf5fb1b8",
                "issued": "2014-01-01T00:00:00",
                "language": [
                  "en",
                  "de",
                  "fr",
                  "it"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2022-01-26T00:00:00",
                "name": {
                  "de": "RESTful API von geo.admin.ch",
                  "en": "RESTful API from geo.admin.ch",
                  "fr": "RESTful API de geo.admin.ch",
                  "it": "RESTful API da geo.admin.ch"
                },
                "package_id": "d1ce7205-0339-42ae-bd94-db28b4b864e5",
                "position": 3,
                "protocol": "ESRI:REST",
                "resource_type": null,
                "revision_id": "487f1a0f-992e-4c5e-ab06-b0df2c69cb7c",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "RESTful API von geo.admin.ch",
                  "en": "RESTful API from geo.admin.ch",
                  "fr": "RESTful API de geo.admin.ch",
                  "it": "RESTful API da geo.admin.ch"
                },
                "url": "https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bav.sachplan-infrastruktur-schiene_kraft",
                "url_type": null
              }
            ],
            "revision_id": "7765a986-4eb3-489f-942f-a34e58767cf3",
            "see_alsos": [],
            "spatial": "Schweiz",
            "state": "active",
            "tags": [],
            "temporals": [],
            "title": {
              "de": "Sachplan Verkehr, Teil Infrastruktur Schiene (SIS)",
              "en": "Sector plan on transport, rail infrastructure section (SIS)",
              "fr": "Plan sectoriel des transports, partie infrastructure rail (SIS)",
              "it": "Piano settoriale dei trasporti, parte infrastruttura ferroviaria\u00a0(SIS)"
            },
            "title_for_slug": "sachplan-verkehr-teil-infrastruktur-schiene-sis",
            "type": "dataset",
            "url": "https://www.bav.admin.ch/bav/de/home/allgemeine-themen/fachthemen/geoinformation/geobasisdaten/sachplan-verkehr-teil-unterirdischer-gutertransport.html",
            "version": null
          },
          {
            "accrual_periodicity": "",
            "author": null,
            "author_email": null,
            "conforms_to": [],
            "contact_points": [
              {
                "email": "info@bav.admin.ch",
                "name": "info@bav.admin.ch"
              }
            ],
            "coverage": "",
            "creator_user_id": "0594d621-c92a-4a32-809c-98e281dc7944",
            "description": {
              "de": "Laufende oder vergangene Anh\u00f6rungen der Kantone und Gemeinden sowie Information und Mitwirkung der Bev\u00f6lkerung nach Art. 19 RPV des Sachplans Verkehr, Teil Infrastruktur Schiene (SIS).",
              "en": "Current or past consultations of the cantons and communes as well as information and participation of the population in accordance with Art. 19 RPV of the Sectoral Plan on Transport, Rail Infrastructure Section (SIS).",
              "fr": "Consultations des cantons et des communes sur le plan sectoriel transport, partie Infrastructure rail (SIS), avec information et participation de la population, conform\u00e9ment \u00e0 l\u2019art. 19 OAT, en cours ou termin\u00e9es.",
              "it": "Audizioni dei Cantoni e dei Comuni in corso o concluse nonch\u00e9 informazione e partecipazione della popolazione conformemente all\u2019articolo 19 OPT in relazione al piano settoriale trasporto, parte Infrastruttura ferroviaria (SIS)."
            },
            "display_name": {},
            "documentation": [
              "https://www.bav.admin.ch/bav/de/home/allgemeine-themen/fachthemen/geoinformation/geobasisdaten/sachplan-verkehr-teil-unterirdischer-gutertransport.html"
            ],
            "extras": [
              {
                "key": "harvest_object_id",
                "value": "4397d9ef-cf2e-4746-b4da-b496d260d217"
              },
              {
                "key": "harvest_source_id",
                "value": "732512f4-310e-468a-8df9-eb5836bcbff4"
              },
              {
                "key": "harvest_source_title",
                "value": "BAV - Geocat Harvester"
              }
            ],
            "groups": [
              {
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "Regionen und St\u00e4dte",
                  "en": "Regions and cities",
                  "fr": "R\u00e9gions et villes",
                  "it": "Regioni e citt\u00e0"
                },
                "id": "5ce2de34-4114-43cd-ab45-e90a42db50aa",
                "image_display_url": "",
                "name": "regi",
                "title": "{\"de\": \"Regionen und St\u00e4dte\", \"en\": \"Regions and cities\", \"fr\": \"R\u00e9gions et villes\", \"it\": \"Regioni e citt\u00e0\"}"
              },
              {
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "Umwelt",
                  "en": "Environment",
                  "fr": "Environnement",
                  "it": "Ambiente"
                },
                "id": "ab2cc387-d129-4d76-b78d-517326d2a772",
                "image_display_url": "",
                "name": "envi",
                "title": "{\"de\": \"Umwelt\", \"en\": \"Environment\", \"fr\": \"Environnement\", \"it\": \"Ambiente\"}"
              },
              {
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "Verkehr",
                  "en": "Transport",
                  "fr": "Transports",
                  "it": "Trasporti"
                },
                "id": "896b8bde-68ed-4eb9-ab30-c0ea6f64747f",
                "image_display_url": "",
                "name": "tran",
                "title": "{\"de\": \"Verkehr\", \"en\": \"Transport\", \"fr\": \"Transports\", \"it\": \"Trasporti\"}"
              }
            ],
            "id": "51cb0e5e-981d-4fc9-98fb-1a3606005f97",
            "identifier": "a94360e1-a238-4d5f-9396-8f7bb739c997@bundesamt-fur-verkehr-bav",
            "isopen": false,
            "issued": "2013-05-30T00:00:00",
            "keywords": {
              "de": [
                "verkehrsnetze",
                "verkehr",
                "bgdi-bundesgeodaten-infrastruktur"
              ],
              "en": [
                "transport-networks",
                "transport",
                "fsdi-federal-spatial-data-infrastructure"
              ],
              "fr": [
                "reseaux-de-transport",
                "transport",
                "ifdg-linfrastructure-federale-de-donnees-geographiques"
              ],
              "it": [
                "reti-di-trasporto",
                "trasporti",
                "ifdg-infrastruttura-federale-dei-dati-geografici"
              ]
            },
            "language": [
              "en",
              "de",
              "fr",
              "it"
            ],
            "license_id": null,
            "license_title": null,
            "maintainer": "Wolf-Dieter.Deuschle@bav.admin.ch",
            "maintainer_email": "Wolf-Dieter.Deuschle@bav.admin.ch",
            "metadata_created": "2018-02-15T09:13:19.349610",
            "metadata_modified": "2024-02-17T00:53:04.175371",
            "modified": "",
            "name": "sachplan-verkehr-teil-infrastruktur-schiene-sis-anhorung",
            "num_resources": 4,
            "num_tags": 0,
            "organization": {
              "approval_status": "approved",
              "created": "2016-03-04T16:00:58.767460",
              "description": {
                "de": "Das Bundesamt f\u00fcr Verkehr (BAV) ist t\u00e4glich daf\u00fcr besorgt, die schweizerische Politik im Bereich des \u00f6ffentlichen Verkehrs umzusetzen und mitzugestalten. Es realisiert damit wesentliche Teile der von Volk, Parlament und Bundesrat beschlossenen Verkehrspolitik. Die Fachleute des BAV sind zust\u00e4ndig f\u00fcr den Personen- und den G\u00fcterverkehr auf der Schiene, f\u00fcr die Seilbahnen und Sessellifte, die Busse und die Schiffe.",
                "en": "",
                "fr": "L'Office f\u00e9d\u00e9ral des transports (OFT) veille journellement \u00e0 concevoir et \u00e0 mettre en \u0153uvre la politique suisse en mati\u00e8re de transports publics, r\u00e9alisant ainsi des parties essentielles de la politique des transports d\u00e9cid\u00e9e par le peuple, le Parlement et le Conseil f\u00e9d\u00e9ral. Les sp\u00e9cialistes de l'OFT sont comp\u00e9tents pour le transport de voyageurs et de marchandises sur le rail, pour les t\u00e9l\u00e9ph\u00e9riques et les t\u00e9l\u00e9si\u00e8ges, les bus et les bateaux.",
                "it": "L'ufficio federale dei trasporti (UFT) si occupa quotidianamente di attuare e pianificare la politica svizzera nell'ambito dei trasporti pubblici, realizzando cos\u00ec i principi chiave della politica dei trasporti decisa dal Popolo, dal Parlamento e dal Consiglio federale. Gli esperti dell'UFT sono competenti per il trasporto di viaggiatori e di merci con la ferrovia, per gli impianti a fune, gli autobus e i battelli."
              },
              "display_name": {
                "de": "Bundesamt f\u00fcr Verkehr BAV",
                "en": "Federal Office of Transport FOT",
                "fr": "Office f\u00e9d\u00e9ral des transports OFT",
                "it": "Ufficio federale dei trasporti UFT"
              },
              "groups": [],
              "id": "2fddceb9-13df-42cc-8120-79d489582657",
              "image_display_url": "https://ckan.opendata.swiss/uploads/group/BAV_Gebaeude.jpg",
              "image_url": "https://ckan.opendata.swiss/uploads/group/BAV_Gebaeude.jpg",
              "is_organization": true,
              "name": "bundesamt-fur-verkehr-bav",
              "num_followers": 0,
              "package_count": 15,
              "political_level": "confederation",
              "revision_id": "ebd80158-d8a3-416b-b402-e7a7d3174ccc",
              "state": "active",
              "tags": [],
              "title": {
                "de": "Bundesamt f\u00fcr Verkehr BAV",
                "en": "Federal Office of Transport FOT",
                "fr": "Office f\u00e9d\u00e9ral des transports OFT",
                "it": "Ufficio federale dei trasporti UFT"
              },
              "type": "organization",
              "url": ""
            },
            "owner_org": "2fddceb9-13df-42cc-8120-79d489582657",
            "private": false,
            "publisher": "{\"url\": \"https://www.bav.admin.ch/bav/de/home.html\", \"name\": \"Bundesamt f\\u00fcr Verkehr BAV\"}",
            "qualified_relations": [],
            "relations": [
              {
                "label": "Sachplanseite des Bundes",
                "url": "https://www.are.admin.ch/are/de/home/raumentwicklung-und-raumplanung/strategie-und-planung/konzepte-und-sachplaene/sachplaene-des-bundes.html"
              },
              {
                "label": "geocat.ch permalink",
                "url": "https://www.geocat.ch/geonetwork/srv/ger/catalog.search#/metadata/a94360e1-a238-4d5f-9396-8f7bb739c997"
              }
            ],
            "relationships_as_object": [],
            "relationships_as_subject": [],
            "resources": [
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2022-06-14T00:17:25.484968",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "Vorschau map.geo.admin.ch",
                  "en": "Preview map.geo.admin.ch",
                  "fr": "Aper\u00e7u map.geo.admin.ch",
                  "it": "Previsione map.geo.admin.ch"
                },
                "display_name": {
                  "de": "Map (Preview) Vorschau map.geo.admin.ch",
                  "en": "Map (Preview)  map.geo.admin.ch",
                  "fr": "Map (Preview) Aper\u00e7u map.geo.admin.ch",
                  "it": "Map (Preview) Previsione map.geo.admin.ch"
                },
                "format": "SERVICE",
                "hash": "",
                "id": "9878d166-fd14-4d88-8476-e411711e8a98",
                "issued": "2013-05-30T00:00:00",
                "language": [
                  "en",
                  "de",
                  "fr",
                  "it"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "",
                "name": {
                  "de": "Map (Preview) Vorschau map.geo.admin.ch",
                  "en": "Map (Preview)  map.geo.admin.ch",
                  "fr": "Map (Preview) Aper\u00e7u map.geo.admin.ch",
                  "it": "Map (Preview) Previsione map.geo.admin.ch"
                },
                "package_id": "51cb0e5e-981d-4fc9-98fb-1a3606005f97",
                "position": 0,
                "protocol": "MAP:Preview",
                "resource_type": null,
                "revision_id": "89cafc04-3520-4238-aba3-e81cc4ec5aac",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "Map (Preview) Vorschau map.geo.admin.ch",
                  "en": "Map (Preview)  map.geo.admin.ch",
                  "fr": "Map (Preview) Aper\u00e7u map.geo.admin.ch",
                  "it": "Map (Preview) Previsione map.geo.admin.ch"
                },
                "url": "https://map.geo.admin.ch/?layers=ch.bav.sachplan-infrastruktur-schiene_anhorung",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-03-30T00:16:39.144486",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "WMS-BGDI Dienst, Layer \"SIS Anh\u00f6rung\"",
                  "en": "WMS-FSDI service, layer \"SIS Consultation\"",
                  "fr": "Service WMS-IFDG, couche \"SIS consultation\"",
                  "it": "Servizio WMS-IFDG, strato \"SIS consultazione\""
                },
                "display_name": {
                  "de": "ch.bav.sachplan-infrastruktur-schiene_anhorung",
                  "en": "ch.bav.sachplan-infrastruktur-schiene_anhorung",
                  "fr": "ch.bav.sachplan-infrastruktur-schiene_anhorung",
                  "it": "ch.bav.sachplan-infrastruktur-schiene_anhorung"
                },
                "format": "WMS",
                "hash": "",
                "id": "fa4a9d5c-aacd-4314-ad4f-0128ed3c5ee0",
                "issued": "2013-05-30T00:00:00",
                "language": [
                  "en",
                  "de",
                  "fr",
                  "it"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "",
                "name": {
                  "de": "ch.bav.sachplan-infrastruktur-schiene_anhorung",
                  "en": "ch.bav.sachplan-infrastruktur-schiene_anhorung",
                  "fr": "ch.bav.sachplan-infrastruktur-schiene_anhorung",
                  "it": "ch.bav.sachplan-infrastruktur-schiene_anhorung"
                },
                "package_id": "51cb0e5e-981d-4fc9-98fb-1a3606005f97",
                "position": 1,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "89cafc04-3520-4238-aba3-e81cc4ec5aac",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "ch.bav.sachplan-infrastruktur-schiene_anhorung",
                  "en": "ch.bav.sachplan-infrastruktur-schiene_anhorung",
                  "fr": "ch.bav.sachplan-infrastruktur-schiene_anhorung",
                  "it": "ch.bav.sachplan-infrastruktur-schiene_anhorung"
                },
                "url": "https://wms.geo.admin.ch/?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-03-30T00:16:39.144498",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "RESTful API von geo.admin.ch",
                  "en": "RESTful API from geo.admin.ch",
                  "fr": "RESTful API de geo.admin.ch",
                  "it": "RESTful API da geo.admin.ch"
                },
                "format": "API",
                "hash": "",
                "id": "2b79537d-d09c-4fb7-9de0-af4948c0ac27",
                "issued": "2013-05-30T00:00:00",
                "language": [
                  "en",
                  "de",
                  "fr",
                  "it"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "",
                "name": {
                  "de": "RESTful API von geo.admin.ch",
                  "en": "RESTful API from geo.admin.ch",
                  "fr": "RESTful API de geo.admin.ch",
                  "it": "RESTful API da geo.admin.ch"
                },
                "package_id": "51cb0e5e-981d-4fc9-98fb-1a3606005f97",
                "position": 2,
                "protocol": "ESRI:REST",
                "resource_type": null,
                "revision_id": "89cafc04-3520-4238-aba3-e81cc4ec5aac",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "RESTful API von geo.admin.ch",
                  "en": "RESTful API from geo.admin.ch",
                  "fr": "RESTful API de geo.admin.ch",
                  "it": "RESTful API da geo.admin.ch"
                },
                "url": "https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bav.sachplan-infrastruktur-schiene_anhorung",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2022-08-05T00:17:06.257515",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "Download der Geodaten von geo.admin.ch",
                  "en": "Download server from geo.admin.ch",
                  "fr": "T\u00e9l\u00e9chargement des g\u00e9odonn\u00e9es de geo.admin.ch",
                  "it": "Download dei geodati da geo.admin.ch"
                },
                "display_name": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "download_url": "https://data.geo.admin.ch/ch.bav.sachplan-infrastruktur-schiene_anhorung/data.zip",
                "format": "ZIP",
                "hash": "",
                "id": "98cb7f9b-5651-460d-b91d-b9299d3077ea",
                "issued": "2013-05-30T00:00:00",
                "language": [
                  "en",
                  "de",
                  "fr",
                  "it"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "",
                "name": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "package_id": "51cb0e5e-981d-4fc9-98fb-1a3606005f97",
                "position": 3,
                "protocol": "WWW:DOWNLOAD-URL",
                "resource_type": null,
                "revision_id": "89cafc04-3520-4238-aba3-e81cc4ec5aac",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "url": "https://data.geo.admin.ch/ch.bav.sachplan-infrastruktur-schiene_anhorung/data.zip",
                "url_type": null
              }
            ],
            "revision_id": "ded3aeda-4040-4791-9822-fbcdb5c47cd4",
            "see_alsos": [],
            "spatial": "Schweiz",
            "state": "active",
            "tags": [],
            "temporals": [],
            "title": {
              "de": "Sachplan Verkehr, Teil Infrastruktur Schiene (SIS): Anh\u00f6rung",
              "en": "Sectoral plan on Transport, rail Infrastructure Section (SIS): consultation",
              "fr": "Plan sectoriel des transports, partie infrastructure rail (SIS): consultation",
              "it": "Piano settoriale dei trasporti, parte infrastruttura ferroviaria (SIS): consultazione"
            },
            "title_for_slug": "sachplan-verkehr-teil-infrastruktur-schiene-sis-anhorung",
            "type": "dataset",
            "url": "https://www.bav.admin.ch/bav/de/home/allgemeine-themen/fachthemen/geoinformation/geobasisdaten/sachplan-verkehr-teil-unterirdischer-gutertransport.html",
            "version": null
          },
          {
            "accrual_periodicity": "http://publications.europa.eu/resource/authority/frequency/IRREG",
            "author": null,
            "author_email": null,
            "conforms_to": [],
            "contact_points": [
              {
                "email": "oev@sz.ch",
                "name": "oev@sz.ch"
              }
            ],
            "coverage": "",
            "creator_user_id": "af084126-f711-4016-a585-70354e997796",
            "description": {
              "de": "Abbildung aller Haltestellen des \u00f6ffentlichen Verkehrs im Kanton Schwyz (Bus, Eisenbahn, Luftseilbahn und Schiff).",
              "en": "Abbildung aller Haltestellen des \u00f6ffentlichen Verkehrs im Kanton Schwyz (Bus, Eisenbahn, Luftseilbahn und Schiff).",
              "fr": "Abbildung aller Haltestellen des \u00f6ffentlichen Verkehrs im Kanton Schwyz (Bus, Eisenbahn, Luftseilbahn und Schiff).",
              "it": "Abbildung aller Haltestellen des \u00f6ffentlichen Verkehrs im Kanton Schwyz (Bus, Eisenbahn, Luftseilbahn und Schiff)."
            },
            "display_name": {},
            "extras": [
              {
                "key": "harvest_object_id",
                "value": "e0629b12-5719-4fdc-a843-2640afa4c50a"
              },
              {
                "key": "harvest_source_id",
                "value": "b709ddda-68fc-48ad-a8e7-050cc9a30077"
              },
              {
                "key": "harvest_source_title",
                "value": "SZ-Kt Geoinformation - Geocat Harvester"
              }
            ],
            "groups": [],
            "id": "1f3e675a-f8eb-4deb-84f9-30c206478eaa",
            "identifier": "2df6cdcd-5186-4d23-aecd-bb84fe1312cd@amt-geoinformation-sz",
            "isopen": false,
            "issued": "2023-10-20T00:00:00",
            "keywords": {
              "de": [
                "seilbahn",
                "schiff",
                "eisenbahn",
                "offentlicher-verkehr"
              ],
              "en": [
                "seilbahn",
                "schiff",
                "eisenbahn",
                "offentlicher-verkehr"
              ],
              "fr": [
                "seilbahn",
                "schiff",
                "eisenbahn",
                "offentlicher-verkehr"
              ],
              "it": [
                "seilbahn",
                "schiff",
                "eisenbahn",
                "offentlicher-verkehr"
              ]
            },
            "language": [
              "de"
            ],
            "license_id": null,
            "license_title": null,
            "maintainer": "oev@sz.ch",
            "maintainer_email": "oev@sz.ch",
            "metadata_created": "2023-03-23T07:28:53.163618",
            "metadata_modified": "2023-12-07T03:54:52.133953",
            "modified": "2023-10-18T00:00:00",
            "name": "haltestellen-des-offentlichen-verkehrs3",
            "num_resources": 2,
            "num_tags": 0,
            "organization": {
              "approval_status": "approved",
              "created": "2023-03-15T14:21:38.843344",
              "description": {
                "de": "Das Amt f\u00fcr Geoinformation verwaltet und ver\u00f6ffentlicht die Geodaten des Kantons Schwyz als OGC-Geodienste und als Datei-Download. Alle aktuell verf\u00fcgbaren Geodaten, welche dem OGD unterliegen, sind hier aufgef\u00fchrt.",
                "en": "",
                "fr": "",
                "it": ""
              },
              "display_name": {
                "de": "Amt f\u00fcr Geoinformation Kanton Schwyz",
                "en": "",
                "fr": "",
                "it": ""
              },
              "groups": [
                {
                  "capacity": "public",
                  "name": "kanton-schwyz"
                }
              ],
              "id": "d5c6800f-f000-42fb-bc35-de2640fb8068",
              "image_display_url": "https://ckan.opendata.swiss/uploads/group/2023-03-15-142138.819580logo-kanton-schwyz.png",
              "image_url": "2023-03-15-142138.819580logo-kanton-schwyz.png",
              "is_organization": true,
              "name": "amt-geoinformation-sz",
              "num_followers": 0,
              "package_count": 209,
              "political_level": "canton",
              "revision_id": "4836c308-7f5c-41c1-9bf5-9b650a5d2cbc",
              "state": "active",
              "tags": [],
              "title": {
                "de": "Amt f\u00fcr Geoinformation Kanton Schwyz",
                "en": "",
                "fr": "",
                "it": ""
              },
              "type": "organization",
              "url": "https://www.sz.ch/geoportal"
            },
            "owner_org": "d5c6800f-f000-42fb-bc35-de2640fb8068",
            "private": false,
            "publisher": "{\"url\": \"https://www.sz.ch/oev\", \"name\": \"SZ Amt f\\u00fcr \\u00f6ffentlichen Verkehr\"}",
            "qualified_relations": [],
            "relations": [
              {
                "label": "WebGIS Kanton Schwyz, Thema einblenden",
                "url": "https://map.geo.sz.ch"
              },
              {
                "label": "geocat.ch permalink",
                "url": "https://www.geocat.ch/geonetwork/srv/ger/catalog.search#/metadata/2df6cdcd-5186-4d23-aecd-bb84fe1312cd"
              }
            ],
            "relationships_as_object": [],
            "relationships_as_subject": [],
            "resources": [
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-03-23T07:28:53.184355",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "WFS-Dienst des Kantons Schwyz",
                  "en": "WFS-Dienst des Kantons Schwyz",
                  "fr": "WFS-Dienst des Kantons Schwyz",
                  "it": "WFS-Dienst des Kantons Schwyz"
                },
                "display_name": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "36dfe95c-3c00-4199-92b0-ed4f633c06b4",
                "issued": "2023-10-20T00:00:00",
                "language": [],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-10-18T00:00:00",
                "name": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "package_id": "1f3e675a-f8eb-4deb-84f9-30c206478eaa",
                "position": 0,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "b5cc015a-feda-4040-b24a-5e372db176f7",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "url": "https://map.geo.sz.ch/mapserv_proxy?SERVICE=WFS&REQUEST=GetCapabilities",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-03-23T07:28:53.184347",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "Haltestellen",
                  "en": "Haltestellen",
                  "fr": "Haltestellen",
                  "it": "Haltestellen"
                },
                "display_name": {
                  "de": "ch.sz.tba_haltestellen.haltestellen",
                  "en": "ch.sz.tba_haltestellen.haltestellen",
                  "fr": "ch.sz.tba_haltestellen.haltestellen",
                  "it": "ch.sz.tba_haltestellen.haltestellen"
                },
                "format": "WMS",
                "hash": "",
                "id": "efe9a8f1-7190-4dcf-8bcd-06c345527bb6",
                "issued": "2023-10-20T00:00:00",
                "language": [],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-10-18T00:00:00",
                "name": {
                  "de": "ch.sz.tba_haltestellen.haltestellen",
                  "en": "ch.sz.tba_haltestellen.haltestellen",
                  "fr": "ch.sz.tba_haltestellen.haltestellen",
                  "it": "ch.sz.tba_haltestellen.haltestellen"
                },
                "package_id": "1f3e675a-f8eb-4deb-84f9-30c206478eaa",
                "position": 1,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "b5cc015a-feda-4040-b24a-5e372db176f7",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "ch.sz.tba_haltestellen.haltestellen",
                  "en": "ch.sz.tba_haltestellen.haltestellen",
                  "fr": "ch.sz.tba_haltestellen.haltestellen",
                  "it": "ch.sz.tba_haltestellen.haltestellen"
                },
                "url": "https://map.geo.sz.ch/mapserv_proxy?SERVICE=WMS&REQUEST=GetCapabilities",
                "url_type": null
              }
            ],
            "revision_id": "980455ea-aa5d-48d4-a018-b8a589a1e205",
            "see_alsos": [],
            "spatial": "Kanton Schwyz (SZ)",
            "state": "active",
            "tags": [],
            "temporals": [],
            "title": {
              "de": "Haltestellen des \u00f6ffentlichen Verkehrs",
              "en": "Haltestellen des \u00f6ffentlichen Verkehrs",
              "fr": "Haltestellen des \u00f6ffentlichen Verkehrs",
              "it": "Haltestellen des \u00f6ffentlichen Verkehrs"
            },
            "title_for_slug": "haltestellen-des-offentlichen-verkehrs3",
            "type": "dataset",
            "version": null
          },
          {
            "accrual_periodicity": "http://publications.europa.eu/resource/authority/frequency/ANNUAL",
            "author": null,
            "author_email": null,
            "conforms_to": [],
            "contact_points": [
              {
                "email": "info.aoev@be.ch",
                "name": "info.aoev@be.ch"
              }
            ],
            "coverage": "",
            "creator_user_id": "af084126-f711-4016-a585-70354e997796",
            "description": {
              "de": "Das Geoprodukt beinhaltet die Linien, Haltestellen und Einzugsgebiete des \u00f6ffentlichen Verkehrs im Kanton Bern f\u00fcr das aktuelle Fahrplanjahr. Die Angaben beziehen sich dabei getrennt auf die sechs verschiedenen Kategorien von Verkehrsmitteln (Bahn, Bus, Tram, Nachtlinien, Seilbahn, Schiff). Im Weiteren steht die \u00d6V-Erschliessungsg\u00fcte \u00ad gest\u00fctzt auf das Massnahmenblatt B_10 des kantonalen Richtplans - differenziert nach sechs verschiedenen G\u00fcteklassen (A, B, C, D, E und F) - als Fl\u00e4chendatensatz zur Verf\u00fcgung. Die Tarifzonen des Tarifverbundes 'Libero' sind ebenfalls Bestandteil dieses Geoprodukts.",
              "en": "",
              "fr": "Le g\u00e9oproduit comprend les lignes, les arr\u00eats et les zones de desserte des transports publics pour l'horaire de l'ann\u00e9e actuelle. Les indications sont pr\u00e9sent\u00e9es s\u00e9par\u00e9ment selon six cat\u00e9gories de moyen de transport (train, bus, tramway, lignes nocturnes, transport \u00e0 c\u00e2ble, bateau). Des informations suppl\u00e9mentaires sont \u00e0 disposition pour les arr\u00eats (nom) et les zones de desserte (nom, nombre d'habitants dans la zone). En outre, la qualit\u00e9 de la desserte par les transports publics peut \u00eatre indiqu\u00e9e d'apr\u00e8s six diff\u00e9rents niveaux de qualit\u00e9 (A, B, C, D, E et F). Ces qualit\u00e9s de la desserte par les transports publics sont d\u00e9finies dans la fiche de mesure B_10 du plan directeur cantonal. Les zones tarifaires de la communaut\u00e9 tarifaire 'Libero' font \u00e9galement part du g\u00e9oproduit.",
              "it": ""
            },
            "display_name": {},
            "extras": [
              {
                "key": "harvest_object_id",
                "value": "5f9023f1-fbeb-450d-95e1-36a1558dfea4"
              },
              {
                "key": "harvest_source_id",
                "value": "7ff03d8b-fdf5-42d3-8204-3aa2477da320"
              },
              {
                "key": "harvest_source_title",
                "value": "Bern-Kt - Geocat Harvester"
              }
            ],
            "groups": [
              {
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "Regionen und St\u00e4dte",
                  "en": "Regions and cities",
                  "fr": "R\u00e9gions et villes",
                  "it": "Regioni e citt\u00e0"
                },
                "id": "5ce2de34-4114-43cd-ab45-e90a42db50aa",
                "image_display_url": "",
                "name": "regi",
                "title": "{\"de\": \"Regionen und St\u00e4dte\", \"en\": \"Regions and cities\", \"fr\": \"R\u00e9gions et villes\", \"it\": \"Regioni e citt\u00e0\"}"
              },
              {
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "Verkehr",
                  "en": "Transport",
                  "fr": "Transports",
                  "it": "Trasporti"
                },
                "id": "896b8bde-68ed-4eb9-ab30-c0ea6f64747f",
                "image_display_url": "",
                "name": "tran",
                "title": "{\"de\": \"Verkehr\", \"en\": \"Transport\", \"fr\": \"Transports\", \"it\": \"Trasporti\"}"
              }
            ],
            "id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
            "identifier": "72c891b2-d2f6-4198-9254-bae477775b35@amt-fuer-geoinformation-des-kantons-bern",
            "isopen": false,
            "issued": "2024-03-14T00:00:00",
            "keywords": {
              "de": [
                "offentlicher-verkehr",
                "verkehrsmittel"
              ],
              "en": [],
              "fr": [
                "transport-en-commun",
                "moyen-de-transport"
              ],
              "it": []
            },
            "language": [
              "de",
              "fr"
            ],
            "license_id": null,
            "license_title": null,
            "maintainer": "info.aoev@be.ch",
            "maintainer_email": "info.aoev@be.ch",
            "metadata_created": "2022-05-04T00:18:12.747400",
            "metadata_modified": "2024-03-15T00:43:21.340386",
            "modified": "2023-01-01T00:00:00",
            "name": "offentlicher-verkehr",
            "num_resources": 103,
            "num_tags": 0,
            "organization": {
              "approval_status": "approved",
              "created": "2020-05-13T11:50:53.273799",
              "description": {
                "de": "Das Amt f\u00fcr Geoinformation ist das Kompetenzzentrum f\u00fcr r\u00e4umliche Informationen im Kanton Bern. Die kantonalen Geodaten sind unter Einhaltung der Nutzungsbedingungen kostenlos nutzbar. Das Geoportal des Kantons Bern ist der zentrale Einstiegspunkt f\u00fcr interaktive Karten, Geodaten und Geodienste der kantonalen Verwaltung.",
                "en": "",
                "fr": "L'Office de la g\u00e9oinformation est le centre de comp\u00e9tence pour l'information spatiale dans le canton de Berne. Les g\u00e9odonn\u00e9es cantonales peuvent \u00eatre utilis\u00e9es gratuitement, sous r\u00e9serve des conditions d'utilisation. Le G\u00e9oportail du canton de Berne est le point d'entr\u00e9e central pour les cartes interactives, les g\u00e9odonn\u00e9es et les g\u00e9oservices de l'administration cantonale.",
                "it": ""
              },
              "display_name": {
                "de": "Amt f\u00fcr Geoinformation des Kantons Bern",
                "en": "",
                "fr": "Office de l'information g\u00e9ographique du canton de Berne",
                "it": ""
              },
              "groups": [
                {
                  "capacity": "public",
                  "name": "kanton-bern-2"
                }
              ],
              "id": "d2028962-fb10-4eba-a79d-1acf52c2792f",
              "image_display_url": "",
              "image_url": "",
              "is_organization": true,
              "name": "amt-fuer-geoinformation-des-kantons-bern",
              "num_followers": 0,
              "package_count": 269,
              "political_level": "canton",
              "revision_id": "d164585f-cff8-4545-8c36-0a87b5531bb3",
              "state": "active",
              "tags": [],
              "title": {
                "de": "Amt f\u00fcr Geoinformation des Kantons Bern",
                "en": "",
                "fr": "Office de l'information g\u00e9ographique du canton de Berne",
                "it": ""
              },
              "type": "organization",
              "url": "https://www.be.ch/geoportal"
            },
            "owner_org": "d2028962-fb10-4eba-a79d-1acf52c2792f",
            "private": false,
            "publisher": "{\"url\": \"https://opendata.swiss/organization/amt-fuer-geoinformation-des-kantons-bern\", \"name\": \"Amt f\\u00fcr \\u00f6ffentlichen Verkehr und Verkehrskoordination\"}",
            "qualified_relations": [],
            "relations": [
              {
                "label": "geocat.ch permalink",
                "url": "https://www.geocat.ch/geonetwork/srv/ger/catalog.search#/metadata/72c891b2-d2f6-4198-9254-bae477775b35"
              }
            ],
            "relationships_as_object": [],
            "relationships_as_subject": [],
            "resources": [
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710082",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_EGKF_VW_13336",
                  "en": "",
                  "fr": "OEVTP_EGKF_VW_13336",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "41b6455a-0f2d-484b-bdd5-2c7b3abb577b",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_EGKF_VW_13336",
                  "en": "",
                  "fr": "OEVTP_EGKF_VW_13336",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 0,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_EGKF_VW_13336",
                  "en": "",
                  "fr": "OEVTP_EGKF_VW_13336",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710107",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_EGKL_VW_14561",
                  "en": "",
                  "fr": "OEVTP_EGKL_VW_14561",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "4588b47e-926e-4e69-84b5-7355ae629099",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_EGKL_VW_14561",
                  "en": "",
                  "fr": "OEVTP_EGKL_VW_14561",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 1,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_EGKL_VW_14561",
                  "en": "",
                  "fr": "OEVTP_EGKL_VW_14561",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710094",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LIBERO_VW_16227",
                  "en": "",
                  "fr": "OEVTP_LIBERO_VW_16227",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "1e278c2e-d780-4ee3-b066-75b73c38de17",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LIBERO_VW_16227",
                  "en": "",
                  "fr": "OEVTP_LIBERO_VW_16227",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 2,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LIBERO_VW_16227",
                  "en": "",
                  "fr": "OEVTP_LIBERO_VW_16227",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710122",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LIBERO_VW_13335",
                  "en": "",
                  "fr": "OEVTP_LIBERO_VW_13335",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "4c46f81d-5e82-4496-b19b-5fdf0aee0ca2",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LIBERO_VW_13335",
                  "en": "",
                  "fr": "OEVTP_LIBERO_VW_13335",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 3,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LIBERO_VW_13335",
                  "en": "",
                  "fr": "OEVTP_LIBERO_VW_13335",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710129",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_EZG_VW_16205",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16205",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "7e9bb799-6ee9-4715-bb50-6e1f154ca2b3",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_EZG_VW_16205",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16205",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 4,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_EZG_VW_16205",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16205",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710080",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_EZG_VW_16212",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16212",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "ea4cd5d0-8a2b-4b85-b300-84162cca8712",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_EZG_VW_16212",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16212",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 5,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_EZG_VW_16212",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16212",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710077",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_EZG_VW_16196",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16196",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "7e732067-507b-41b7-a84d-fdcb27398d1f",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_EZG_VW_16196",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16196",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 6,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_EZG_VW_16196",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16196",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710125",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_EZG_VW_16206",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16206",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "efb6458a-0d3b-47fa-8f13-f30507b79f70",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_EZG_VW_16206",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16206",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 7,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_EZG_VW_16206",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16206",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710132",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_EZG_VW_16235",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16235",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "af6da8f6-60f4-478d-a585-4e4dc7f5262a",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_EZG_VW_16235",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16235",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 8,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_EZG_VW_16235",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16235",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710127",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_EZG_VW_16234",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16234",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "1b159fb7-58c2-415a-b56e-3a6aac444a17",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_EZG_VW_16234",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16234",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 9,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_EZG_VW_16234",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16234",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710119",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_EZG_VW_13326",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_13326",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "adf9b279-80b9-4355-b9f6-a56c04a86cc9",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_EZG_VW_13326",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_13326",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 10,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_EZG_VW_13326",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_13326",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710075",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_18223",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_18223",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "14287a95-440b-4871-b2be-b64340953e2d",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_18223",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_18223",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 11,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_18223",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_18223",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710101",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16209",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16209",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "e751b38c-75b7-43d9-ab5f-6de3c9d8c5fe",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16209",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16209",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 12,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "30ccb319-60d8-4023-9d08-586839a1a2ad",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16209",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16209",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710130",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16225",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16225",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "9b49e3c9-260f-484e-ae74-099ad962d60b",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16225",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16225",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 13,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16225",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16225",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710099",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16255",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16255",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "459887a4-1ee9-4482-b0a8-f4c5a15108b8",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16255",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16255",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 14,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16255",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16255",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710073",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16199",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16199",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "c88dbea2-71be-4e82-b92d-c75daf384aaf",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16199",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16199",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 15,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16199",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16199",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710102",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16201",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16201",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "0d1e610a-bc4b-40dd-831b-8adbe2c12a79",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16201",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16201",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 16,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16201",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16201",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710110",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16217",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16217",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "594b5c93-8b76-46b6-af1d-925b123e8e09",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16217",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16217",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 17,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16217",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16217",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710079",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16216",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16216",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "59bf7d51-5ffe-463a-83f2-b14dafe5afa0",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16216",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16216",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 18,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "30ccb319-60d8-4023-9d08-586839a1a2ad",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16216",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16216",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710091",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16208",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16208",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "3a3b08dc-8b8e-47f3-a881-05b2d67a4367",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16208",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16208",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 19,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "30ccb319-60d8-4023-9d08-586839a1a2ad",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16208",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16208",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710118",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16221",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16221",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "ee384e9c-a091-4ad9-8f0d-2f39e65651af",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16221",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16221",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 20,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16221",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16221",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710088",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16254",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16254",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "3ef6b3dc-fd7a-4774-b11b-43ca17cc5c67",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16254",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16254",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 21,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16254",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16254",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710098",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16210",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16210",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "41e8bfd2-3c1d-45f9-a81e-2f1e61607445",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16210",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16210",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 22,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16210",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16210",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710096",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16242",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16242",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "1f4effb8-9ad4-4e25-abc9-88b6fd2d276d",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16242",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16242",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 23,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16242",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16242",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710109",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16197",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16197",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "80788a2c-d603-4cc4-bde9-68111c842706",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16197",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16197",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 24,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16197",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16197",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710112",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16256",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16256",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "f17124f9-08e8-4fb9-90d5-6cf26598417b",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16256",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16256",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 25,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16256",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16256",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710113",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_13330",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_13330",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "690387af-6f36-4589-b39f-8a0fee5df9fe",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_13330",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_13330",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 26,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_13330",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_13330",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710084",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16348",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16348",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "fe3601bf-ae0c-4f31-bc25-bd32fd485c79",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16348",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16348",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 27,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16348",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16348",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710115",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16355",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16355",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "56da8ee9-d9a8-4181-bf19-181a30a712a7",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16355",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16355",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 28,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "30ccb319-60d8-4023-9d08-586839a1a2ad",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16355",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16355",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710085",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16251",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16251",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "7952ecfe-6eeb-4bbc-ab91-9d95c735c1c9",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16251",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16251",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 29,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16251",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16251",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710134",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16211",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16211",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "be75350a-0ecc-44af-af3a-620f423a74c2",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16211",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16211",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 30,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16211",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16211",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710121",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16213",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16213",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "2ce1a0f3-66aa-48ee-95df-5de5262a8506",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16213",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16213",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 31,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16213",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16213",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710124",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16222",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16222",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "04db44f3-7dac-4ab6-b9d2-66e41c200fa9",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16222",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16222",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 32,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16222",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16222",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710093",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16244",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16244",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "04e40103-3575-4593-ae75-8e38df307ec1",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16244",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16244",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 33,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16244",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16244",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710065",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16218",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16218",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "5b535c3e-ab95-4f87-b4a2-56b94d5ffe7e",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16218",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16218",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 34,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16218",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16218",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710104",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16219",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16219",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "fd30bce5-2cb1-4f0f-a957-887ae92fbc94",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16219",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16219",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 35,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16219",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16219",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710135",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16204",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16204",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "2e0b0b0a-fd7a-4429-82d1-6dd42076b100",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16204",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16204",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 36,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16204",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16204",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710090",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16240",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16240",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "d63750da-c376-41ce-b036-1faa30b83ada",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16240",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16240",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 37,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16240",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16240",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710106",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16214",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16214",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "dd5ec825-50ef-4dd9-86c7-409b0ad8dc16",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16214",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16214",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 38,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16214",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16214",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710138",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16250",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16250",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "d823ee00-8f4f-4fc9-b553-e37d321a2c78",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16250",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16250",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 39,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "30ccb319-60d8-4023-9d08-586839a1a2ad",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16250",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16250",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710087",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16232",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16232",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "c5ba982e-8922-4b24-b180-59d3f21e8d9f",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16232",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16232",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 40,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "30ccb319-60d8-4023-9d08-586839a1a2ad",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16232",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16232",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710116",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16238",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16238",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "ec6adaa1-cf58-4415-b7c0-9bb7345fb40c",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16238",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16238",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 41,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "30ccb319-60d8-4023-9d08-586839a1a2ad",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16238",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16238",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710137",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_13292",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_13292",
                  "it": ""
                },
                "format": "WFS",
                "hash": "",
                "id": "1c1e3e2d-9bd1-4f15-9141-07203e1fb29a",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_13292",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_13292",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 42,
                "protocol": "OGC:WFS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_13292",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_13292",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wfs/MapServer/WFSServer?&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710200",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_EGKF_VW_16249",
                  "en": "",
                  "fr": "OEVTP_EGKF_VW_16249",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "0ce7f249-853f-41c5-9014-47bc68499f5e",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_EGKF_VW_16249",
                  "en": "",
                  "fr": "OEVTP_EGKF_VW_16249",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 43,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_EGKF_VW_16249",
                  "en": "",
                  "fr": "OEVTP_EGKF_VW_16249",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710158",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_EGKF_VW_13336",
                  "en": "",
                  "fr": "OEVTP_EGKF_VW_13336",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "1c118ab2-cefa-41f8-9cbb-c86dc477fc49",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_EGKF_VW_13336",
                  "en": "",
                  "fr": "OEVTP_EGKF_VW_13336",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 44,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_EGKF_VW_13336",
                  "en": "",
                  "fr": "OEVTP_EGKF_VW_13336",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710177",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_EGKF_VW_16230",
                  "en": "",
                  "fr": "OEVTP_EGKF_VW_16230",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "20895bbc-0cd2-4da2-b1c8-707f661d5535",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_EGKF_VW_16230",
                  "en": "",
                  "fr": "OEVTP_EGKF_VW_16230",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 45,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_EGKF_VW_16230",
                  "en": "",
                  "fr": "OEVTP_EGKF_VW_16230",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710199",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_EGKL_VW_14561",
                  "en": "",
                  "fr": "OEVTP_EGKL_VW_14561",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "ad619336-56cd-4721-9d1d-7c37769fb704",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_EGKL_VW_14561",
                  "en": "",
                  "fr": "OEVTP_EGKL_VW_14561",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 46,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_EGKL_VW_14561",
                  "en": "",
                  "fr": "OEVTP_EGKL_VW_14561",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710165",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LIBERO_VW_16227",
                  "en": "",
                  "fr": "OEVTP_LIBERO_VW_16227",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "44ac8565-744d-43d1-985e-ed322f85c7c9",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LIBERO_VW_16227",
                  "en": "",
                  "fr": "OEVTP_LIBERO_VW_16227",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 47,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LIBERO_VW_16227",
                  "en": "",
                  "fr": "OEVTP_LIBERO_VW_16227",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710176",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LIBERO_VW_13335",
                  "en": "",
                  "fr": "OEVTP_LIBERO_VW_13335",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "65797c06-a4e1-4a81-a8d6-8756c7011149",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LIBERO_VW_13335",
                  "en": "",
                  "fr": "OEVTP_LIBERO_VW_13335",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 48,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LIBERO_VW_13335",
                  "en": "",
                  "fr": "OEVTP_LIBERO_VW_13335",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710147",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_EZG_VW_16205",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16205",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "c2c53914-160f-41e9-8205-3ce7c79d7a8b",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_EZG_VW_16205",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16205",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 49,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "30ccb319-60d8-4023-9d08-586839a1a2ad",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_EZG_VW_16205",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16205",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710248",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_EZG_VW_16212",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16212",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "ea1a056a-8c25-49b1-98e4-65c181aee955",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_EZG_VW_16212",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16212",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 50,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_EZG_VW_16212",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16212",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710189",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_EZG_VW_16196",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16196",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "675c24df-9b1b-416a-9ce5-af2d679d02c6",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_EZG_VW_16196",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16196",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 51,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_EZG_VW_16196",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16196",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710164",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_EZG_VW_16206",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16206",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "dc70c113-9d34-4eca-81a6-49e2e299de13",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_EZG_VW_16206",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16206",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 52,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_EZG_VW_16206",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16206",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710193",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_EZG_VW_16235",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16235",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "cb5e4d6a-1f84-4559-92de-32da502bf03b",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_EZG_VW_16235",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16235",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 53,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_EZG_VW_16235",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16235",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710150",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_EZG_VW_16234",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16234",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "73430f91-ed79-4deb-b74f-c318c55475f5",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_EZG_VW_16234",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16234",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 54,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_EZG_VW_16234",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_16234",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710156",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_EZG_VW_13326",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_13326",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "8617eea2-3f97-4714-b3de-fc400672d9bd",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_EZG_VW_13326",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_13326",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 55,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_EZG_VW_13326",
                  "en": "",
                  "fr": "OEVTP_EZG_VW_13326",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710146",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_18223",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_18223",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "46ab87d8-83dc-4c01-8d68-c226a9178f5d",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_18223",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_18223",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 56,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_18223",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_18223",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710237",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16209",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16209",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "90ed77e6-511e-46dd-9661-2ae91cfb1336",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16209",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16209",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 57,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16209",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16209",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710183",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16225",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16225",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "f9d92fe9-5dd5-4c95-a361-8f08e3a4f833",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16225",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16225",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 58,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16225",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16225",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710168",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16255",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16255",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "ffe7cdcf-04e1-4a2a-91e6-87451581d2c1",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16255",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16255",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 59,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16255",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16255",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710173",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16199",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16199",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "c6dd81a6-c7e9-444e-b77b-fbe476b19417",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16199",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16199",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 60,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16199",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16199",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710180",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16201",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16201",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "505caf4d-3ab5-4ccc-aacc-edad17ab80a6",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16201",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16201",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 61,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16201",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16201",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710238",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16217",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16217",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "3077d1d7-67a3-4c5c-a8ac-e3b21993b91a",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16217",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16217",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 62,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16217",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16217",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710187",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16216",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16216",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "c71a856d-7a85-4c36-9003-0ec4792e5bf9",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16216",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16216",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 63,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16216",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16216",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710232",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16208",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16208",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "57eb19a4-d5b4-40fd-9245-3ded1e9db3f5",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16208",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16208",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 64,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16208",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16208",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710143",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16221",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16221",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "58d293c8-cd7e-4bbb-8d00-8920ce245bc0",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16221",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16221",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 65,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16221",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16221",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710154",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16254",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16254",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "c88af437-9065-44bf-b1f1-c20beb030002",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16254",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16254",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 66,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16254",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16254",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710186",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16210",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16210",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "0b0b8f39-d51e-40eb-999f-6f5f5a5ab12d",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16210",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16210",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 67,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16210",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16210",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710149",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16242",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16242",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "c6bd7eac-fc93-410b-bdb7-f4285b1b528e",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16242",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16242",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 68,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "30ccb319-60d8-4023-9d08-586839a1a2ad",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16242",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16242",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710174",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16197",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16197",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "1fac0e58-1c00-43f7-99e9-54fb7b57dc02",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16197",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16197",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 69,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "30ccb319-60d8-4023-9d08-586839a1a2ad",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16197",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16197",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710152",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_16256",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16256",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "910600c3-88ba-4265-bb1a-2b90727f9bd0",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_16256",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16256",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 70,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "30ccb319-60d8-4023-9d08-586839a1a2ad",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_16256",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_16256",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710241",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_LINIE_VW_13330",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_13330",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "9d09af02-9a9a-477c-881a-116fbe7c85f6",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_LINIE_VW_13330",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_13330",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 71,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "30ccb319-60d8-4023-9d08-586839a1a2ad",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_LINIE_VW_13330",
                  "en": "",
                  "fr": "OEVTP_LINIE_VW_13330",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710197",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_18222",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_18222",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "ebd88ea9-747b-4a2b-b7c3-880c64c6a2d3",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_18222",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_18222",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 72,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "30ccb319-60d8-4023-9d08-586839a1a2ad",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_18222",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_18222",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710162",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_18221",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_18221",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "da3ec5d1-4292-44fc-afd8-1245bdf5b734",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_18221",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_18221",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 73,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_18221",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_18221",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710192",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16352",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16352",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "0cf0405b-a114-4084-88c1-f0604efeace3",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16352",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16352",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 74,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16352",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16352",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710195",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16348",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16348",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "52196110-6cd4-4eb4-a03a-407627e9e4ae",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16348",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16348",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 75,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16348",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16348",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710249",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16355",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16355",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "de2d7f51-767f-4522-9029-ea2d1fab6b59",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16355",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16355",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 76,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16355",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16355",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710167",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16251",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16251",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "8d5538cb-2103-4e9d-a807-8b4e8989ba39",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16251",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16251",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 77,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16251",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16251",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710242",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16211",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16211",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "daf4e047-e54c-46f1-8a17-e2235942d588",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16211",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16211",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 78,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16211",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16211",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710244",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16213",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16213",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "bafe654f-61c8-4507-971e-a9024b2c9add",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16213",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16213",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 79,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16213",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16213",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710204",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16730",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16730",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "ad206db0-59e1-4c17-9334-3de107ae1551",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16730",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16730",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 80,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16730",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16730",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710144",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16732",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16732",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "9d2b9bf6-b420-4fb1-9caf-2ad56e9375c6",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16732",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16732",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 81,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16732",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16732",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710234",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16731",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16731",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "f9ef9ea2-2b22-452c-b868-486701d58d5c",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16731",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16731",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 82,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16731",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16731",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710202",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16354",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16354",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "16944727-fad3-4ce0-81c0-0987dac225c7",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16354",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16354",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 83,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "30ccb319-60d8-4023-9d08-586839a1a2ad",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16354",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16354",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710141",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16248",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16248",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "503c6d7f-7bd7-4cbe-8d85-a28aa566468c",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16248",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16248",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 84,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16248",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16248",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710179",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16222",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16222",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "c7a16a61-0bc5-42bf-9f94-6a081c4437af",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16222",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16222",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 85,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16222",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16222",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710182",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16244",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16244",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "af68d2a4-81f5-45de-890d-01ba8b934545",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16244",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16244",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 86,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16244",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16244",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710230",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16218",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16218",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "dd293973-5e05-44d4-bb1b-9ae3e06e5eb5",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16218",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16218",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 87,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16218",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16218",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710140",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16219",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16219",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "b04a0c8a-5d98-4ffb-9897-5a35e64ce0e6",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16219",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16219",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 88,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16219",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16219",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710245",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16350",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16350",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "1c83300a-8b07-4fc7-b3c8-ac04843dc388",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16350",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16350",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 89,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16350",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16350",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710159",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16353",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16353",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "772bc987-0048-454f-b445-788c1782474c",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16353",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16353",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 90,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16353",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16353",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710247",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16351",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16351",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "1ef3fecf-08b8-43b5-ac03-e57aa1bd796e",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16351",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16351",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 91,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16351",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16351",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710235",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16356",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16356",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "5588555c-1a4e-4fc3-9afa-c0668e7bbb2a",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16356",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16356",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 92,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "30ccb319-60d8-4023-9d08-586839a1a2ad",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16356",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16356",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710171",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16349",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16349",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "165051b8-6cad-46bd-9762-57b27f76ad22",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16349",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16349",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 93,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "30ccb319-60d8-4023-9d08-586839a1a2ad",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16349",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16349",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710161",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16347",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16347",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "2dddde93-1df1-49ce-aa97-6916ad980002",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16347",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16347",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 94,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "30ccb319-60d8-4023-9d08-586839a1a2ad",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16347",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16347",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710203",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16204",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16204",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "e8876e01-2186-4718-bff8-15167bc36cfd",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16204",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16204",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 95,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "30ccb319-60d8-4023-9d08-586839a1a2ad",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16204",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16204",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710170",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16240",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16240",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "80905502-b5dc-4560-ade4-6ca1b69d91f5",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16240",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16240",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 96,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "30ccb319-60d8-4023-9d08-586839a1a2ad",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16240",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16240",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710196",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16214",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16214",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "1de6809a-2227-4375-b4fc-3ab0a5026479",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16214",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16214",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 97,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "30ccb319-60d8-4023-9d08-586839a1a2ad",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16214",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16214",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710190",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16250",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16250",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "8abd33d2-ce1d-4bc0-bba5-7589322f8f3e",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16250",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16250",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 98,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "30ccb319-60d8-4023-9d08-586839a1a2ad",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16250",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16250",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710185",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16232",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16232",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "e6c6bc5c-c5eb-4e03-8f7a-591abc8a50d0",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16232",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16232",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 99,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "30ccb319-60d8-4023-9d08-586839a1a2ad",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16232",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16232",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710155",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_16238",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16238",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "1ddad67d-86c9-4ce1-a689-0c7f253343dc",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_16238",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16238",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 100,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "30ccb319-60d8-4023-9d08-586839a1a2ad",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_16238",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_16238",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-11-01T00:20:00.710240",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "OEVTP_HALT_VW_13292",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_13292",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "1f834182-be22-41c4-902b-19d17434a870",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "OEVTP_HALT_VW_13292",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_13292",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 101,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "30ccb319-60d8-4023-9d08-586839a1a2ad",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "OEVTP_HALT_VW_13292",
                  "en": "",
                  "fr": "OEVTP_HALT_VW_13292",
                  "it": ""
                },
                "url": "https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_transportation01_de_ms_wms/MapServer/WMSServer?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2022-08-05T00:19:03.029866",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "Link zum Daten-Download (Zip)",
                  "en": "",
                  "fr": "Lien vers le t\u00e9l\u00e9chargement de donn\u00e9es (Zip)",
                  "it": ""
                },
                "download_url": "https://geofiles.be.ch/geoportal/pub/download/OEVTP/OEVTP.zip",
                "format": "ZIP",
                "hash": "",
                "id": "58cf4177-c43a-4b2b-9ac1-c5bff53c21b9",
                "issued": "2024-03-14T00:00:00",
                "language": [
                  "de",
                  "fr"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-01-01T00:00:00",
                "name": {
                  "de": "Link zum Daten-Download (Zip)",
                  "en": "",
                  "fr": "Lien vers le t\u00e9l\u00e9chargement de donn\u00e9es (Zip)",
                  "it": ""
                },
                "package_id": "0786e547-17aa-43f4-8f8a-caefa265fcdb",
                "position": 102,
                "protocol": "WWW:DOWNLOAD-URL",
                "resource_type": null,
                "revision_id": "0681d8e3-d4da-49ac-9b84-3c8707c85423",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "Link zum Daten-Download (Zip)",
                  "en": "",
                  "fr": "Lien vers le t\u00e9l\u00e9chargement de donn\u00e9es (Zip)",
                  "it": ""
                },
                "url": "https://geofiles.be.ch/geoportal/pub/download/OEVTP/OEVTP.zip",
                "url_type": null
              }
            ],
            "revision_id": "d1500065-5283-4901-9a62-7dc8f536f2f6",
            "see_alsos": [],
            "spatial": "Kanton Bern (erweitert)",
            "state": "active",
            "tags": [],
            "temporals": [],
            "title": {
              "de": "\u00d6ffentlicher Verkehr",
              "en": "",
              "fr": "Transports publics",
              "it": ""
            },
            "title_for_slug": "offentlicher-verkehr",
            "type": "dataset",
            "url": "https://www.agi.dij.be.ch/de/start/geoportal/geodaten/detail.html?type=geoproduct&code=OEVTP",
            "version": null
          },
          {
            "accrual_periodicity": "http://publications.europa.eu/resource/authority/frequency/ANNUAL",
            "author": null,
            "author_email": null,
            "conforms_to": [],
            "contact_points": [
              {
                "email": "info@bav.admin.ch",
                "name": "info@bav.admin.ch"
              }
            ],
            "coverage": "",
            "creator_user_id": "0594d621-c92a-4a32-809c-98e281dc7944",
            "description": {
              "de": "Der Geobasisdatensatz \"Haltestellen des \u00f6ffentlichen Verkehrs\" umfasst die Haltestellen des \u00f6ffentlichen Verkehrs der Schweiz sowie weitere punktuelle, r\u00e4umlich lokalisierbare Orte des \u00f6ffentlichen Verkehrs, die eine betriebliche oder strukturbildende Bedeutung haben (Betriebspunkte).",
              "en": "The basic geo-data set for public transport stops comprises public transport stops in Switzerland and additional selected geo-referenced public transport locations that are of operational or structural importance (operating points).",
              "fr": "Le jeu de g\u00e9odonn\u00e9es de base \u00ab Arr\u00eats des transports publics \u00bb contient les arr\u00eats ainsi que des sites ponctuels g\u00e9or\u00e9f\u00e9renc\u00e9s qui ont une fonction d\u2019exploitation ou structurante dans les transports publics (points de service).",
              "it": "La raccolta di geodati \u00abFermate dei trasporti pubblici\u00bb contiene le fermate dei trasporti pubblici in Svizzera e altri luoghi puntuali georeferenziati che hanno una funzione strutturale o d'esercizio nell'ambito del trasporto pubblico (punti operativi)."
            },
            "display_name": {},
            "documentation": [
              "https://www.geo.admin.ch/de/geo-dienstleistungen/geodienste/linkeddata.html"
            ],
            "extras": [
              {
                "key": "harvest_object_id",
                "value": "fc343171-eb92-4689-8161-81d490966d6f"
              },
              {
                "key": "harvest_source_id",
                "value": "732512f4-310e-468a-8df9-eb5836bcbff4"
              },
              {
                "key": "harvest_source_title",
                "value": "BAV - Geocat Harvester"
              }
            ],
            "groups": [
              {
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "Regionen und St\u00e4dte",
                  "en": "Regions and cities",
                  "fr": "R\u00e9gions et villes",
                  "it": "Regioni e citt\u00e0"
                },
                "id": "5ce2de34-4114-43cd-ab45-e90a42db50aa",
                "image_display_url": "",
                "name": "regi",
                "title": "{\"de\": \"Regionen und St\u00e4dte\", \"en\": \"Regions and cities\", \"fr\": \"R\u00e9gions et villes\", \"it\": \"Regioni e citt\u00e0\"}"
              },
              {
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "Verkehr",
                  "en": "Transport",
                  "fr": "Transports",
                  "it": "Trasporti"
                },
                "id": "896b8bde-68ed-4eb9-ab30-c0ea6f64747f",
                "image_display_url": "",
                "name": "tran",
                "title": "{\"de\": \"Verkehr\", \"en\": \"Transport\", \"fr\": \"Transports\", \"it\": \"Trasporti\"}"
              }
            ],
            "id": "9269314c-aa05-4f9a-aacd-8433c820d42a",
            "identifier": "841d42ff-8177-4e07-a96b-e8e5455ae048@bundesamt-fur-verkehr-bav",
            "isopen": false,
            "issued": "2014-04-30T00:00:00",
            "keywords": {
              "de": [
                "aufbewahrungs--und-archivierungsplanung-aap---bund",
                "geobasisdaten",
                "bgdi-bundesgeodaten-infrastruktur"
              ],
              "en": [
                "conservation-and-archiving-planning-aap---confederation",
                "official-geodata",
                "fsdi-federal-spatial-data-infrastructure"
              ],
              "fr": [
                "planification-de-la-conservation-et-de-larchivage-aap---confederation",
                "geodonnees-de-base",
                "ifdg-linfrastructure-federale-de-donnees-geographiques"
              ],
              "it": [
                "pianificazione-della-conservazione-e-dellarchiviazione-aap---confederazione",
                "geodati-di-base",
                "ifdg-infrastruttura-federale-dei-dati-geografici"
              ]
            },
            "language": [
              "en",
              "de",
              "fr",
              "it"
            ],
            "license_id": null,
            "license_title": null,
            "maintainer": "info@bav.admin.ch",
            "maintainer_email": "info@bav.admin.ch",
            "metadata_created": "2018-02-15T09:13:25.334159",
            "metadata_modified": "2023-12-07T00:34:28.175360",
            "modified": "2015-12-12T00:00:00",
            "name": "haltestellen-des-offentlichen-verkehrs",
            "num_resources": 7,
            "num_tags": 0,
            "organization": {
              "approval_status": "approved",
              "created": "2016-03-04T16:00:58.767460",
              "description": {
                "de": "Das Bundesamt f\u00fcr Verkehr (BAV) ist t\u00e4glich daf\u00fcr besorgt, die schweizerische Politik im Bereich des \u00f6ffentlichen Verkehrs umzusetzen und mitzugestalten. Es realisiert damit wesentliche Teile der von Volk, Parlament und Bundesrat beschlossenen Verkehrspolitik. Die Fachleute des BAV sind zust\u00e4ndig f\u00fcr den Personen- und den G\u00fcterverkehr auf der Schiene, f\u00fcr die Seilbahnen und Sessellifte, die Busse und die Schiffe.",
                "en": "",
                "fr": "L'Office f\u00e9d\u00e9ral des transports (OFT) veille journellement \u00e0 concevoir et \u00e0 mettre en \u0153uvre la politique suisse en mati\u00e8re de transports publics, r\u00e9alisant ainsi des parties essentielles de la politique des transports d\u00e9cid\u00e9e par le peuple, le Parlement et le Conseil f\u00e9d\u00e9ral. Les sp\u00e9cialistes de l'OFT sont comp\u00e9tents pour le transport de voyageurs et de marchandises sur le rail, pour les t\u00e9l\u00e9ph\u00e9riques et les t\u00e9l\u00e9si\u00e8ges, les bus et les bateaux.",
                "it": "L'ufficio federale dei trasporti (UFT) si occupa quotidianamente di attuare e pianificare la politica svizzera nell'ambito dei trasporti pubblici, realizzando cos\u00ec i principi chiave della politica dei trasporti decisa dal Popolo, dal Parlamento e dal Consiglio federale. Gli esperti dell'UFT sono competenti per il trasporto di viaggiatori e di merci con la ferrovia, per gli impianti a fune, gli autobus e i battelli."
              },
              "display_name": {
                "de": "Bundesamt f\u00fcr Verkehr BAV",
                "en": "Federal Office of Transport FOT",
                "fr": "Office f\u00e9d\u00e9ral des transports OFT",
                "it": "Ufficio federale dei trasporti UFT"
              },
              "groups": [],
              "id": "2fddceb9-13df-42cc-8120-79d489582657",
              "image_display_url": "https://ckan.opendata.swiss/uploads/group/BAV_Gebaeude.jpg",
              "image_url": "https://ckan.opendata.swiss/uploads/group/BAV_Gebaeude.jpg",
              "is_organization": true,
              "name": "bundesamt-fur-verkehr-bav",
              "num_followers": 0,
              "package_count": 13,
              "political_level": "confederation",
              "revision_id": "ebd80158-d8a3-416b-b402-e7a7d3174ccc",
              "state": "active",
              "tags": [],
              "title": {
                "de": "Bundesamt f\u00fcr Verkehr BAV",
                "en": "Federal Office of Transport FOT",
                "fr": "Office f\u00e9d\u00e9ral des transports OFT",
                "it": "Ufficio federale dei trasporti UFT"
              },
              "type": "organization",
              "url": ""
            },
            "owner_org": "2fddceb9-13df-42cc-8120-79d489582657",
            "private": false,
            "publisher": "{\"url\": \"https://www.bav.admin.ch/bav/de/home.html\", \"name\": \"Bundesamt f\\u00fcr Verkehr BAV\"}",
            "qualified_relations": [],
            "relations": [
              {
                "label": "https://www.bav.admin.ch/bav/de/home/allgemeine-themen/fachthemen/vollzugshilfen/verzeichnisse.html",
                "url": "https://www.bav.admin.ch/bav/de/home/allgemeine-themen/fachthemen/vollzugshilfen/verzeichnisse.html"
              },
              {
                "label": "geocat.ch permalink",
                "url": "https://www.geocat.ch/geonetwork/srv/ger/catalog.search#/metadata/841d42ff-8177-4e07-a96b-e8e5455ae048"
              }
            ],
            "relationships_as_object": [],
            "relationships_as_subject": [],
            "resources": [
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2022-06-14T00:17:41.714658",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "Vorschau map.geo.admin.ch",
                  "en": "Preview map.geo.admin.ch",
                  "fr": "Aper\u00e7u map.geo.admin.ch",
                  "it": "Previsione map.geo.admin.ch"
                },
                "display_name": {
                  "de": "Map (Preview) Vorschau map.geo.admin.ch",
                  "en": "Map (Preview)  map.geo.admin.ch",
                  "fr": "Map (Preview) Aper\u00e7u map.geo.admin.ch",
                  "it": "Map (Preview) Previsione map.geo.admin.ch"
                },
                "format": "SERVICE",
                "hash": "",
                "id": "55728237-4604-4453-a6e1-39df8151e31f",
                "issued": "2014-04-30T00:00:00",
                "language": [
                  "en",
                  "de",
                  "fr",
                  "it"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2015-12-12T00:00:00",
                "name": {
                  "de": "Map (Preview) Vorschau map.geo.admin.ch",
                  "en": "Map (Preview)  map.geo.admin.ch",
                  "fr": "Map (Preview) Aper\u00e7u map.geo.admin.ch",
                  "it": "Map (Preview) Previsione map.geo.admin.ch"
                },
                "package_id": "9269314c-aa05-4f9a-aacd-8433c820d42a",
                "position": 0,
                "protocol": "MAP:Preview",
                "resource_type": null,
                "revision_id": "2409ea5d-9686-4383-afe9-9c750d179998",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "Map (Preview) Vorschau map.geo.admin.ch",
                  "en": "Map (Preview)  map.geo.admin.ch",
                  "fr": "Map (Preview) Aper\u00e7u map.geo.admin.ch",
                  "it": "Map (Preview) Previsione map.geo.admin.ch"
                },
                "url": "https://map.geo.admin.ch/?layers=ch.bav.haltestellen-oev",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-03-30T00:16:54.584851",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "WMS-BGDI Dienst, Layer \"\u00f6V-Haltestellen\"",
                  "en": "WMS-FSDI service, layer \"Public transport stops\"",
                  "fr": "Service WMS-IFDG, couche \"Arr\u00eats tp\"",
                  "it": "Servizio WMS-IFDG, strato \"Stazioni tp\""
                },
                "display_name": {
                  "de": "ch.bav.haltestellen-oev",
                  "en": "ch.bav.haltestellen-oev",
                  "fr": "ch.bav.haltestellen-oev",
                  "it": "ch.bav.haltestellen-oev"
                },
                "format": "WMS",
                "hash": "",
                "id": "e01634bd-d3ec-44a0-aca6-fdfb725ec0d1",
                "issued": "2014-04-30T00:00:00",
                "language": [
                  "en",
                  "de",
                  "fr",
                  "it"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2015-12-12T00:00:00",
                "name": {
                  "de": "ch.bav.haltestellen-oev",
                  "en": "ch.bav.haltestellen-oev",
                  "fr": "ch.bav.haltestellen-oev",
                  "it": "ch.bav.haltestellen-oev"
                },
                "package_id": "9269314c-aa05-4f9a-aacd-8433c820d42a",
                "position": 1,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "2409ea5d-9686-4383-afe9-9c750d179998",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "ch.bav.haltestellen-oev",
                  "en": "ch.bav.haltestellen-oev",
                  "fr": "ch.bav.haltestellen-oev",
                  "it": "ch.bav.haltestellen-oev"
                },
                "url": "https://wms.geo.admin.ch/?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-03-30T00:16:54.584859",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "WMTS-BGDI Dienst, Layer \"\u00f6V-Haltestellen\"",
                  "en": "WMTS-FSDI service, layer \"Public transport stops\"",
                  "fr": "Service WMTS-IFDG, couche , Layer \"Arr\u00eats tp\"",
                  "it": "Servizio WMTS-IFDG, strato \"Stazioni tp\""
                },
                "display_name": {
                  "de": "ch.bav.haltestellen-oev",
                  "en": "ch.bav.haltestellen-oev",
                  "fr": "ch.bav.haltestellen-oev",
                  "it": "ch.bav.haltestellen-oev"
                },
                "format": "WMTS",
                "hash": "",
                "id": "485c273a-6b9d-4e2e-80e1-540dc81eacd5",
                "issued": "2014-04-30T00:00:00",
                "language": [
                  "en",
                  "de",
                  "fr",
                  "it"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2015-12-12T00:00:00",
                "name": {
                  "de": "ch.bav.haltestellen-oev",
                  "en": "ch.bav.haltestellen-oev",
                  "fr": "ch.bav.haltestellen-oev",
                  "it": "ch.bav.haltestellen-oev"
                },
                "package_id": "9269314c-aa05-4f9a-aacd-8433c820d42a",
                "position": 2,
                "protocol": "OGC:WMTS",
                "resource_type": null,
                "revision_id": "2409ea5d-9686-4383-afe9-9c750d179998",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "ch.bav.haltestellen-oev",
                  "en": "ch.bav.haltestellen-oev",
                  "fr": "ch.bav.haltestellen-oev",
                  "it": "ch.bav.haltestellen-oev"
                },
                "url": "https://wmts.geo.admin.ch/EPSG/3857/1.0.0/WMTSCapabilities.xml?lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2022-08-05T00:17:16.307622",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "Download Server von geo.admin.ch",
                  "en": "Download server from geo.admin.ch",
                  "fr": "Serveur de t\u00e9l\u00e9chargement de geo.admin.ch",
                  "it": "Server di download di geo.admin.ch"
                },
                "display_name": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "download_url": "https://data.geo.admin.ch/ch.bav.haltestellen-oev/data.zip",
                "format": "ZIP",
                "hash": "",
                "id": "34f4247e-f3d8-4fc2-950a-6816e0cb7200",
                "issued": "2014-04-30T00:00:00",
                "language": [
                  "en",
                  "de",
                  "fr",
                  "it"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2015-12-12T00:00:00",
                "name": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "package_id": "9269314c-aa05-4f9a-aacd-8433c820d42a",
                "position": 3,
                "protocol": "WWW:DOWNLOAD-URL",
                "resource_type": null,
                "revision_id": "2409ea5d-9686-4383-afe9-9c750d179998",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "url": "https://data.geo.admin.ch/ch.bav.haltestellen-oev/data.zip",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2022-06-14T00:17:41.714669",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "download_url": "https://data.geo.admin.ch/ch.bav.haltestellen-oev/",
                "format": "",
                "hash": "",
                "id": "d64dccfe-6896-4f20-8c6d-79111d0aa52c",
                "issued": "2014-04-30T00:00:00",
                "language": [
                  "en",
                  "de",
                  "fr",
                  "it"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2015-12-12T00:00:00",
                "name": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "package_id": "9269314c-aa05-4f9a-aacd-8433c820d42a",
                "position": 4,
                "protocol": "WWW:DOWNLOAD-URL",
                "resource_type": null,
                "revision_id": "2409ea5d-9686-4383-afe9-9c750d179998",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "url": "https://data.geo.admin.ch/ch.bav.haltestellen-oev/",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2022-06-14T00:17:41.714670",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "RESTful API von geo.admin.ch",
                  "en": "RESTful API from geo.admin.ch",
                  "fr": "RESTful API de geo.admin.ch",
                  "it": "RESTful API da geo.admin.ch"
                },
                "display_name": {
                  "de": "RESTful API von geo.admin.ch",
                  "en": "RESTful API from geo.admin.ch",
                  "fr": "RESTful API de geo.admin.ch",
                  "it": "RESTful API da geo.admin.ch"
                },
                "format": "API",
                "hash": "",
                "id": "191fec56-be3b-40fc-9e1f-7fa77e2f7970",
                "issued": "2014-04-30T00:00:00",
                "language": [
                  "en",
                  "de",
                  "fr",
                  "it"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2015-12-12T00:00:00",
                "name": {
                  "de": "RESTful API von geo.admin.ch",
                  "en": "RESTful API from geo.admin.ch",
                  "fr": "RESTful API de geo.admin.ch",
                  "it": "RESTful API da geo.admin.ch"
                },
                "package_id": "9269314c-aa05-4f9a-aacd-8433c820d42a",
                "position": 5,
                "protocol": "ESRI:REST",
                "resource_type": null,
                "revision_id": "2409ea5d-9686-4383-afe9-9c750d179998",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "RESTful API von geo.admin.ch",
                  "en": "RESTful API from geo.admin.ch",
                  "fr": "RESTful API de geo.admin.ch",
                  "it": "RESTful API da geo.admin.ch"
                },
                "url": "https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bav.haltestellen-oev",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2022-10-29T00:16:13.748723",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "Linked Data",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "format": "RDF XML",
                "hash": "",
                "id": "d024f3b5-442a-4ff0-85f5-6fddd8531c18",
                "issued": "2014-04-30T00:00:00",
                "language": [
                  "de"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2015-12-12T00:00:00",
                "name": {
                  "de": "Linked Data",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "package_id": "9269314c-aa05-4f9a-aacd-8433c820d42a",
                "position": 6,
                "protocol": "LINKED:DATA:RDF",
                "resource_type": null,
                "revision_id": "2409ea5d-9686-4383-afe9-9c750d179998",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "Linked Data",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "url": "https://geo.ld.admin.ch/data/publicTransportStops",
                "url_type": null
              }
            ],
            "revision_id": "966bb84c-e9dc-4d92-854a-71ae78840d9e",
            "see_alsos": [],
            "spatial": "Schweiz",
            "state": "active",
            "tags": [],
            "temporals": [],
            "title": {
              "de": "Haltestellen des \u00f6ffentlichen Verkehrs",
              "en": "Public transport stops",
              "fr": "Arr\u00eats des transports publics",
              "it": "Stazioni per i trasporti pubblici"
            },
            "title_for_slug": "haltestellen-des-offentlichen-verkehrs",
            "type": "dataset",
            "url": "https://www.bav.admin.ch/bav/de/home/allgemeine-themen/fachthemen/geoinformation/geobasisdaten/haltestellen-des-oeffentlichen-verkehrs.html",
            "version": null
          },
          {
            "accrual_periodicity": "http://publications.europa.eu/resource/authority/frequency/ANNUAL",
            "author": null,
            "author_email": null,
            "conforms_to": [],
            "contact_points": [
              {
                "email": "geodata@swisstopo.ch",
                "name": "geodata@swisstopo.ch"
              }
            ],
            "coverage": "",
            "creator_user_id": "af084126-f711-4016-a585-70354e997796",
            "description": {
              "de": "swissTLM3D \u00fcbrige Bahnen beinhaltet verschiedene Seilbahnarten sowie andere mechanische Transportsysteme. Es ist Bestandteil des Datensatzes swissTLM3D. Mit seiner hohen Genauigkeit und dem Einbezug der dritten Dimension ist swissTLM3D der umfassendste 3D-Vektordatensatz der Schweiz. Im Geoportal des Bundes werden die Objekte der Ebene \"\u00fcbrige Bahnen\" entsprechend der ausgew\u00e4hlten Zoomstufe schrittweise dargestellt.",
              "en": "swissTLM3D other transportations contains the different types of cable railway and other types of mechanical transport. It is part of the dataset swissTLM3D. With a high accuracy and the incorporation of a third dimension, swissTLM3D is the most extensive 3D vector data set of Switzerland. In the federal geoportal the objects of the layer \"other transportations\" are displayed gradually according to the different zoomlevels.",
              "fr": "swissTLM3D autres transports comprend les diff\u00e9rents transports \u00e0 c\u00e2ble ainsi que d'autres types de transport m\u00e9canique. Il fait partie du jeu de donn\u00e9es swissTLM3D. Avec une haute pr\u00e9cision et l'int\u00e9gration de la troisi\u00e8me dimension, swissTLM3D constitue le jeu de donn\u00e9es vectorielles en 3D le plus complet de la Suisse. Dans le g\u00e9oportail f\u00e9d\u00e9ral, les objets de la couche \" autres transports\" sont affich\u00e9s progressivement en fonction des niveaux de zoom.",
              "it": "swissTLM3D altri trasporti comprende i differenti tipi di trasporto a fune e altri tipi di trasporto meccanico. Fa parte del set di dati swissTLM3D. Il prodotto swissTLM3D offre un'alta precisione e include anche la terza dimensione, si tratta della raccolta dati vettoriali in 3D pi\u00f9 completa del territorio svizzero. All'interno del geoportale federale, gli oggetti del layer \"altri trasporti \" sono visualizzabili progressivamente, in funzione del livello di zoom selezionato."
            },
            "display_name": {},
            "extras": [
              {
                "key": "harvest_object_id",
                "value": "7bde722b-9647-4782-96d9-bb48efbe6f1c"
              },
              {
                "key": "harvest_source_id",
                "value": "b0377d3c-5583-4c7d-81bc-ec7aa8f60ae2"
              },
              {
                "key": "harvest_source_title",
                "value": "Swisstopo - Geocat Harvester"
              }
            ],
            "groups": [
              {
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "Regionen und St\u00e4dte",
                  "en": "Regions and cities",
                  "fr": "R\u00e9gions et villes",
                  "it": "Regioni e citt\u00e0"
                },
                "id": "5ce2de34-4114-43cd-ab45-e90a42db50aa",
                "image_display_url": "",
                "name": "regi",
                "title": "{\"de\": \"Regionen und St\u00e4dte\", \"en\": \"Regions and cities\", \"fr\": \"R\u00e9gions et villes\", \"it\": \"Regioni e citt\u00e0\"}"
              },
              {
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "Umwelt",
                  "en": "Environment",
                  "fr": "Environnement",
                  "it": "Ambiente"
                },
                "id": "ab2cc387-d129-4d76-b78d-517326d2a772",
                "image_display_url": "",
                "name": "envi",
                "title": "{\"de\": \"Umwelt\", \"en\": \"Environment\", \"fr\": \"Environnement\", \"it\": \"Ambiente\"}"
              },
              {
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "Verkehr",
                  "en": "Transport",
                  "fr": "Transports",
                  "it": "Trasporti"
                },
                "id": "896b8bde-68ed-4eb9-ab30-c0ea6f64747f",
                "image_display_url": "",
                "name": "tran",
                "title": "{\"de\": \"Verkehr\", \"en\": \"Transport\", \"fr\": \"Transports\", \"it\": \"Trasporti\"}"
              }
            ],
            "id": "ea79dbf3-4d4a-4e8f-8c80-e65ff5b7f2f7",
            "identifier": "ffc0267e-aca8-49ac-8f3e-86c9beca51f2@bundesamt-fur-landestopografie-swisstopo",
            "isopen": false,
            "issued": "2011-04-01T00:00:00",
            "keywords": {
              "de": [
                "verkehrsnetz",
                "einzelobjekt",
                "aufbewahrungs--und-archivierungsplanung-aap---bund",
                "landschaftsmodell",
                "geobasisdaten",
                "gis-geografisches-informationssystem",
                "geografische-bezeichnungen",
                "verkehrsnetze",
                "bgdi-bundesgeodaten-infrastruktur"
              ],
              "en": [
                "traffic-network",
                "single-object",
                "conservation-and-archiving-planning-aap---confederation",
                "landscape-model",
                "official-geodata",
                "gis-geographic-information-system",
                "geographical-names",
                "transport-networks",
                "fsdi-federal-spatial-data-infrastructure"
              ],
              "fr": [
                "reseau-de-transport",
                "objet-divers",
                "planification-de-la-conservation-et-de-larchivage-aap---confederation",
                "modele-du-territoire",
                "geodonnees-de-base",
                "sig-systeme-dinformation-geographique",
                "denominations-geographiques",
                "reseaux-de-transport",
                "ifdg-linfrastructure-federale-de-donnees-geographiques"
              ],
              "it": [
                "rete-di-trasporto",
                "oggetto-singolo",
                "pianificazione-della-conservazione-e-dellarchiviazione-aap---confederazione",
                "modello-del-territorio",
                "geodati-di-base",
                "sig-sistema-informativo-geografico",
                "nomi-geografici",
                "reti-di-trasporto",
                "ifdg-infrastruttura-federale-dei-dati-geografici"
              ]
            },
            "language": [
              "en",
              "de",
              "fr",
              "it"
            ],
            "license_id": null,
            "license_title": null,
            "maintainer": "geodata@swisstopo.ch",
            "maintainer_email": "geodata@swisstopo.ch",
            "metadata_created": "2021-02-27T04:00:29.708716",
            "metadata_modified": "2024-03-06T03:54:02.216319",
            "modified": "2024-03-06T00:00:00",
            "name": "swisstlm3d-ubrige-bahn",
            "num_resources": 5,
            "num_tags": 0,
            "organization": {
              "approval_status": "approved",
              "created": "2015-11-30T12:12:55.529975",
              "description": {
                "de": "Das Kompetenzzentrum der Schweizerischen Eidgenossenschaft f\u00fcr Geoinformation, d.h. f\u00fcr die Beschreibung, Darstellung und Archivierung von raumbezogenen Geodaten.",
                "en": "The centre of competence for the Swiss Confederation responsible for geographical reference data, for instance the description, representation and archiving of geographic spatial data.",
                "fr": "Le centre de comp\u00e9tence de la Conf\u00e9d\u00e9ration suisse pour les informations g\u00e9ographiques, c'est-\u00e0-dire pour la description, la repr\u00e9sentation et l\u2019archivage de donn\u00e9es \u00e0 r\u00e9f\u00e9rence spatiale.",
                "it": "Il centro d\u2019eccellenza della Confederazione Elvetica per geoinformazione, cio\u00e8 per la descrizione, rappresentazione e archiviazione dei dati georeferenziati (geodati)."
              },
              "display_name": {
                "de": "Bundesamt f\u00fcr Landestopografie swisstopo",
                "en": "Federal Office of Topography swisstopo",
                "fr": "Office f\u00e9d\u00e9ral de topographie swisstopo",
                "it": "Ufficio federale di topografia swisstopo"
              },
              "groups": [],
              "id": "ddd28bac-6890-474c-84cb-97a85db8d2f1",
              "image_display_url": "https://ckan.opendata.swiss/uploads/group/IMG_1857.jpg",
              "image_url": "https://ckan.opendata.swiss/uploads/group/IMG_1857.jpg",
              "is_organization": true,
              "name": "bundesamt-fur-landestopografie-swisstopo",
              "num_followers": 0,
              "package_count": 142,
              "political_level": "confederation",
              "revision_id": "5304c193-6039-489e-b273-1028269f6b40",
              "state": "active",
              "tags": [],
              "title": {
                "de": "Bundesamt f\u00fcr Landestopografie swisstopo",
                "en": "Federal Office of Topography swisstopo",
                "fr": "Office f\u00e9d\u00e9ral de topographie swisstopo",
                "it": "Ufficio federale di topografia swisstopo"
              },
              "type": "organization",
              "url": ""
            },
            "owner_org": "ddd28bac-6890-474c-84cb-97a85db8d2f1",
            "private": false,
            "publisher": "{\"url\": \"https://www.swisstopo.ch\", \"name\": \"Bundesamt f\\u00fcr Landestopografie swisstopo\"}",
            "qualified_relations": [
              {
                "had_role": "http://www.iana.org/assignments/relation/related",
                "relation": "https://ckan.opendata.swiss/perma/73856ca2-f21d-4cc9-90f6-f3e8375555df@bundesamt-fur-landestopografie-swisstopo"
              }
            ],
            "relations": [
              {
                "label": "map.geo.admin.ch",
                "url": "https://map.geo.admin.ch/?topic=swisstopo&lang=de&bgLayer=voidLayer&catalogNodes=1436,1396,1397&layers=ch.swisstopo.swisstlm3d-karte-farbe&X=192000.00&Y=622250.00&zoom=2"
              },
              {
                "label": "geocat.ch permalink",
                "url": "https://www.geocat.ch/geonetwork/srv/ger/catalog.search#/metadata/ffc0267e-aca8-49ac-8f3e-86c9beca51f2"
              }
            ],
            "relationships_as_object": [],
            "relationships_as_subject": [],
            "resources": [
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2022-06-13T11:30:23.702492",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "Vorschau map.geo.admin.ch",
                  "en": "Preview map.geo.admin.ch",
                  "fr": "Aper\u00e7u map.geo.admin.ch",
                  "it": "Previsione map.geo.admin.ch"
                },
                "display_name": {
                  "de": "Map (Preview) Vorschau map.geo.admin.ch",
                  "en": "Map (Preview)  map.geo.admin.ch",
                  "fr": "Map (Preview) Aper\u00e7u map.geo.admin.ch",
                  "it": "Map (Preview) Previsione map.geo.admin.ch"
                },
                "format": "SERVICE",
                "hash": "",
                "id": "3b9e4c34-f769-4555-867d-8384bf68d3cc",
                "issued": "2011-04-01T00:00:00",
                "language": [
                  "en",
                  "de",
                  "fr",
                  "it"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2024-03-06T00:00:00",
                "name": {
                  "de": "Map (Preview) Vorschau map.geo.admin.ch",
                  "en": "Map (Preview)  map.geo.admin.ch",
                  "fr": "Map (Preview) Aper\u00e7u map.geo.admin.ch",
                  "it": "Map (Preview) Previsione map.geo.admin.ch"
                },
                "package_id": "ea79dbf3-4d4a-4e8f-8c80-e65ff5b7f2f7",
                "position": 0,
                "protocol": "MAP:Preview",
                "resource_type": null,
                "revision_id": "0a1f10ae-1331-409f-b9a6-c5e5aa332bef",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "Map (Preview) Vorschau map.geo.admin.ch",
                  "en": "Map (Preview)  map.geo.admin.ch",
                  "fr": "Map (Preview) Aper\u00e7u map.geo.admin.ch",
                  "it": "Map (Preview) Previsione map.geo.admin.ch"
                },
                "url": "https://map.geo.admin.ch/?layers=ch.swisstopo.swisstlm3d-uebrigerverkehr",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-03-30T00:56:16.485145",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "WMTS-BGDI Dienst, Layer \"Seilbahnen swissTLM3D\"",
                  "en": "WMTS-FSDI service, layer \"Cableways swissTLM3D\"",
                  "fr": "Service WMTS-IFDG, couche , Layer \"Transports \u00e0 c\u00e2ble swissTLM3D\"",
                  "it": "Servizio WMTS-IFDG, strato \"Trasporti a fune swissTLM3D\""
                },
                "display_name": {
                  "de": "ch.swisstopo.swisstlm3d-uebrigerverkehr",
                  "en": "ch.swisstopo.swisstlm3d-uebrigerverkehr",
                  "fr": "ch.swisstopo.swisstlm3d-uebrigerverkehr",
                  "it": "ch.swisstopo.swisstlm3d-uebrigerverkehr"
                },
                "format": "WMTS",
                "hash": "",
                "id": "557007ac-a11f-40d5-b1e1-3032b17f3e70",
                "issued": "2011-04-01T00:00:00",
                "language": [
                  "en",
                  "de",
                  "fr",
                  "it"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2024-03-06T00:00:00",
                "name": {
                  "de": "ch.swisstopo.swisstlm3d-uebrigerverkehr",
                  "en": "ch.swisstopo.swisstlm3d-uebrigerverkehr",
                  "fr": "ch.swisstopo.swisstlm3d-uebrigerverkehr",
                  "it": "ch.swisstopo.swisstlm3d-uebrigerverkehr"
                },
                "package_id": "ea79dbf3-4d4a-4e8f-8c80-e65ff5b7f2f7",
                "position": 1,
                "protocol": "OGC:WMTS",
                "resource_type": null,
                "revision_id": "0a1f10ae-1331-409f-b9a6-c5e5aa332bef",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "ch.swisstopo.swisstlm3d-uebrigerverkehr",
                  "en": "ch.swisstopo.swisstlm3d-uebrigerverkehr",
                  "fr": "ch.swisstopo.swisstlm3d-uebrigerverkehr",
                  "it": "ch.swisstopo.swisstlm3d-uebrigerverkehr"
                },
                "url": "https://wmts.geo.admin.ch/EPSG/3857/1.0.0/WMTSCapabilities.xml?lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-03-21T00:46:04.764654",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "Seilbahnen swissTLM3D",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "ch.swisstopo.swisstlm3d-uebrigerverkehr",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "format": "WMS",
                "hash": "",
                "id": "b7a642d8-5c84-412d-bca9-71afb7428a91",
                "issued": "2011-04-01T00:00:00",
                "language": [
                  "en",
                  "de",
                  "fr",
                  "it"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2024-03-06T00:00:00",
                "name": {
                  "de": "ch.swisstopo.swisstlm3d-uebrigerverkehr",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "package_id": "ea79dbf3-4d4a-4e8f-8c80-e65ff5b7f2f7",
                "position": 2,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "0a1f10ae-1331-409f-b9a6-c5e5aa332bef",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "ch.swisstopo.swisstlm3d-uebrigerverkehr",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "url": "https://wms.geo.admin.ch/?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2024-01-25T02:16:21.297555",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "Shop",
                  "en": "Shop",
                  "fr": "Shop",
                  "it": "Shop"
                },
                "display_name": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "download_url": "https://www.swisstopo.admin.ch/de/landschaftsmodell-swisstlm3d",
                "format": "",
                "hash": "",
                "id": "ef90188c-543a-4062-b578-cab023526eef",
                "issued": "2011-04-01T00:00:00",
                "language": [
                  "en",
                  "de",
                  "fr",
                  "it"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2024-03-06T00:00:00",
                "name": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "package_id": "ea79dbf3-4d4a-4e8f-8c80-e65ff5b7f2f7",
                "position": 3,
                "protocol": "WWW:DOWNLOAD-URL",
                "resource_type": null,
                "revision_id": "0a1f10ae-1331-409f-b9a6-c5e5aa332bef",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "url": "https://www.swisstopo.admin.ch/de/landschaftsmodell-swisstlm3d",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2022-06-13T11:30:23.702503",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "RESTful API von geo.admin.ch",
                  "en": "RESTful API from geo.admin.ch",
                  "fr": "RESTful API de geo.admin.ch",
                  "it": "RESTful API da geo.admin.ch"
                },
                "display_name": {
                  "de": "RESTful API von geo.admin.ch",
                  "en": "RESTful API from geo.admin.ch",
                  "fr": "RESTful API de geo.admin.ch",
                  "it": "RESTful API da geo.admin.ch"
                },
                "format": "API",
                "hash": "",
                "id": "18f641b5-a2eb-45a3-a635-611d336822ec",
                "issued": "2011-04-01T00:00:00",
                "language": [
                  "en",
                  "de",
                  "fr",
                  "it"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2024-03-06T00:00:00",
                "name": {
                  "de": "RESTful API von geo.admin.ch",
                  "en": "RESTful API from geo.admin.ch",
                  "fr": "RESTful API de geo.admin.ch",
                  "it": "RESTful API da geo.admin.ch"
                },
                "package_id": "ea79dbf3-4d4a-4e8f-8c80-e65ff5b7f2f7",
                "position": 4,
                "protocol": "ESRI:REST",
                "resource_type": null,
                "revision_id": "0a1f10ae-1331-409f-b9a6-c5e5aa332bef",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "RESTful API von geo.admin.ch",
                  "en": "RESTful API from geo.admin.ch",
                  "fr": "RESTful API de geo.admin.ch",
                  "it": "RESTful API da geo.admin.ch"
                },
                "url": "https://api3.geo.admin.ch/rest/services/api/MapServer/ch.swisstopo.swisstlm3d-uebrigerverkehr",
                "url_type": null
              }
            ],
            "revision_id": "24961d4d-68ca-4134-b04d-d26997c89b55",
            "see_alsos": [],
            "spatial": "Schweiz",
            "state": "active",
            "tags": [],
            "temporals": [],
            "title": {
              "de": "swissTLM3D \u00dcbrige Bahn",
              "en": "swissTLM3D Other transportations",
              "fr": "swissTLM3D Autres transports",
              "it": "swissTLM3D Altri trasporti"
            },
            "title_for_slug": "swisstlm3d-ubrige-bahn",
            "type": "dataset",
            "url": "https://www.swisstopo.admin.ch/de/landschaftsmodell-swisstlm3d",
            "version": null
          },
          {
            "accrual_periodicity": "http://publications.europa.eu/resource/authority/frequency/DAILY",
            "author": null,
            "author_email": null,
            "conforms_to": [],
            "contact_points": [
              {
                "email": "info@bav.admin.ch",
                "name": "info@bav.admin.ch"
              }
            ],
            "coverage": "",
            "creator_user_id": "0594d621-c92a-4a32-809c-98e281dc7944",
            "description": {
              "de": "\u00d6ffentlich zug\u00e4nglicher Kataster der belasteten Standorte im Bereich des \u00f6ffentlichen Verkehrs. Der Kataster gibt Auskunft \u00fcber die belasteten Standorte (gem\u00e4ss Altlasten-Verordnung), welche in der Vollzugszust\u00e4ndigkeit des Bundesamt f\u00fcr Verkehr (BAV) liegen. Es handelt sich dabei um Bauten und Anlagen von eidgen\u00f6ssisch konzessionierten Eisenbahnen, Trolleybussen, Binnenschifffahrtsunternehmen und Seilbahnen, welche anhand der aktuellen Nutzung ganz oder \u00fcberwiegend dem Betrieb der jeweiligen Infrastruktur- oder Transportunternehmen dienen.",
              "en": "A publicly available register of the polluted sites in the area of public transport. The register provides information about the polluted sites (in accordance with the Contaminated Sites Ordinance) which come under the enforcement responsibility of the Federal Office of Transport (FOT). These are buildings and facilities for railways, trolley bus systems, inland shipping companies and cableways with federal concessions, which are currently used mainly or completely for the business of the relevant infrastructure or transport companies.",
              "fr": "Cadastre public des sites pollu\u00e9s dans le domaine des transports publics. Le cadastre fournit des renseignements sur les sites pollu\u00e9s (selon l\u2019ordonnance sur l\u2019assainissement des sites pollu\u00e9s), qui rel\u00e8vent de la comp\u00e9tence d\u2019ex\u00e9cution de l\u2019Office f\u00e9d\u00e9ral des transports (OFT). Il s\u2019agit de constructions et d\u2019installations d\u2019entreprises ferroviaires, de trolleybus, d\u2019entreprises de navigation int\u00e9rieure et d\u2019installations \u00e0 c\u00e2bles au b\u00e9n\u00e9fice d\u2019une concession f\u00e9d\u00e9rale, dont l\u2019utilisation actuelle est consacr\u00e9e int\u00e9gralement ou principalement \u00e0 l\u2019exploitation ou \u00e0 l\u2019infrastructure des entreprises de transport.",
              "it": "Catasto pubblico dei siti inquinati concernente il settore dei trasporti pubblici. Il catasto fornisce informazioni sui siti inquinati (ai sensi dell\u2019ordinanza sul risanamento dei siti inquinati) che rientrano nell\u2019ambito di competenza dell\u2019Ufficio federale dei trasporti (UFT). Si tratta di costruzioni e impianti di imprese ferroviarie, di filobus, di navigazione e di trasporto a fune titolari di una concessione federale, che attualmente sono utilizzati soltanto o prevalentemente per l\u2019esercizio o l\u2019infrastruttura delle imprese di trasporto."
            },
            "display_name": {},
            "extras": [
              {
                "key": "harvest_object_id",
                "value": "199d6a68-a63c-4912-874d-108a30d181d6"
              },
              {
                "key": "harvest_source_id",
                "value": "732512f4-310e-468a-8df9-eb5836bcbff4"
              },
              {
                "key": "harvest_source_title",
                "value": "BAV - Geocat Harvester"
              }
            ],
            "groups": [
              {
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "Regionen und St\u00e4dte",
                  "en": "Regions and cities",
                  "fr": "R\u00e9gions et villes",
                  "it": "Regioni e citt\u00e0"
                },
                "id": "5ce2de34-4114-43cd-ab45-e90a42db50aa",
                "image_display_url": "",
                "name": "regi",
                "title": "{\"de\": \"Regionen und St\u00e4dte\", \"en\": \"Regions and cities\", \"fr\": \"R\u00e9gions et villes\", \"it\": \"Regioni e citt\u00e0\"}"
              },
              {
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "Umwelt",
                  "en": "Environment",
                  "fr": "Environnement",
                  "it": "Ambiente"
                },
                "id": "ab2cc387-d129-4d76-b78d-517326d2a772",
                "image_display_url": "",
                "name": "envi",
                "title": "{\"de\": \"Umwelt\", \"en\": \"Environment\", \"fr\": \"Environnement\", \"it\": \"Ambiente\"}"
              }
            ],
            "id": "11f567c8-33df-4eb5-8dfc-479090ccdba3",
            "identifier": "c022c6b6-67ad-4023-8d01-cd0d89cf73a6@bundesamt-fur-verkehr-bav",
            "isopen": false,
            "issued": "2013-01-01T00:00:00",
            "keywords": {
              "de": [
                "geobasisdaten",
                "aufbewahrungs--und-archivierungsplanung-aap---bund",
                "bahnhof",
                "eisenbahn",
                "altlast",
                "offentlicher-verkehr",
                "umweltuberwachung",
                "bgdi-bundesgeodaten-infrastruktur"
              ],
              "en": [
                "official-geodata",
                "conservation-and-archiving-planning-aap---confederation",
                "station",
                "railway",
                "old-hazardous-site",
                "public-transport",
                "environmental-monitoring-facilities",
                "fsdi-federal-spatial-data-infrastructure"
              ],
              "fr": [
                "geodonnees-de-base",
                "planification-de-la-conservation-et-de-larchivage-aap---confederation",
                "gare",
                "voie-ferree",
                "site-ancien-dangereux",
                "transport-en-commun",
                "installations-de-suivi-environnemental",
                "ifdg-linfrastructure-federale-de-donnees-geographiques"
              ],
              "it": [
                "geodati-di-base",
                "pianificazione-della-conservazione-e-dellarchiviazione-aap---confederazione",
                "stazione",
                "ferrovia",
                "discarica-dismessa",
                "trasporto-pubblico",
                "impianti-di-monitoraggio-ambientale",
                "ifdg-infrastruttura-federale-dei-dati-geografici"
              ]
            },
            "language": [
              "en",
              "de",
              "fr",
              "it"
            ],
            "license_id": null,
            "license_title": null,
            "maintainer": "markus.ammann@bav.admin.ch",
            "maintainer_email": "markus.ammann@bav.admin.ch",
            "metadata_created": "2018-02-15T09:13:37.713564",
            "metadata_modified": "2023-12-07T00:33:44.080100",
            "modified": "",
            "name": "kataster-der-belasteten-standorte-im-bereich-des-offentlichen-verkehrs-kbs-bav",
            "num_resources": 4,
            "num_tags": 0,
            "organization": {
              "approval_status": "approved",
              "created": "2016-03-04T16:00:58.767460",
              "description": {
                "de": "Das Bundesamt f\u00fcr Verkehr (BAV) ist t\u00e4glich daf\u00fcr besorgt, die schweizerische Politik im Bereich des \u00f6ffentlichen Verkehrs umzusetzen und mitzugestalten. Es realisiert damit wesentliche Teile der von Volk, Parlament und Bundesrat beschlossenen Verkehrspolitik. Die Fachleute des BAV sind zust\u00e4ndig f\u00fcr den Personen- und den G\u00fcterverkehr auf der Schiene, f\u00fcr die Seilbahnen und Sessellifte, die Busse und die Schiffe.",
                "en": "",
                "fr": "L'Office f\u00e9d\u00e9ral des transports (OFT) veille journellement \u00e0 concevoir et \u00e0 mettre en \u0153uvre la politique suisse en mati\u00e8re de transports publics, r\u00e9alisant ainsi des parties essentielles de la politique des transports d\u00e9cid\u00e9e par le peuple, le Parlement et le Conseil f\u00e9d\u00e9ral. Les sp\u00e9cialistes de l'OFT sont comp\u00e9tents pour le transport de voyageurs et de marchandises sur le rail, pour les t\u00e9l\u00e9ph\u00e9riques et les t\u00e9l\u00e9si\u00e8ges, les bus et les bateaux.",
                "it": "L'ufficio federale dei trasporti (UFT) si occupa quotidianamente di attuare e pianificare la politica svizzera nell'ambito dei trasporti pubblici, realizzando cos\u00ec i principi chiave della politica dei trasporti decisa dal Popolo, dal Parlamento e dal Consiglio federale. Gli esperti dell'UFT sono competenti per il trasporto di viaggiatori e di merci con la ferrovia, per gli impianti a fune, gli autobus e i battelli."
              },
              "display_name": {
                "de": "Bundesamt f\u00fcr Verkehr BAV",
                "en": "Federal Office of Transport FOT",
                "fr": "Office f\u00e9d\u00e9ral des transports OFT",
                "it": "Ufficio federale dei trasporti UFT"
              },
              "groups": [],
              "id": "2fddceb9-13df-42cc-8120-79d489582657",
              "image_display_url": "https://ckan.opendata.swiss/uploads/group/BAV_Gebaeude.jpg",
              "image_url": "https://ckan.opendata.swiss/uploads/group/BAV_Gebaeude.jpg",
              "is_organization": true,
              "name": "bundesamt-fur-verkehr-bav",
              "num_followers": 0,
              "package_count": 13,
              "political_level": "confederation",
              "revision_id": "ebd80158-d8a3-416b-b402-e7a7d3174ccc",
              "state": "active",
              "tags": [],
              "title": {
                "de": "Bundesamt f\u00fcr Verkehr BAV",
                "en": "Federal Office of Transport FOT",
                "fr": "Office f\u00e9d\u00e9ral des transports OFT",
                "it": "Ufficio federale dei trasporti UFT"
              },
              "type": "organization",
              "url": ""
            },
            "owner_org": "2fddceb9-13df-42cc-8120-79d489582657",
            "private": false,
            "publisher": "{\"url\": \"https://www.bav.admin.ch/bav/de/home.html\", \"name\": \"Bundesamt f\\u00fcr Verkehr BAV\"}",
            "qualified_relations": [],
            "relations": [
              {
                "label": "Spezialisiertes Geoportal",
                "url": "https://www.bav.admin.ch/bav/de/home/allgemeine-themen/fachthemen/geoinformation/geobasisdaten/kataster-der-belasteten-standorte-im-bereich-oev.html"
              },
              {
                "label": "geocat.ch permalink",
                "url": "https://www.geocat.ch/geonetwork/srv/ger/catalog.search#/metadata/c022c6b6-67ad-4023-8d01-cd0d89cf73a6"
              }
            ],
            "relationships_as_object": [],
            "relationships_as_subject": [],
            "resources": [
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2022-06-14T00:17:59.518107",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "Vorschau map.geo.admin.ch",
                  "en": "Preview map.geo.admin.ch",
                  "fr": "Aper\u00e7u map.geo.admin.ch",
                  "it": "Previsione map.geo.admin.ch"
                },
                "display_name": {
                  "de": "Map (Preview) Vorschau map.geo.admin.ch",
                  "en": "Map (Preview)  map.geo.admin.ch",
                  "fr": "Map (Preview) Aper\u00e7u map.geo.admin.ch",
                  "it": "Map (Preview) Previsione map.geo.admin.ch"
                },
                "format": "SERVICE",
                "hash": "",
                "id": "a8f4f16b-f80c-4b09-9d5b-400f85df49a0",
                "issued": "2013-01-01T00:00:00",
                "language": [
                  "en",
                  "de",
                  "fr",
                  "it"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "",
                "name": {
                  "de": "Map (Preview) Vorschau map.geo.admin.ch",
                  "en": "Map (Preview)  map.geo.admin.ch",
                  "fr": "Map (Preview) Aper\u00e7u map.geo.admin.ch",
                  "it": "Map (Preview) Previsione map.geo.admin.ch"
                },
                "package_id": "11f567c8-33df-4eb5-8dfc-479090ccdba3",
                "position": 0,
                "protocol": "MAP:Preview",
                "resource_type": null,
                "revision_id": "87c09171-9c12-4312-bff7-587f0bf84db8",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "Map (Preview) Vorschau map.geo.admin.ch",
                  "en": "Map (Preview)  map.geo.admin.ch",
                  "fr": "Map (Preview) Aper\u00e7u map.geo.admin.ch",
                  "it": "Map (Preview) Previsione map.geo.admin.ch"
                },
                "url": "https://map.geo.admin.ch/?layers=ch.bav.kataster-belasteter-standorte-oev",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-03-30T00:16:31.381432",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "WMS-BGDI Dienst, Layer \"KbS \u00f6V\"",
                  "en": "WMS-FSDI service, layer \"CPS public transports\"",
                  "fr": "Service WMS-IFDG, couche \"CSP transports publics\"",
                  "it": "Servizio WMS-IFDG, strato \"CSIN trasporti pubblici\""
                },
                "display_name": {
                  "de": "ch.bav.kataster-belasteter-standorte-oev",
                  "en": "ch.bav.kataster-belasteter-standorte-oev",
                  "fr": "ch.bav.kataster-belasteter-standorte-oev",
                  "it": "ch.bav.kataster-belasteter-standorte-oev"
                },
                "format": "WMS",
                "hash": "",
                "id": "9ade7778-a398-42c7-a6ae-adf237eadd7f",
                "issued": "2013-01-01T00:00:00",
                "language": [
                  "en",
                  "de",
                  "fr",
                  "it"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "",
                "name": {
                  "de": "ch.bav.kataster-belasteter-standorte-oev",
                  "en": "ch.bav.kataster-belasteter-standorte-oev",
                  "fr": "ch.bav.kataster-belasteter-standorte-oev",
                  "it": "ch.bav.kataster-belasteter-standorte-oev"
                },
                "package_id": "11f567c8-33df-4eb5-8dfc-479090ccdba3",
                "position": 1,
                "protocol": "OGC:WMS",
                "resource_type": null,
                "revision_id": "87c09171-9c12-4312-bff7-587f0bf84db8",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "ch.bav.kataster-belasteter-standorte-oev",
                  "en": "ch.bav.kataster-belasteter-standorte-oev",
                  "fr": "ch.bav.kataster-belasteter-standorte-oev",
                  "it": "ch.bav.kataster-belasteter-standorte-oev"
                },
                "url": "https://wms.geo.admin.ch/?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2022-08-05T00:17:32.436144",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "Link f\u00fcr Datenbezug",
                  "en": "Data download link",
                  "fr": "Lien pour t\u00e9l\u00e9charger les donn\u00e9es",
                  "it": "Link per il download dei dati"
                },
                "display_name": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "download_url": "https://data.geo.admin.ch/ch.bav.kataster-belasteter-standorte-oev/",
                "format": "",
                "hash": "",
                "id": "5b7d86b0-bf13-4db3-aee7-8ab3df4056b4",
                "issued": "2013-01-01T00:00:00",
                "language": [
                  "en",
                  "de",
                  "fr",
                  "it"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "",
                "name": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "package_id": "11f567c8-33df-4eb5-8dfc-479090ccdba3",
                "position": 2,
                "protocol": "WWW:DOWNLOAD-URL",
                "resource_type": null,
                "revision_id": "87c09171-9c12-4312-bff7-587f0bf84db8",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "url": "https://data.geo.admin.ch/ch.bav.kataster-belasteter-standorte-oev/",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2022-06-14T00:17:59.518120",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "RESTful API von geo.admin.ch",
                  "en": "RESTful API from geo.admin.ch",
                  "fr": "RESTful API de geo.admin.ch",
                  "it": "RESTful API da geo.admin.ch"
                },
                "display_name": {
                  "de": "RESTful API von geo.admin.ch",
                  "en": "RESTful API from geo.admin.ch",
                  "fr": "RESTful API de geo.admin.ch",
                  "it": "RESTful API da geo.admin.ch"
                },
                "format": "API",
                "hash": "",
                "id": "93bec66a-5eae-4367-aa32-1f4203c5385e",
                "issued": "2013-01-01T00:00:00",
                "language": [
                  "en",
                  "de",
                  "fr",
                  "it"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "",
                "name": {
                  "de": "RESTful API von geo.admin.ch",
                  "en": "RESTful API from geo.admin.ch",
                  "fr": "RESTful API de geo.admin.ch",
                  "it": "RESTful API da geo.admin.ch"
                },
                "package_id": "11f567c8-33df-4eb5-8dfc-479090ccdba3",
                "position": 3,
                "protocol": "ESRI:REST",
                "resource_type": null,
                "revision_id": "87c09171-9c12-4312-bff7-587f0bf84db8",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "RESTful API von geo.admin.ch",
                  "en": "RESTful API from geo.admin.ch",
                  "fr": "RESTful API de geo.admin.ch",
                  "it": "RESTful API da geo.admin.ch"
                },
                "url": "https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bav.kataster-belasteter-standorte-oev",
                "url_type": null
              }
            ],
            "revision_id": "a8088ae1-fa53-4aa4-b89b-8c60a9aa906a",
            "see_alsos": [],
            "spatial": "Schweiz",
            "state": "active",
            "tags": [],
            "temporals": [],
            "title": {
              "de": "Kataster der belasteten Standorte im Bereich des \u00f6ffentlichen Verkehrs (KbS BAV)",
              "en": "Cataster of polluted sites in the area of public transport (CPS FOT)",
              "fr": "Cadastre des sites pollu\u00e9s \u2013 domaine des transports publics (CSP OFT)",
              "it": "Catasto dei siti inquinati nel settore dei trasporti pubblici (CSIN UFT)"
            },
            "title_for_slug": "kataster-der-belasteten-standorte-im-bereich-des-offentlichen-verkehrs-kbs-bav",
            "type": "dataset",
            "url": "https://www.bav.admin.ch/bav/de/home/allgemeine-themen/umwelt/altlasten.html",
            "version": null
          },
          {
            "accrual_periodicity": "http://publications.europa.eu/resource/authority/frequency/CONT",
            "author": null,
            "author_email": null,
            "conforms_to": [],
            "contact_points": [
              {
                "email": "avt@bd.so.ch",
                "name": "avt@bd.so.ch"
              }
            ],
            "coverage": "",
            "creator_user_id": "af084126-f711-4016-a585-70354e997796",
            "description": {
              "de": "Der \u00f6ffentliche Verkehr im Kanton Solothurn umfasst diverse Bahn- und Buslinien.",
              "en": "",
              "fr": "",
              "it": ""
            },
            "display_name": {},
            "extras": [
              {
                "key": "harvest_object_id",
                "value": "1e0a1a2a-5b27-4ca9-afd3-17d6f6c85059"
              },
              {
                "key": "harvest_source_id",
                "value": "7e7b9ad6-0825-4bcf-9cd1-b56434d32dde"
              },
              {
                "key": "harvest_source_title",
                "value": "SO-Kt - Geocat Harvester"
              }
            ],
            "groups": [
              {
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "Regionen und St\u00e4dte",
                  "en": "Regions and cities",
                  "fr": "R\u00e9gions et villes",
                  "it": "Regioni e citt\u00e0"
                },
                "id": "5ce2de34-4114-43cd-ab45-e90a42db50aa",
                "image_display_url": "",
                "name": "regi",
                "title": "{\"de\": \"Regionen und St\u00e4dte\", \"en\": \"Regions and cities\", \"fr\": \"R\u00e9gions et villes\", \"it\": \"Regioni e citt\u00e0\"}"
              },
              {
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "Umwelt",
                  "en": "Environment",
                  "fr": "Environnement",
                  "it": "Ambiente"
                },
                "id": "ab2cc387-d129-4d76-b78d-517326d2a772",
                "image_display_url": "",
                "name": "envi",
                "title": "{\"de\": \"Umwelt\", \"en\": \"Environment\", \"fr\": \"Environnement\", \"it\": \"Ambiente\"}"
              }
            ],
            "id": "21843915-77a8-44d0-b4f1-199b896875da",
            "identifier": "73efe665-efa1-468c-8c6c-a4cfb5e615d5@kanton_solothurn",
            "isopen": false,
            "issued": "2024-01-03T00:00:00",
            "keywords": {
              "de": [
                "bus",
                "bahn",
                "linie",
                "haltestelle"
              ],
              "en": [],
              "fr": [],
              "it": []
            },
            "language": [
              "de"
            ],
            "license_id": null,
            "license_title": null,
            "maintainer": null,
            "maintainer_email": null,
            "metadata_created": "2024-03-15T05:34:47.638990",
            "metadata_modified": "2024-03-15T05:34:47.638998",
            "modified": "2024-01-03T00:00:00",
            "name": "offentlicher-verkehr2",
            "num_resources": 4,
            "num_tags": 0,
            "organization": {
              "approval_status": "approved",
              "created": "2023-03-01T08:21:25.119836",
              "description": {
                "de": "Beginnend mit den Geodaten ver\u00f6ffentlicht der Kanton Solothurn hier nach und nach Datens\u00e4tze der kantonalen Verwaltung, welche die Anforderungen zur Publikation als Open Government Data erf\u00fcllen.",
                "en": "",
                "fr": "",
                "it": ""
              },
              "display_name": {
                "de": "Kanton Solothurn",
                "en": "",
                "fr": "",
                "it": ""
              },
              "groups": [],
              "id": "1e4cc1ec-05f2-4801-821e-492a8199dced",
              "image_display_url": "https://ckan.opendata.swiss/uploads/group/2023-03-01-082125.0870262022-05-30-141509.051673logoso.png",
              "image_url": "2023-03-01-082125.0870262022-05-30-141509.051673logoso.png",
              "is_organization": true,
              "name": "kanton_solothurn",
              "num_followers": 0,
              "package_count": 259,
              "political_level": "canton",
              "revision_id": "ce7044e7-6c6d-4469-b396-43fb030c8e19",
              "state": "active",
              "tags": [],
              "title": {
                "de": "Kanton Solothurn",
                "en": "",
                "fr": "",
                "it": ""
              },
              "type": "organization",
              "url": "https://so.ch/"
            },
            "owner_org": "1e4cc1ec-05f2-4801-821e-492a8199dced",
            "private": false,
            "publisher": "{\"url\": \"https://avt.so.ch\", \"name\": \"Amt f\\u00fcr Verkehr und Tiefbau\"}",
            "qualified_relations": [],
            "relations": [
              {
                "label": "geocat.ch permalink",
                "url": "https://www.geocat.ch/geonetwork/srv/ger/catalog.search#/metadata/73efe665-efa1-468c-8c6c-a4cfb5e615d5"
              }
            ],
            "relationships_as_object": [],
            "relationships_as_subject": [],
            "resources": [
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2024-03-15T05:34:47.654322",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "DXF (in Zip): \u00f6ffentlicher Verkehr",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "download_url": "https://files.geo.so.ch/ch.so.avt.oev/aktuell/ch.so.avt.oev.dxf.zip",
                "format": "DXF",
                "hash": "",
                "id": "b8b261b7-42d0-48a1-b65b-a5967f7ca0cb",
                "issued": "2024-01-03T00:00:00",
                "language": [
                  "de"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired",
                "media_type": "application/vnd.dxf",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2024-01-03T00:00:00",
                "name": {
                  "de": "DXF (in Zip): \u00f6ffentlicher Verkehr",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "package_id": "21843915-77a8-44d0-b4f1-199b896875da",
                "position": 0,
                "protocol": "WWW:DOWNLOAD:DXF",
                "resource_type": null,
                "revision_id": "5ef16d7d-ce8c-4784-a72f-6c1e03b3de67",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "DXF (in Zip): \u00f6ffentlicher Verkehr",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "url": "https://files.geo.so.ch/ch.so.avt.oev/aktuell/ch.so.avt.oev.dxf.zip",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2024-03-15T05:34:47.654329",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "GeoPackage (in Zip): \u00f6ffentlicher Verkehr",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "download_url": "https://files.geo.so.ch/ch.so.avt.oev/aktuell/ch.so.avt.oev.gpkg.zip",
                "format": "GPKG",
                "hash": "",
                "id": "b99aa28b-c8d0-491e-a0d4-758fbd7b6a84",
                "issued": "2024-01-03T00:00:00",
                "language": [
                  "de"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired",
                "media_type": "application/geopackage+sqlite3",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2024-01-03T00:00:00",
                "name": {
                  "de": "GeoPackage (in Zip): \u00f6ffentlicher Verkehr",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "package_id": "21843915-77a8-44d0-b4f1-199b896875da",
                "position": 1,
                "protocol": "WWW:DOWNLOAD:Geopackage (ogc)",
                "resource_type": null,
                "revision_id": "5ef16d7d-ce8c-4784-a72f-6c1e03b3de67",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "GeoPackage (in Zip): \u00f6ffentlicher Verkehr",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "url": "https://files.geo.so.ch/ch.so.avt.oev/aktuell/ch.so.avt.oev.gpkg.zip",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2024-03-15T05:34:47.654331",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "INTERLIS 2 (in Zip): \u00f6ffentlicher Verkehr",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "download_url": "https://files.geo.so.ch/ch.so.avt.oev/aktuell/ch.so.avt.oev.xtf.zip",
                "format": "INTERLIS",
                "hash": "",
                "id": "30e2bb72-9551-46f3-b8c9-91663e4933ec",
                "issued": "2024-01-03T00:00:00",
                "language": [
                  "de"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2024-01-03T00:00:00",
                "name": {
                  "de": "INTERLIS 2 (in Zip): \u00f6ffentlicher Verkehr",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "package_id": "21843915-77a8-44d0-b4f1-199b896875da",
                "position": 2,
                "protocol": "WWW:DOWNLOAD:INTERLIS",
                "resource_type": null,
                "revision_id": "5ef16d7d-ce8c-4784-a72f-6c1e03b3de67",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "INTERLIS 2 (in Zip): \u00f6ffentlicher Verkehr",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "url": "https://files.geo.so.ch/ch.so.avt.oev/aktuell/ch.so.avt.oev.xtf.zip",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2024-03-15T05:34:47.654333",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "Shapefile (in Zip): \u00f6ffentlicher Verkehr",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "download_url": "https://files.geo.so.ch/ch.so.avt.oev/aktuell/ch.so.avt.oev.shp.zip",
                "format": "SHP",
                "hash": "",
                "id": "4a9344c2-0858-4453-8c8d-2118a973ac69",
                "issued": "2024-01-03T00:00:00",
                "language": [
                  "de"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired",
                "media_type": "application/vnd.shp",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2024-01-03T00:00:00",
                "name": {
                  "de": "Shapefile (in Zip): \u00f6ffentlicher Verkehr",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "package_id": "21843915-77a8-44d0-b4f1-199b896875da",
                "position": 3,
                "protocol": "WWW:DOWNLOAD:SHP",
                "resource_type": null,
                "revision_id": "5ef16d7d-ce8c-4784-a72f-6c1e03b3de67",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "Shapefile (in Zip): \u00f6ffentlicher Verkehr",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "url": "https://files.geo.so.ch/ch.so.avt.oev/aktuell/ch.so.avt.oev.shp.zip",
                "url_type": null
              }
            ],
            "revision_id": "5ef16d7d-ce8c-4784-a72f-6c1e03b3de67",
            "see_alsos": [],
            "spatial": "Kanton Solothurn (SO)",
            "state": "active",
            "tags": [],
            "temporals": [],
            "title": {
              "de": "\u00f6ffentlicher Verkehr",
              "en": "",
              "fr": "",
              "it": ""
            },
            "title_for_slug": "offentlicher-verkehr2",
            "type": "dataset",
            "url": "https://data.geo.so.ch?filter=ch.so.avt.oev",
            "version": null
          },
          {
            "accrual_periodicity": "http://publications.europa.eu/resource/authority/frequency/CONT",
            "author": null,
            "author_email": null,
            "contact_points": [
              {
                "email": "avt@bd.so.ch",
                "name": "avt@bd.so.ch"
              }
            ],
            "coverage": "",
            "creator_user_id": "af084126-f711-4016-a585-70354e997796",
            "description": {
              "de": "Der \u00f6ffentliche Verkehr im Kanton Solothurn umfasst diverse Bahn- und Buslinien.",
              "en": "",
              "fr": "",
              "it": ""
            },
            "display_name": {
              "de": "\u00f6ffentlicher Verkehr",
              "en": "",
              "fr": "",
              "it": ""
            },
            "groups": [
              {
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "Regionen und St\u00e4dte",
                  "en": "Regions and cities",
                  "fr": "R\u00e9gions et villes",
                  "it": "Regioni e citt\u00e0"
                },
                "id": "5ce2de34-4114-43cd-ab45-e90a42db50aa",
                "image_display_url": "",
                "name": "regi",
                "title": "{\"de\": \"Regionen und St\u00e4dte\", \"en\": \"Regions and cities\", \"fr\": \"R\u00e9gions et villes\", \"it\": \"Regioni e citt\u00e0\"}"
              }
            ],
            "id": "e688929d-d60f-4a60-b665-6fdfd8a64bf1",
            "identifier": "c51191ea-273f-4a48-a38b-abb08fc9b4d0@kanton_solothurn",
            "isopen": false,
            "issued": "2023-03-01T00:00:00",
            "keywords": {
              "de": [
                "bus",
                "bahn",
                "linie",
                "haltestelle"
              ],
              "en": [],
              "fr": [],
              "it": []
            },
            "language": [
              "de"
            ],
            "license_id": null,
            "license_title": null,
            "maintainer": "avt@bd.so.ch",
            "maintainer_email": "avt@bd.so.ch",
            "metadata_created": "2023-05-13T05:30:45.924024",
            "metadata_modified": "2023-12-06T17:52:38.202789",
            "modified": "2023-03-01T00:00:00",
            "name": "offentlicher-verkehr1",
            "num_resources": 4,
            "num_tags": 0,
            "organization": {
              "approval_status": "approved",
              "created": "2023-03-01T08:21:25.119836",
              "description": {
                "de": "Beginnend mit den Geodaten ver\u00f6ffentlicht der Kanton Solothurn hier nach und nach Datens\u00e4tze der kantonalen Verwaltung, welche die Anforderungen zur Publikation als Open Government Data erf\u00fcllen.",
                "en": "",
                "fr": "",
                "it": ""
              },
              "display_name": {
                "de": "Kanton Solothurn",
                "en": "",
                "fr": "",
                "it": ""
              },
              "groups": [],
              "id": "1e4cc1ec-05f2-4801-821e-492a8199dced",
              "image_display_url": "https://ckan.opendata.swiss/uploads/group/2023-03-01-082125.0870262022-05-30-141509.051673logoso.png",
              "image_url": "2023-03-01-082125.0870262022-05-30-141509.051673logoso.png",
              "is_organization": true,
              "name": "kanton_solothurn",
              "num_followers": 0,
              "package_count": 156,
              "political_level": "canton",
              "revision_id": "ce7044e7-6c6d-4469-b396-43fb030c8e19",
              "state": "active",
              "tags": [],
              "title": {
                "de": "Kanton Solothurn",
                "en": "",
                "fr": "",
                "it": ""
              },
              "type": "organization",
              "url": "https://so.ch/"
            },
            "owner_org": "1e4cc1ec-05f2-4801-821e-492a8199dced",
            "private": false,
            "publisher": "{\"url\": \"https://avt.so.ch\", \"name\": \"Amt f\\u00fcr Verkehr und Tiefbau\"}",
            "qualified_relations": [],
            "relations": [
              {
                "label": "geocat.ch permalink",
                "url": "https://www.geocat.ch/geonetwork/srv/ger/catalog.search#/metadata/c51191ea-273f-4a48-a38b-abb08fc9b4d0"
              }
            ],
            "relationships_as_object": [],
            "relationships_as_subject": [],
            "resources": [
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-05-13T05:30:45.970540",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "DXF (in Zip): \u00f6ffentlicher Verkehr",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "download_url": "https://files.geo.so.ch/ch.so.avt.oev/aktuell/ch.so.avt.oev.dxf.zip",
                "format": "DXF",
                "hash": "",
                "id": "b1906e5b-e005-400a-9911-e12ff1734b82",
                "issued": "2023-03-01T00:00:00",
                "language": [
                  "de"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-03-01T00:00:00",
                "name": {
                  "de": "DXF (in Zip): \u00f6ffentlicher Verkehr",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "package_id": "e688929d-d60f-4a60-b665-6fdfd8a64bf1",
                "position": 0,
                "protocol": "WWW:DOWNLOAD:DXF",
                "resource_type": null,
                "revision_id": "129e781b-96a8-4ba2-8356-fd82e2c7f7a7",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "DXF (in Zip): \u00f6ffentlicher Verkehr",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "url": "https://files.geo.so.ch/ch.so.avt.oev/aktuell/ch.so.avt.oev.dxf.zip",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-05-13T05:30:45.970546",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "GeoPackage (in Zip): \u00f6ffentlicher Verkehr",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "download_url": "https://files.geo.so.ch/ch.so.avt.oev/aktuell/ch.so.avt.oev.gpkg.zip",
                "format": "GPKG",
                "hash": "",
                "id": "71a8a630-4859-4565-8115-0bdabada4e3e",
                "issued": "2023-03-01T00:00:00",
                "language": [
                  "de"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-03-01T00:00:00",
                "name": {
                  "de": "GeoPackage (in Zip): \u00f6ffentlicher Verkehr",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "package_id": "e688929d-d60f-4a60-b665-6fdfd8a64bf1",
                "position": 1,
                "protocol": "WWW:DOWNLOAD:Geopackage (ogc)",
                "resource_type": null,
                "revision_id": "129e781b-96a8-4ba2-8356-fd82e2c7f7a7",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "GeoPackage (in Zip): \u00f6ffentlicher Verkehr",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "url": "https://files.geo.so.ch/ch.so.avt.oev/aktuell/ch.so.avt.oev.gpkg.zip",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-05-13T05:30:45.970555",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "INTERLIS 2 (in Zip): \u00f6ffentlicher Verkehr",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "download_url": "https://files.geo.so.ch/ch.so.avt.oev/aktuell/ch.so.avt.oev.xtf.zip",
                "format": "INTERLIS",
                "hash": "",
                "id": "bd54ee34-c267-4edf-ac81-760c2281f005",
                "issued": "2023-03-01T00:00:00",
                "language": [
                  "de"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-03-01T00:00:00",
                "name": {
                  "de": "INTERLIS 2 (in Zip): \u00f6ffentlicher Verkehr",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "package_id": "e688929d-d60f-4a60-b665-6fdfd8a64bf1",
                "position": 2,
                "protocol": "WWW:DOWNLOAD:INTERLIS",
                "resource_type": null,
                "revision_id": "129e781b-96a8-4ba2-8356-fd82e2c7f7a7",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "INTERLIS 2 (in Zip): \u00f6ffentlicher Verkehr",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "url": "https://files.geo.so.ch/ch.so.avt.oev/aktuell/ch.so.avt.oev.xtf.zip",
                "url_type": null
              },
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-05-13T05:30:45.970557",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "Shapefile (in Zip): \u00f6ffentlicher Verkehr",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "download_url": "https://files.geo.so.ch/ch.so.avt.oev/aktuell/ch.so.avt.oev.shp.zip",
                "format": "SHP",
                "hash": "",
                "id": "3edb68c9-75fb-4564-8c60-3f9d0df26b48",
                "issued": "2023-03-01T00:00:00",
                "language": [
                  "de"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "2023-03-01T00:00:00",
                "name": {
                  "de": "Shapefile (in Zip): \u00f6ffentlicher Verkehr",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "package_id": "e688929d-d60f-4a60-b665-6fdfd8a64bf1",
                "position": 3,
                "protocol": "WWW:DOWNLOAD:SHP",
                "resource_type": null,
                "revision_id": "129e781b-96a8-4ba2-8356-fd82e2c7f7a7",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "Shapefile (in Zip): \u00f6ffentlicher Verkehr",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "url": "https://files.geo.so.ch/ch.so.avt.oev/aktuell/ch.so.avt.oev.shp.zip",
                "url_type": null
              }
            ],
            "revision_id": "129e781b-96a8-4ba2-8356-fd82e2c7f7a7",
            "see_alsos": [],
            "spatial": "Kanton Solothurn (SO)",
            "state": "active",
            "tags": [],
            "temporals": [],
            "title": {
              "de": "\u00f6ffentlicher Verkehr",
              "en": "",
              "fr": "",
              "it": ""
            },
            "title_for_slug": "offentlicher-verkehr1",
            "type": "dataset",
            "url": "https://data.geo.so.ch?filter=ch.so.avt.oev",
            "version": null
          },
          {
            "accrual_periodicity": "http://publications.europa.eu/resource/authority/frequency/IRREG",
            "author": null,
            "author_email": null,
            "conforms_to": [],
            "contact_points": [
              {
                "email": "info@vvl.ch",
                "name": "info@vvl.ch"
              }
            ],
            "coverage": "",
            "creator_user_id": "af084126-f711-4016-a585-70354e997796",
            "description": {
              "de": "Zeigt Haltestellen des \u00f6ffentlichen Verkehrs, sowie Bahnstrecken, Schiffs- und Buslinien.",
              "en": "",
              "fr": "",
              "it": ""
            },
            "display_name": {},
            "extras": [
              {
                "key": "harvest_object_id",
                "value": "609593c4-c910-45b5-ac96-197a2cb06db7"
              },
              {
                "key": "harvest_source_id",
                "value": "795af522-2bcb-4fbc-963f-f38b1f99db57"
              },
              {
                "key": "harvest_source_title",
                "value": "LU-Kt - Geocat Harvester"
              }
            ],
            "groups": [
              {
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "Regionen und St\u00e4dte",
                  "en": "Regions and cities",
                  "fr": "R\u00e9gions et villes",
                  "it": "Regioni e citt\u00e0"
                },
                "id": "5ce2de34-4114-43cd-ab45-e90a42db50aa",
                "image_display_url": "",
                "name": "regi",
                "title": "{\"de\": \"Regionen und St\u00e4dte\", \"en\": \"Regions and cities\", \"fr\": \"R\u00e9gions et villes\", \"it\": \"Regioni e citt\u00e0\"}"
              },
              {
                "description": {
                  "de": "",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "Verkehr",
                  "en": "Transport",
                  "fr": "Transports",
                  "it": "Trasporti"
                },
                "id": "896b8bde-68ed-4eb9-ab30-c0ea6f64747f",
                "image_display_url": "",
                "name": "tran",
                "title": "{\"de\": \"Verkehr\", \"en\": \"Transport\", \"fr\": \"Transports\", \"it\": \"Trasporti\"}"
              }
            ],
            "id": "56e910ad-be7c-46e7-83eb-dbf69a24a6f8",
            "identifier": "f4a1db23-b029-49a5-ad42-39b0e27aefbb@geoinformation_kanton_luzern",
            "isopen": false,
            "issued": "2024-01-11T00:00:00",
            "keywords": {
              "de": [
                "netzstruktur",
                "offentlicher-verkehr",
                "schienenverkehr",
                "schifffahrt",
                "verkehr"
              ],
              "en": [],
              "fr": [],
              "it": []
            },
            "language": [
              "de"
            ],
            "license_id": null,
            "license_title": null,
            "maintainer": "info@vvl.ch",
            "maintainer_email": "info@vvl.ch",
            "metadata_created": "2023-04-23T20:06:21.718442",
            "metadata_modified": "2024-02-03T06:32:04.604471",
            "modified": "",
            "name": "offentlicher-verkehr-bahn-bus-schiff",
            "num_resources": 1,
            "num_tags": 0,
            "organization": {
              "approval_status": "approved",
              "created": "2023-04-23T19:59:45.630058",
              "description": {
                "de": "Die Geoinformation des Kantons Luzern ist f\u00fcr die Erhebung, Verarbeitung und Verwaltung von raumbezogenen Daten zust\u00e4ndig. Sie leitet, koordiniert und \u00fcberwacht die Arbeiten der Geoinformation und der amtlichen Vermessung.",
                "en": "Geoinformation of the Canton of Lucerne is responsible for the collection, processing and management of spatial data. It manages, coordinates and monitors the work of geoinformation and of the cadastral surveying.",
                "fr": "La g\u00e9oinformation du canton de Lucerne est responsable de la collecte, du traitement et de la gestion des donn\u00e9es \u00e0 r\u00e9f\u00e9rence spatiale. Elle dirige, coordonne et surveille les travaux de la g\u00e9oinformation et de la mensuration officielle.",
                "it": "La Geoinformation del Cantone di Lucerna \u00e8 responsabile della raccolta, dell'elaborazione e della gestione dei dati territoriali. Gestisce, coordina e monitora il lavoro della geoinformazione e della misurazione ufficiale."
              },
              "display_name": {
                "de": "Geoinformation Kanton Luzern",
                "en": "Geoinformation Canton of Lucerne",
                "fr": "G\u00e9oinformation du canton de Lucerne",
                "it": "Geoinformazione del Cantone di Lucerna"
              },
              "groups": [
                {
                  "capacity": "public",
                  "name": "kanton_luzern"
                }
              ],
              "id": "d68f99a5-6e06-4b8f-bb28-244696368805",
              "image_display_url": "https://ckan.opendata.swiss/uploads/group/2023-07-03-123724.468273ktlogodefault.png",
              "image_url": "2023-07-03-123724.468273ktlogodefault.png",
              "is_organization": true,
              "name": "geoinformation_kanton_luzern",
              "num_followers": 0,
              "package_count": 234,
              "political_level": "canton",
              "revision_id": "b0ce461a-1353-4fa1-b657-6c3911490819",
              "state": "active",
              "tags": [],
              "title": {
                "de": "Geoinformation Kanton Luzern",
                "en": "Geoinformation Canton of Lucerne",
                "fr": "G\u00e9oinformation du canton de Lucerne",
                "it": "Geoinformazione del Cantone di Lucerna"
              },
              "type": "organization",
              "url": "https://geoportal.lu.ch/"
            },
            "owner_org": "d68f99a5-6e06-4b8f-bb28-244696368805",
            "private": false,
            "publisher": "{\"url\": \"https://www.vvl.ch\", \"name\": \"Verkehrsverbund Luzern\"}",
            "qualified_relations": [],
            "relations": [
              {
                "label": "geocat.ch permalink",
                "url": "https://www.geocat.ch/geonetwork/srv/ger/catalog.search#/metadata/f4a1db23-b029-49a5-ad42-39b0e27aefbb"
              }
            ],
            "relationships_as_object": [],
            "relationships_as_subject": [],
            "resources": [
              {
                "byte_size": 0,
                "cache_last_updated": null,
                "cache_url": null,
                "created": "2023-04-23T20:06:21.730640",
                "datastore_active": false,
                "datastore_contains_all_records_of_source_file": false,
                "description": {
                  "de": "Produktansicht Geodatenshop",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "display_name": {
                  "de": "Datenshop",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "format": "SERVICE",
                "hash": "",
                "id": "8a96ae5c-1420-4b4d-a1dd-ede7e6638380",
                "issued": "2024-01-11T00:00:00",
                "language": [
                  "de"
                ],
                "last_modified": null,
                "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "media_type": "",
                "mimetype": null,
                "mimetype_inner": null,
                "modified": "",
                "name": {
                  "de": "Datenshop",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "package_id": "56e910ad-be7c-46e7-83eb-dbf69a24a6f8",
                "position": 0,
                "protocol": "https",
                "resource_type": null,
                "revision_id": "6d567f9a-86c0-4421-ab67-225f9edc28bc",
                "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                "size": null,
                "state": "active",
                "title": {
                  "de": "Datenshop",
                  "en": "",
                  "fr": "",
                  "it": ""
                },
                "url": "https://daten.geo.lu.ch/produkt/meta/OEVXXXXX_COL",
                "url_type": null
              }
            ],
            "revision_id": "236b99bf-5c22-41b3-a996-908b0621187d",
            "see_alsos": [],
            "spatial": "Kanton Luzern",
            "state": "active",
            "tags": [],
            "temporals": [],
            "title": {
              "de": "\u00d6ffentlicher Verkehr: Haltestellen und Liniennetze Bahn, Bus und Schiff",
              "en": "",
              "fr": "",
              "it": ""
            },
            "title_for_slug": "offentlicher-verkehr-bahn-bus-schiff",
            "type": "dataset",
            "version": null
          }
        ],
        "search_facets": {},
        "sort": "score desc, metadata_modified desc"
      },
      "success": true,
      "widening_prompts": [
        "Eisenbahn OR anzahl-zuge",
        "Eisenbahn OR rollstuhlzuganglichkeit",
        "Eisenbahn OR zug",
        "Eisenbahn OR zuge",
        "Eisenbahn OR bahnhof",
        "Eisenbahn OR bahnhofsliste",
        "Eisenbahn OR bahnhofstrasse",
        "Eisenbahn OR gleise",
        "Eisenbahn OR schienenschmieranlagen",
        "Eisenbahn OR statistik-des-offentlichen-verkehrs-inkl-schienenguterverkehr"
      ]
    } );
  }
}

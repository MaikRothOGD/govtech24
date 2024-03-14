import os
import requests
from dataclasses import dataclass
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

openai_api_key = os.environ.get("OPENAI_API_KEY")


@dataclass(frozen=True)
class Output:
    message: str
    widening_prompts: list[str]
    narrowing_prompts: list[str]
    alternative_prompts: list[str]


class AI2:
    def __init__(self, api_key):
        self.client = OpenAI(api_key=api_key)

    def refine(self, user_input: list[str], keywords list[str], result: dict) -> Output:
        keyword = keywords[0]

        resp = requests.get("https://ckan.opendata.swiss/api/3/action/tag_list")
        resp_json = resp.json()
        tags = resp_json["result"]
        tags_deduped = list(dict.fromkeys(tags))

        chat_completion = self.client.chat.completions.create(
            model="gpt-4-turbo-preview",
            temperature=0,
            messages=[
                {
                    "role": "user",
                    "content": f"The most relevant related terms to {keyword} in the same language. Output only the terms, one per line as raw lowercase strings.",
                }
            ],
        )
        alternatives = chat_completion.choices[0].message.content.splitlines()

        alternative_tags = []
        for a in alternatives:
            for t in tags_deduped:
                if a in t:
                    alternative_tags += [t]

        chat_completion_2 = self.client.chat.completions.create(
            model="gpt-4-turbo-preview",
            temperature=0,
            messages=[
                {
                    "role": "user",
                    "content": f"Which of the following terms is related to {keyword}: {','.join(alternative_tags)}? Output only the terms, one per line as raw lowercase strings.",
                }
            ],
        )

        return [
            Output(
                "You go!",
                widening_prompts=list(
                    map(lambda t: f"{keyword} OR {t}", alternative_tags)
                ),
                narrowing_prompts=list(
                    map(lambda t: f"{keyword} AND {t}", alternative_tags)
                ),
                alternative_prompts=alternative_tags,
            )
        ]


ai2 = AI2(openai_api_key)

result = ai2.refine(
    ["kuh"],
    ["meteo", "kühe"],
    {
        "count": 180,
        "sort": "score desc metadata_modified_desc",
        "facets": {},
        "results": [
            {
                "license_title": None,
                "maintainer": "Zefix Admin",
                "issued": "2022-01-14T00:00:00",
                "title_for_slug": "Zefix - Zentraler Firmenindex",
                "qualified_relations": [],
                "private": False,
                "maintainer_email": "zefix@bj.admin.ch",
                "num_tags": 30,
                "contact_points": [
                    {"email": "zefix@bj.admin.ch", "name": "Zefix Admin"}
                ],
                "keywords": {
                    "fr": [
                        "ofrc",
                        "registre",
                        "zefix",
                        "societe",
                        "entreprise",
                        "fosc",
                        "economie",
                        "commerce",
                    ],
                    "de": [
                        "shab",
                        "ehra",
                        "unternehmen",
                        "handelsregisteramt",
                        "wirtschaft",
                        "unternehmensdaten",
                        "register",
                        "handelsregister",
                        "zefix",
                    ],
                    "en": [
                        "registry",
                        "business",
                        "commerce",
                        "enterprise",
                        "sogc",
                        "companies",
                        "zefix",
                        "economy",
                        "register",
                        "frc",
                    ],
                    "it": [
                        "fusc",
                        "ufrc",
                        "economia",
                        "zefix",
                        "registro",
                        "compagnia",
                        "impresa",
                        "commercio",
                    ],
                },
                "temporals": [],
                "id": "e78dbdc6-d8d4-4e51-b193-ba0bc7d90254",
                "metadata_created": "2022-03-28T14:50:49.960566",
                "display_name": {
                    "fr": "Zefix - Index central des raisons de commerce",
                    "de": "Zefix - Zentraler Firmenindex",
                    "en": "Zefix - Central Business Name Index",
                    "it": "Zefix - Indice centrale delle ditte",
                },
                "metadata_modified": "2023-12-06T16:32:31.360036",
                "author": "Eidgenössisches Amt für das Handelsregister (EHRA)",
                "author_email": None,
                "relations": [
                    {
                        "url": "https://www.bj.admin.ch/bj/de/home/wirtschaft/handelsregister/rechtsgrundlagen.html",
                        "label": "Rechtliche Grundlagen / Bases légales / Basi legali / Legal basis",
                    },
                    {
                        "url": "https://ld.admin.ch/sparql/#query=PREFIX+schema%3A+%3Chttp%3A%2F%2Fschema.org%2F%3E%0APREFIX+admin%3A+%3Chttps%3A%2F%2Fschema.ld.admin.ch%2F%3E%0ASELECT+%3Ftype+(COUNT(DISTINCT+%3Fcompany_iri)+AS+%3Fccount)%0AWHERE+%7B%0A++++%3Fcompany_iri+a+admin%3AZefixOrganisation.%0A++++%3Fcompany_iri+schema%3AadditionalType+%3Fcompany_type.%0A++++%3Fcompany_type+schema%3Aname+%3Ftype+.%0A++%0A++FILTER(LANG(%3Ftype)+%3D+%22de%22)%0A%7D%0AGROUP+BY+%3Fcompany_type+%3Ftype%0AORDER+BY+DESC(%3Fccount)%0A&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Flindas.admin.ch%2Fquery&requestMethod=POST&tabTitle=Zefix+-+Count+by+type&headers=%7B%7D&outputFormat=table",
                        "label": "Beispiel 1: Anzahl Rechtseinheiten pro Rechtsform / Exemple 1: Nombre d'entités juridiques par forme juridique / Esempio 1: Numero di enti giuridici per la forma giuridica / Example 1: Number of legal entities per legal form",
                    },
                    {
                        "url": "https://ld.admin.ch/sparql/#query=PREFIX+schema%3A+%3Chttp%3A%2F%2Fschema.org%2F%3E%0APREFIX+admin%3A+%3Chttps%3A%2F%2Fschema.ld.admin.ch%2F%3E%0ASELECT+%3Fmunicipality+%3Fmuni_id+(COUNT(%3Fsub)+AS+%3Fcompanies)%0AFROM+%3Chttps%3A%2F%2Flindas.admin.ch%2Ffoj%2Fzefix%3E%0AFROM+%3Chttps%3A%2F%2Flindas.admin.ch%2Fterritorial%3E%0AWHERE+%7B%0A%09%3Fsub+a+admin%3AZefixOrganisation+%3B%0A++++++admin%3Amunicipality+%3Fmuni_id.%0A++++%3Fmuni_id+schema%3Aname+%3Fmunicipality%3B%0A%7D+%0AGROUP+BY+%3Fmunicipality+%3Fmuni_id%0AORDER+BY+DESC(%3Fcompanies)&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Flindas.admin.ch%2Fquery&requestMethod=POST&tabTitle=Zefix+-+Count+by+address&headers=%7B%7D&outputFormat=table",
                        "label": "Beispiel 2: Anzahl Rechtseinheiten nach Gemeinde / Exemple 2: Nombre d'entités juridiques par commune / Esempio 2: Numero di enti giuridici per comune / Example 2: Number of legal entities by municipality",
                    },
                    {
                        "url": "https://ld.admin.ch/sparql/#query=PREFIX+schema%3A+%3Chttp%3A%2F%2Fschema.org%2F%3E%0APREFIX+admin%3A+%3Chttps%3A%2F%2Fschema.ld.admin.ch%2F%3E%0ASELECT+%3Fstreet+%3Fzip+%3Ftown+(COUNT(%3Fcompany)+AS+%3Fccount)%0AFROM+%3Chttps%3A%2F%2Flindas.admin.ch%2Ffoj%2Fzefix%3E%0AWHERE+%7B%0A++%3Fcompany+a+%3Chttps%3A%2F%2Fschema.ld.admin.ch%2FZefixOrganisation%3E%3B%0A+++++++++++%3Chttp%3A%2F%2Fschema.org%2Faddress%3E+%3Faddress.%0A++%0A++%3Faddress+%3Chttp%3A%2F%2Fschema.org%2FstreetAddress%3E+%3Fstreet%3B%0A+++++++++++%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Flocn%23postCode%3E+%3Fzip%3B%0A+++++++++++%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Flocn%23postName%3E+%3Ftown.%0A%7D%0AGROUP+BY+%3Ftown+%3Fzip+%3Fstreet%0AORDER+BY+DESC+(%3Fccount)%0ALIMIT+15%0A&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fld.admin.ch%2Fquery&requestMethod=POST&tabTitle=Zefix+-+Count+by+type&headers=%7B%7D&outputFormat=table",
                        "label": "Beispiel 3: Anzahl Rechtseinheiten nach Adresse / Exemple 3: Nombre d'entités juridiques par adresse / Esempio 3: Numero di enti giuridici per indirizzo / Example 3: Number of legal entities by address",
                    },
                ],
                "state": "active",
                "version": None,
                "relationships_as_object": [],
                "license_id": None,
                "type": "dataset",
                "resources": [
                    {
                        "byte_size": 0,
                        "cache_last_updated": None,
                        "issued": "2022-01-14T00:00:00",
                        "modified": "2022-01-14T00:00:00",
                        "package_id": "e78dbdc6-d8d4-4e51-b193-ba0bc7d90254",
                        "datastore_contains_all_records_of_source_file": False,
                        "datastore_active": False,
                        "id": "0b0bf0ff-d8d4-4db9-bad7-d4381a282db7",
                        "size": None,
                        "license": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                        "display_name": {
                            "fr": "Métadonnées du dataset sur Lindas",
                            "de": "Metadaten des Datasets auf Lindas",
                            "en": "Metadata of the dataset on Lindas",
                            "it": "Metadati dei set di dati su Lindas",
                        },
                        "title": {
                            "fr": "Métadonnées du dataset sur Lindas",
                            "de": "Metadaten des Datasets auf Lindas",
                            "en": "Metadata of the dataset on Lindas",
                            "it": "Metadati dei set di dati su Lindas",
                        },
                        "state": "active",
                        "media_type": "SERVICE",
                        "hash": "",
                        "description": {
                            "fr": "Cette offre est rendue possible par l'entrée en vigueur, le 1er janvier 2021, de l'art. 14, al. 2, ORC, selon lequel l'Office fédéral du registre du commerce (OFRC) met à la disposition du public, sans frais, les données des entités juridiques actives qui sont nécessaires à leur identification et qui proviennent de la base de données centrale des entités juridiques. La nouveauté réside dans le fait que le nombre de consultations n'est plus limité. Il est ainsi possible en interrogeant LINDAS d’obtenir des listes de résultats sans limite de taille comme, par exemple, la liste des entités juridiques inscrites dans une commune.",
                            "de": "Dieses Angebot wird durch den auf den 1. Januar 2021 in Kraft getretenen Art. 14 Abs. 2 HRegV ermöglicht, wonach das Eidgenössische Amt für das Handelsregister (EHRA) aus der zentralen Datenbank Rechtseinheiten Daten der aktiven Rechtseinheiten, die zu deren Identifizierung notwendig sind, öffentlich zur gebührenfreien Nutzung zur Verfügung stellt. Neu ist, dass die Anzahl Abfragen nicht mehr eingeschränkt ist. Mit der Abfrage über LINDAS ist es somit möglich, Ergebnislisten ohne Grössenbeschränkungen zu erhalten, z. B. die Liste der in einer Gemeinde eingetragenen Rechtseinheiten.",
                            "en": "This offer was made possible by Art. 14 para. 2 HRegV, which came into force on January 1, 2021. Based on this article, the Federal Commercial Registry Office (FCRO) makes available to the public, free of charge, the data of active legal entities that are necessary for their identification and that come from the central database of legal entities. A new feature is that the number of queries is no longer limited. With the query via LINDAS, it is thus possible to obtain result lists without size restrictions, e.g. the list of legal entities registered in a municipality.",
                            "it": "Questa offerta è stata resa possibile con l'entrata in vigore il 1° gennaio 2021 dell'art. 14 cpv. 2 ORC, secondo il quale l'Ufficio federale del registro di commercio (UFRC) mette a disposizione, esente da emolumenti, i dati degli enti giuridici attivi che sono necessari per la loro identificazione e che provengono dalla banca dati centrale degli enti giuridici. La novità è che il numero di query non è più limitato. Con la query tramite LINDAS è quindi possibile ottenere liste di risultati senza restrizioni di dimensioni, ad esempio la lista di enti giuridici in un comune.",
                        },
                        "format": "SERVICE",
                        "mimetype_inner": None,
                        "url_type": None,
                        "mimetype": None,
                        "cache_url": None,
                        "name": {
                            "fr": "Métadonnées du dataset sur Lindas",
                            "de": "Metadaten des Datasets auf Lindas",
                            "en": "Metadata of the dataset on Lindas",
                            "it": "Metadati dei set di dati su Lindas",
                        },
                        "language": ["en", "de", "fr", "it"],
                        "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceRequired",
                        "url": "https://register.ld.admin.ch/.well-known/dataset/foj-zefix",
                        "created": "2022-03-28T14:50:50.497316",
                        "uri": "",
                        "last_modified": None,
                        "position": 0,
                        "revision_id": "bbd38c66-0a48-4a80-a07b-e0212be80924",
                        "resource_type": None,
                    },
                    {
                        "byte_size": 0,
                        "cache_last_updated": None,
                        "issued": "2022-01-14T00:00:00",
                        "package_id": "e78dbdc6-d8d4-4e51-b193-ba0bc7d90254",
                        "datastore_contains_all_records_of_source_file": False,
                        "datastore_active": False,
                        "id": "ba772d7c-171b-47bf-b958-ee87419090d6",
                        "size": None,
                        "display_name": {
                            "fr": "Zefix Linked Data Query",
                            "de": "Zefix Linked Data Query",
                            "en": "Zefix Linked Data Query",
                            "it": "Zefix Linked Data Query",
                        },
                        "title": {
                            "fr": "Zefix Linked Data Query",
                            "de": "Zefix Linked Data Query",
                            "en": "Zefix Linked Data Query",
                            "it": "Zefix Linked Data Query",
                        },
                        "download_url": "",
                        "state": "active",
                        "hash": "",
                        "description": {
                            "fr": "Linked Data Query",
                            "en": "Linked Data Query",
                            "de": "Linked Data Query",
                            "it": "Linked Data Query",
                        },
                        "format": "SERVICE",
                        "mimetype_inner": None,
                        "url_type": None,
                        "name": {
                            "fr": "Zefix Linked Data Query",
                            "de": "Zefix Linked Data Query",
                            "en": "Zefix Linked Data Query",
                            "it": "Zefix Linked Data Query",
                        },
                        "mimetype": None,
                        "cache_url": None,
                        "language": [],
                        "license": "NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired",
                        "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired",
                        "url": "https://ld.admin.ch/sparql/#query=PREFIX+schema%3A+%3Chttp%3A%2F%2Fschema.org%2F%3E%0APREFIX+admin%3A+%3Chttps%3A%2F%2Fschema.ld.admin.ch%2F%3E%0ASELECT+%3Fcompany_uri+%3Fname+%3Fcompany_type+%3Fmunicipality+%3Fadresse+%3Flocality%0AWHERE+%7B%0A++%3Fcompany_uri+a+admin%3AZefixOrganisation+%3B%0A+++++++schema%3Aname+%3Fname+%3B%0A+++++++admin%3Amunicipality+%3Fmuni_id+.%0A++%3Fmuni_id+schema%3Aname+%3Fmunicipality+.%0A++%3Fcompany_uri+schema%3AadditionalType+%3Ftype_id+.%0A++%3Ftype_id+schema%3Aname+%3Fcompany_type+.%0A++%3Fcompany_uri+schema%3Aaddress+%3Fadr.%0A++%3Fadr+schema%3AstreetAddress+%3Fadresse+%3B%0A++%09+++schema%3AaddressLocality+%3Flocality+.+%0A++%0A++filter+langMatches(lang(%3Fname)%2C+%22de%22)+.%0A++filter+langMatches(lang(%3Fcompany_type)%2C+%22de%22)+.%0A%7D+%0ALIMIT+50&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Flindas.admin.ch%2Fquery&requestMethod=POST&tabTitle=Zefix+-+Sample&headers=%7B%7D&outputFormat=table",
                        "created": "2022-05-19T15:21:31.305855",
                        "modified": "",
                        "last_modified": None,
                        "position": 1,
                        "revision_id": "bbd38c66-0a48-4a80-a07b-e0212be80924",
                        "identifier": "Linked_Data_Query",
                        "resource_type": None,
                    },
                    {
                        "byte_size": 0,
                        "cache_last_updated": None,
                        "issued": "2022-01-14T00:00:00",
                        "package_id": "e78dbdc6-d8d4-4e51-b193-ba0bc7d90254",
                        "datastore_contains_all_records_of_source_file": False,
                        "datastore_active": False,
                        "id": "7f0009d9-f3e3-4afa-bf74-5cc5a01241b1",
                        "size": None,
                        "display_name": {
                            "fr": "Application web Zefix",
                            "de": "Zefix Webapplikation",
                            "en": "Zefix web application",
                            "it": "Applicazione web Zefix",
                        },
                        "title": {
                            "fr": "Application web Zefix",
                            "de": "Zefix Webapplikation",
                            "en": "Zefix web application",
                            "it": "Applicazione web Zefix",
                        },
                        "state": "active",
                        "media_type": "SERVICE",
                        "hash": "",
                        "description": {
                            "fr": "Application web Zefix",
                            "en": "Zefix web application",
                            "de": "Zefix Webapplikation",
                            "it": "Applicazione web Zefix",
                        },
                        "format": "SERVICE",
                        "mimetype_inner": None,
                        "url_type": None,
                        "name": {
                            "fr": "Application web Zefix",
                            "de": "Zefix Webapplikation",
                            "en": "Zefix web application",
                            "it": "Applicazione web Zefix",
                        },
                        "mimetype": None,
                        "cache_url": None,
                        "language": [],
                        "license": "NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired",
                        "rights": "NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired",
                        "url": "https://www.zefix.admin.ch/",
                        "created": "2022-03-28T14:50:50.497309",
                        "uri": "",
                        "last_modified": None,
                        "position": 2,
                        "revision_id": "bbd38c66-0a48-4a80-a07b-e0212be80924",
                        "identifier": "https://www.zefix.admin.ch/",
                        "resource_type": None,
                    },
                ],
                "scheduled": "",
                "num_resources": 3,
                "description": {
                    "fr": "__Zefix__ est l'offre accessible au public de l'__Office fédéral du registre du commerce (OFRC)__. Grâce à l'infrastructure Zefix, les données de la \"base de données centrale des entités juridiques\", du registre central, sont mises à disposition du public via Internet. Il existe différentes possibilités d'accès:\r\n\r\n* Application web Zefix (https://www.zefix.admin.ch/),\r\n* Zefix REST API (https://www.zefix.admin.ch/ZefixPublicREST/),\r\n* Zefix Mobile App (https://www.zefixapp.ch/).\r\n\r\nLes données de toutes les entités juridiques inscrites au registre du commerce ainsi que les publications quotidiennes du registre du commerce dans la Feuille officielle suisse du commerce (FOSC) peuvent être consultées via Zefix.\r\n\r\nLe Dataset proposé ici contient les données de base actualisées quotidiennement des entités juridiques actives inscrites au registre du commerce, telles que la raison sociale / le nom, le siège et l'adresse de domicile.\r\n\r\nTrois exemples de requêtes SPARQL sont disponibles dans la section \"Informations complémentaires\".",
                    "en": '__Zefix__ is the publicly accessible service of the __Federal Commercial Registry Office (FCRO)__. The Zefix infrastructure makes the data of the "central database of legal entities", the central register, publicly available via the internet. There are various accesses:\r\n\r\n* Zefix web application (https://www.zefix.admin.ch/),\r\n* Zefix REST API (https://www.zefix.admin.ch/ZefixPublicREST/),\r\n* Zefix Mobile App (https://www.zefixapp.ch/).\r\n\r\nThe data of all legal entities entered in the commercial register, as well as the daily commercial register publications in the Swiss Official Gazette of Commerce (SOGC) can be accessed via Zefix.\r\n\r\nThe dataset offered here contains daily updated core data of the active legal entities entered in the commercial register, such as company name / name, registered officeseat and domicile address.\r\n\r\nThree examples of SPARQL queries can be found under "Additional information".',
                    "de": '__Zefix__ bildet das öffentlich zugängliche Angebot des __Eidgenössischen Amtes für das Handelsregister (EHRA)__.\r\nMittels der Zefix Infrastruktur werden die Daten der "zentralen Datenbank Rechtseinheiten", dem Zentralregister, öffentlich über Internet zur Verfügung gestellt. Es bestehen verschiedene Zugänge:\r\n\r\n* Zefix Webapplikation (https://www.zefix.admin.ch/),\r\n* Zefix REST API (https://www.zefix.admin.ch/ZefixPublicREST/),\r\n* Zefix Mobile App (https://www.zefixapp.ch/).\r\n\r\nÜber Zefix sind die Daten von sämtlichen im Handelsregister eingetragenen Rechtseinheiten sowie die täglichen Handelsregisterpublikationen im Schweizerischen Handelsamtsblatt (SHAB) abrufbar.\r\n\r\nDas hier angebotene Dataset beinhaltet tagesaktuelle Kerndaten der aktiven, im Handelsregister eingetragenen Rechtseinheiten, wie Firma / Name, Sitz und Domiziladresse.\r\n\r\nDrei Beispiele für SPARQL-Abfragen finden sich unter "Zusätzliche Informationen".',
                    "it": '__Zefix__ è l\'offerta accessibile al pubblico dell’__Ufficio federale del registro di commercio (UFRC)__. Grazie all\'infrastruttura Zefix, i dati della "banca dati centrale degli enti giuridici", del registro centrale, sono resi disponibili al pubblico via Internet. Esistono varie possibilità di accesso:\r\n\r\n* Applicazione web Zefix (https://www.zefix.admin.ch/),\r\n* Zefix REST API (https://www.zefix.admin.ch/ZefixPublicREST/),\r\n* Zefix Mobile App (https://www.zefixapp.ch/).\r\n\r\nI dati di tutti gli enti giuridici iscritti nel registro di commercio come anche le pubblicazioni quotidiane del registro di commercio nel Foglio ufficiale svizzero di commercio (FUSC) sono accessibili tramite Zefix.\r\n\r\nIl Dataset qui offerto contiene i dati di base aggiornati quotidianamente degli enti giuridici attivi iscritti nel registro di commercio, come la ditta / il nome, la sede e l\'indirizzo di domicilio.\r\n\r\nTre esempi di query SPARQL sono disponibili nella sezione "Informazioni aggiuntive".',
                },
                "tags": [
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "business",
                        "id": "21a7dc90-b0ee-4285-999b-ca6602e53d0f",
                        "name": "business",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "commerce",
                        "id": "7e116fb4-457b-454d-ae00-dd7412767349",
                        "name": "commerce",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "commercio",
                        "id": "4ff707aa-07ef-4e6d-832a-f6effb83f8d8",
                        "name": "commercio",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "compagnia",
                        "id": "800f0e9d-a4d3-4026-b902-c38efdee2c15",
                        "name": "compagnia",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "companies",
                        "id": "2712b08c-155b-425f-baae-10096bfb6a0c",
                        "name": "companies",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "economia",
                        "id": "c4dc60c0-e0d4-488b-8db4-c9802ba98599",
                        "name": "economia",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "economie",
                        "id": "c413f4ba-b30f-421b-a63b-554eb8e26f9d",
                        "name": "economie",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "economy",
                        "id": "bae2738f-81ab-4aa0-842d-1826db535d1b",
                        "name": "economy",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "ehra",
                        "id": "bbd7e026-8bf0-479a-b011-6264ebc19cc0",
                        "name": "ehra",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "enterprise",
                        "id": "b4bfa2db-748e-43f6-9069-0891f6ae6edb",
                        "name": "enterprise",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "entreprise",
                        "id": "2487bae4-a5ca-480e-b71f-80902cb1fc4f",
                        "name": "entreprise",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "fosc",
                        "id": "39639472-cce5-4b67-958a-4a51604f8144",
                        "name": "fosc",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "frc",
                        "id": "780dcf81-1345-4317-959b-74a09aee05d7",
                        "name": "frc",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "fusc",
                        "id": "1924bbd8-4e4a-49fe-b7ee-c67e7d03d50b",
                        "name": "fusc",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "handelsregister",
                        "id": "2dd8aa4d-449e-481d-a73a-f93c2b30a6c0",
                        "name": "handelsregister",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "handelsregisteramt",
                        "id": "0b57c5ca-9c3a-4f1d-aa7d-d23cd68b4c05",
                        "name": "handelsregisteramt",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "impresa",
                        "id": "67b15822-5cb7-40f6-91a5-5e241c2902f5",
                        "name": "impresa",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "ofrc",
                        "id": "2d997154-122d-4c48-887b-5e7c772953c3",
                        "name": "ofrc",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "register",
                        "id": "79bafb3b-59d2-48bc-bc9a-952e70efb39c",
                        "name": "register",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "registre",
                        "id": "fe3c661c-cff7-45b3-97d7-71d8d30f6c14",
                        "name": "registre",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "registro",
                        "id": "3d6c2066-a6e5-4dc1-9f8d-173be78b87e7",
                        "name": "registro",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "registry",
                        "id": "8b3799f6-f9c2-40e4-a4f4-204666b48e47",
                        "name": "registry",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "shab",
                        "id": "8063bab5-2f8c-4197-a31c-fe9819cee9c5",
                        "name": "shab",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "societe",
                        "id": "ad14fb8d-54c9-4903-a298-08fa04092c2a",
                        "name": "societe",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "sogc",
                        "id": "4413a56f-b5a7-4299-8a8d-c151b139a4ed",
                        "name": "sogc",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "ufrc",
                        "id": "bd41fce6-6145-43cd-af74-24bd02f81a59",
                        "name": "ufrc",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "unternehmen",
                        "id": "c31c8a3d-cf54-47d4-9c7a-806d7060c17f",
                        "name": "unternehmen",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "unternehmensdaten",
                        "id": "88228b6b-a3ec-4ec4-a877-ec7d77921330",
                        "name": "unternehmensdaten",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "wirtschaft",
                        "id": "9e5fd62a-3e83-4709-bc78-1a1caff11dbf",
                        "name": "wirtschaft",
                    },
                    {
                        "vocabulary_id": None,
                        "state": "active",
                        "display_name": "zefix",
                        "id": "f4de211d-e233-4f4e-ac73-62056c8658fe",
                        "name": "zefix",
                    },
                ],
                "title": {
                    "fr": "Zefix - Index central des raisons de commerce",
                    "de": "Zefix - Zentraler Firmenindex",
                    "en": "Zefix - Central Business Name Index",
                    "it": "Zefix - Indice centrale delle ditte",
                },
                "language": ["en", "de", "fr", "it"],
                "groups": [
                    {
                        "display_name": {
                            "fr": "Gouvernement et secteur public",
                            "de": "Regierung und öffentlicher Sektor",
                            "en": "Government and public sector",
                            "it": "Governo e settore pubblico",
                        },
                        "description": {"fr": "", "de": "", "en": "", "it": ""},
                        "image_display_url": "",
                        "title": '{"de": "Regierung und öffentlicher Sektor", "en": "Government and public sector", "fr": "Gouvernement et secteur public", "it": "Governo e settore pubblico"}',
                        "id": "e63f4b4e-5e3e-4c7f-9d4a-4babf164878f",
                        "name": "gove",
                    },
                    {
                        "display_name": {
                            "fr": "Économie et finances",
                            "de": "Wirtschaft und Finanzen",
                            "en": "Economy and finance",
                            "it": "Economia e finanze",
                        },
                        "description": {"fr": "", "de": "", "en": "", "it": ""},
                        "image_display_url": "",
                        "title": '{"de": "Wirtschaft und Finanzen", "en": "Economy and finance", "fr": "Économie et finances", "it": "Economia e finanze"}',
                        "id": "34f50c10-ddd0-4e37-b5c0-49456b39e31a",
                        "name": "econ",
                    },
                ],
                "creator_user_id": "0594d621-c92a-4a32-809c-98e281dc7944",
                "relationships_as_subject": [],
                "publisher": '{"url": "https://opendata.swiss/organization/eidgenoessisches_amt_fuer_das_handelsregister_ehra", "name": "Eidgen\\u00f6ssisches Amt f\\u00fcr das Handelsregister (EHRA)"}',
                "organization": {
                    "display_name": {
                        "fr": "Office fédéral du registre du commerce (OFRC)",
                        "de": "Eidgenössisches Amt für das Handelsregister (EHRA)",
                        "en": "Federal Commercial Registry Office (FCRO)",
                        "it": "Ufficio federale del registro di commercio (UFRC)",
                    },
                    "description": {
                        "fr": "L'Office fédéral du registre du commerce (OFRC) exerce, sur mandat du Département fédéral de justice et police, la haute surveillance sur la tenue du registre du commerce dans les cantons. Il examine la conformité juridique des inscriptions et, après leur approbation, les transmet pour publication à la Feuille officielle suisse du commerce. Il peut édicter des circulaires aux autorités cantonales du registre du commerce. \r\n\r\nLe registre du commerce est organisé en Suisse d'une manière décentralisée. Sa tenue incombe en premier lieu aux cantons. Certains cantons connaissent une exploitation du registre du commerce par district ou par région. Il existe actuellement 28 offices du registre du commerce, qui demeurent à disposition pour de plus amples renseignements.",
                        "en": "The Federal Commercial Registry Office (FCRO) is responsible for the supervision of the commercial register in the cantons on behalf of the Federal Department of Justice and Police. It examines the legality of the entries and, after their approval, forwards them to the Swiss Official Gazette of Commerce for publication. It may issue directives to the cantonal commercial registry authorities. \r\n\r\nThe commercial register is organised in a decentralised manner in Switzerland. The cantons are primarily responsible for keeping it. In some cantons, the commercial register can also be kept on a district basis. There are currently 28 commercial registry offices, which are available to provide further information.",
                        "de": "Das Eidgenössische Amt für das Handelsregister (EHRA) übt im Auftrag des Eidgenössischen Justiz- und Polizeidepartements die Oberaufsicht über die Handelsregisterführung in den Kantonen aus. Es prüft die Rechtmässigkeit der Eintragungen und leitet diese nach deren Genehmigung zur Publikation an das Schweizerische Handelsamtsblatt weiter. Es kann Weisungen an die kantonalen Handelsregisterbehörden erlassen. \r\n\r\nDas Handelsregister ist in der Schweiz dezentral organisiert. Für dessen Führung sind in erster Linie die Kantone zuständig. Die Handelsregisterführung kann in einzelnen Kantonen auch bezirksweise erfolgen. Gegenwärtig bestehen 28 Handelsregisterämter, welche für weitere Auskünfte zur Verfügung stehen.",
                        "it": "L'Ufficio federale del registro di commercio (UFRC) esercita, su mandato del Dipartimento federale di giustizia e polizia, l'alta vigilanza sugli Uffici cantonali del registro di commercio. Verifica la conformità legale delle iscrizioni e, dopo la loro approvazione, le inoltra per la pubblicazione nel Foglio ufficiale svizzero di commercio.\r\nL'Ufficio federale del registro di commercio ha la competenza di rilasciare delle direttive all'indirizzo delle autorità cantonali del registro di commercio.\r\n\r\nIl registro di commercio in Svizzera è organizzato in modo decentralizzato. La sua gestione è principalmente di competenza dei Cantoni. In alcuni Cantoni il registro di commercio è su base distrettuale. Attualmente esistono 28 uffici del registro di commercio, che sono disponibili per ulteriori informazioni.",
                    },
                    "created": "2022-03-28T14:44:36.129403",
                    "url": "https://ehra.fenceit.ch/de/eidgenoessisches-amt-fuer-das-handelsregister/",
                    "package_count": 1,
                    "image_display_url": "https://ckan.opendata.swiss/uploads/group/2022-03-28-144436.0677232021-06-02-130104.401386Justizia.JPG",
                    "approval_status": "approved",
                    "id": "1f68c9e8-7cd6-457e-826c-7faf0fed26d5",
                    "is_organization": True,
                    "state": "active",
                    "image_url": "2022-03-28-144436.0677232021-06-02-130104.401386Justizia.JPG",
                    "groups": [{"capacity": "public", "name": "bundesamt_fuer_justiz"}],
                    "title": {
                        "fr": "Office fédéral du registre du commerce (OFRC)",
                        "de": "Eidgenössisches Amt für das Handelsregister (EHRA)",
                        "en": "Federal Commercial Registry Office (FCRO)",
                        "it": "Ufficio federale del registro di commercio (UFRC)",
                    },
                    "revision_id": "3720e8e0-b02b-4e62-a0f8-d95deedabf35",
                    "num_followers": 0,
                    "type": "organization",
                    "political_level": "confederation",
                    "tags": [],
                    "name": "eidgenoessisches_amt_fuer_das_handelsregister_ehra",
                },
                "name": "zefix-zentraler-firmenindex",
                "isopen": False,
                "accrual_periodicity": "http://publications.europa.eu/resource/authority/frequency/DAILY",
                "owner_org": "1f68c9e8-7cd6-457e-826c-7faf0fed26d5",
                "modified": "2022-03-21T00:00:00",
                "url": "https://www.bj.admin.ch/bj/de/home/wirtschaft/handelsregister.html",
                "see_alsos": [],
                "revision_id": "97ca5513-b5ea-40c5-9157-599b1ab44e93",
                "identifier": "foj-zefix@eidgenoessisches_amt_fuer_das_handelsregister_ehra",
            }
        ],
    },
)

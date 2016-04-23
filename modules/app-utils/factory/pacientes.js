angular.module('EduMedApp.services', [])
.factory('Pacientes', function() {
var pacientes = [
	{
		"nombre": "Alexa Saunders",
		"fecha": "2016-09-08T19:25:28-07:00",
		"rut": "5793988-5",
		"codigo": "ARN69LTH2EI"
	},
	{
		"nombre": "Benjamin Medina",
		"fecha": "2016-03-14T03:50:17-07:00",
		"rut": "35912753-7",
		"codigo": "ZIM20XCV4YW"
	},
	{
		"nombre": "Grady Wiggins",
		"fecha": "2015-04-05T21:07:08-07:00",
		"rut": "38187954-2",
		"codigo": "WPK74ZZH2CA"
	},
	{
		"nombre": "Colin Riggs",
		"fecha": "2016-04-13T19:52:11-07:00",
		"rut": "47218999-9",
		"codigo": "ZAZ24JOD3IL"
	},
	{
		"nombre": "Sonya Charles",
		"fecha": "2015-09-11T20:59:36-07:00",
		"rut": "31681253-8",
		"codigo": "TAK05DJV7EA"
	},
	{
		"nombre": "Salvador Adkins",
		"fecha": "2016-02-21T13:02:51-08:00",
		"rut": "18610937-6",
		"codigo": "RSU15NGJ8NK"
	},
	{
		"nombre": "Joelle Wolfe",
		"fecha": "2016-06-24T13:17:21-07:00",
		"rut": "44489980-8",
		"codigo": "MHV12AOH4NA"
	},
	{
		"nombre": "Benjamin Blair",
		"fecha": "2015-04-09T22:16:23-07:00",
		"rut": "45806436-9",
		"codigo": "RWN84KON9NZ"
	},
	{
		"nombre": "Xantha Lloyd",
		"fecha": "2016-05-22T06:37:32-07:00",
		"rut": "14962439-2",
		"codigo": "IBP92NCF1IU"
	},
	{
		"nombre": "Signe Riggs",
		"fecha": "2016-08-22T09:41:26-07:00",
		"rut": "16527507-1",
		"codigo": "TME62LXB7HM"
	},
	{
		"nombre": "Emily Curtis",
		"fecha": "2016-07-23T00:33:52-07:00",
		"rut": "9917000-K",
		"codigo": "CUZ33TPA0RH"
	},
	{
		"nombre": "Quinlan Carson",
		"fecha": "2016-09-19T17:44:07-07:00",
		"rut": "7674832-2",
		"codigo": "VXD53HNL6KQ"
	},
	{
		"nombre": "Sade Spence",
		"fecha": "2016-11-22T02:13:42-08:00",
		"rut": "8504719-1",
		"codigo": "QSJ17MXD6CA"
	},
	{
		"nombre": "Alfreda Barnes",
		"fecha": "2017-01-05T11:34:16-08:00",
		"rut": "47872008-4",
		"codigo": "NAR27AYX1FH"
	},
	{
		"nombre": "Adrienne Benton",
		"fecha": "2016-08-05T06:13:25-07:00",
		"rut": "50229699-K",
		"codigo": "DBH18BEU4ON"
	},
	{
		"nombre": "Myra Dejesus",
		"fecha": "2016-12-16T00:54:03-08:00",
		"rut": "17706033-K",
		"codigo": "YHM79TEX5UK"
	},
	{
		"nombre": "Celeste Sloan",
		"fecha": "2015-09-05T18:02:29-07:00",
		"rut": "30234348-9",
		"codigo": "VEE85KRC2XL"
	},
	{
		"nombre": "Iliana Spencer",
		"fecha": "2015-07-18T11:53:44-07:00",
		"rut": "49251604-K",
		"codigo": "YQJ99AUH4IO"
	},
	{
		"nombre": "Kim Mathis",
		"fecha": "2016-01-12T15:49:04-08:00",
		"rut": "30819025-0",
		"codigo": "GYR95UVA3QX"
	},
	{
		"nombre": "Mara Sims",
		"fecha": "2016-03-27T17:25:57-07:00",
		"rut": "49809216-0",
		"codigo": "WOO36JQE9BH"
	},
	{
		"nombre": "Nyssa Fletcher",
		"fecha": "2015-05-26T20:58:42-07:00",
		"rut": "7313015-8",
		"codigo": "LVF53MFE9NH"
	},
	{
		"nombre": "Deirdre Chapman",
		"fecha": "2015-05-29T09:35:03-07:00",
		"rut": "45305056-4",
		"codigo": "FRS21FKC7IM"
	},
	{
		"nombre": "Jared Dale",
		"fecha": "2017-02-25T14:03:40-08:00",
		"rut": "5948538-5",
		"codigo": "QDQ79FWS2EP"
	},
	{
		"nombre": "Quyn Charles",
		"fecha": "2015-09-25T20:12:38-07:00",
		"rut": "27412921-2",
		"codigo": "TJJ43SCJ7HH"
	},
	{
		"nombre": "Austin Delaney",
		"fecha": "2016-05-27T00:21:14-07:00",
		"rut": "48293058-1",
		"codigo": "ZAW59VGZ6BL"
	},
	{
		"nombre": "Rebecca Sheppard",
		"fecha": "2015-10-28T10:42:05-07:00",
		"rut": "28368140-8",
		"codigo": "NDH54CUE6WL"
	},
	{
		"nombre": "Zane Paul",
		"fecha": "2016-07-23T23:55:30-07:00",
		"rut": "28305512-4",
		"codigo": "AUB10CSW9QC"
	},
	{
		"nombre": "Whilemina Mcdaniel",
		"fecha": "2016-10-20T02:32:14-07:00",
		"rut": "41185685-2",
		"codigo": "NSM12RAA5XD"
	},
	{
		"nombre": "Andrew Olson",
		"fecha": "2016-05-22T10:32:04-07:00",
		"rut": "10043221-8",
		"codigo": "VOR90KFN2VG"
	},
	{
		"nombre": "Colt Mcknight",
		"fecha": "2015-04-25T18:48:37-07:00",
		"rut": "7504584-0",
		"codigo": "BVQ46TZL9BJ"
	},
	{
		"nombre": "Madeline Leblanc",
		"fecha": "2015-04-21T15:48:33-07:00",
		"rut": "17138682-9",
		"codigo": "BKL22BUO4UR"
	},
	{
		"nombre": "Maia Stein",
		"fecha": "2016-04-06T18:56:41-07:00",
		"rut": "45634262-0",
		"codigo": "BHO55XEW1FF"
	},
	{
		"nombre": "Oleg Bullock",
		"fecha": "2017-03-09T08:19:32-08:00",
		"rut": "11409842-6",
		"codigo": "RWT18OUP4YS"
	},
	{
		"nombre": "Jael Paul",
		"fecha": "2016-10-21T07:06:39-07:00",
		"rut": "8611996-K",
		"codigo": "KYN15ATD2VM"
	},
	{
		"nombre": "Lysandra Kirk",
		"fecha": "2015-09-11T01:55:06-07:00",
		"rut": "21813883-7",
		"codigo": "BML41YFO7JS"
	},
	{
		"nombre": "Felix Anthony",
		"fecha": "2016-02-01T17:55:56-08:00",
		"rut": "24151263-0",
		"codigo": "DTJ64OSN4UO"
	},
	{
		"nombre": "Keefe Meadows",
		"fecha": "2016-01-01T14:15:51-08:00",
		"rut": "31347012-1",
		"codigo": "RWF66IIF2XV"
	},
	{
		"nombre": "Anne Hunt",
		"fecha": "2016-06-30T10:41:07-07:00",
		"rut": "50881454-2",
		"codigo": "JZW64WWN1RA"
	},
	{
		"nombre": "Kerry Perry",
		"fecha": "2015-06-23T08:50:43-07:00",
		"rut": "23210147-4",
		"codigo": "KRL00ZRI7HG"
	},
	{
		"nombre": "Chiquita Todd",
		"fecha": "2016-06-10T05:25:55-07:00",
		"rut": "9991610-9",
		"codigo": "BIB38MEN1KG"
	},
	{
		"nombre": "Beverly Anderson",
		"fecha": "2016-07-22T14:44:23-07:00",
		"rut": "42745639-0",
		"codigo": "RWV73UNI5HY"
	},
	{
		"nombre": "Zelenia Olsen",
		"fecha": "2016-11-04T00:53:54-07:00",
		"rut": "26069131-7",
		"codigo": "UOR07MXG0TZ"
	},
	{
		"nombre": "Knox Burks",
		"fecha": "2016-09-28T10:26:53-07:00",
		"rut": "19399570-5",
		"codigo": "ZPP40ZHC5SM"
	},
	{
		"nombre": "Vaughan Bradley",
		"fecha": "2017-02-20T17:30:25-08:00",
		"rut": "24030544-5",
		"codigo": "JLA41QMI6WJ"
	},
	{
		"nombre": "Roary Lawrence",
		"fecha": "2016-12-05T10:26:50-08:00",
		"rut": "11693211-3",
		"codigo": "DAV02YDV5WF"
	},
	{
		"nombre": "Hedy Middleton",
		"fecha": "2016-08-31T12:51:13-07:00",
		"rut": "26946571-9",
		"codigo": "BCB45WIC0HN"
	},
	{
		"nombre": "Melyssa Mcfarland",
		"fecha": "2015-09-03T19:22:42-07:00",
		"rut": "11682672-0",
		"codigo": "CVP13JUF9OB"
	},
	{
		"nombre": "Hayden Galloway",
		"fecha": "2015-04-28T00:59:59-07:00",
		"rut": "6693498-5",
		"codigo": "PYP45MSC3FU"
	},
	{
		"nombre": "Abel Dillon",
		"fecha": "2016-07-31T14:52:38-07:00",
		"rut": "37816435-4",
		"codigo": "ZOM31WHO2OX"
	},
	{
		"nombre": "Nina Wilcox",
		"fecha": "2016-11-10T08:55:36-08:00",
		"rut": "11624149-8",
		"codigo": "PLG99EWS7OQ"
	},
	{
		"nombre": "Ila Blair",
		"fecha": "2017-02-10T19:53:47-08:00",
		"rut": "29079704-7",
		"codigo": "UNK43VAH9TS"
	},
	{
		"nombre": "Olga Mccullough",
		"fecha": "2016-03-15T08:54:45-07:00",
		"rut": "21502356-7",
		"codigo": "FLM03CUC5MU"
	},
	{
		"nombre": "Whilemina Williams",
		"fecha": "2016-05-09T16:15:32-07:00",
		"rut": "6560711-5",
		"codigo": "XDT10CUW1UF"
	},
	{
		"nombre": "Hakeem Hicks",
		"fecha": "2017-02-18T01:13:00-08:00",
		"rut": "6571931-2",
		"codigo": "UAR23PXP0JT"
	},
	{
		"nombre": "Nola Stanton",
		"fecha": "2016-10-16T04:04:08-07:00",
		"rut": "18529703-9",
		"codigo": "TTS92MUD7SR"
	},
	{
		"nombre": "Cynthia Flowers",
		"fecha": "2015-10-09T15:14:28-07:00",
		"rut": "46659962-K",
		"codigo": "BHY53EDA1OH"
	},
	{
		"nombre": "Sheila Cleveland",
		"fecha": "2016-11-08T20:53:01-08:00",
		"rut": "42983039-7",
		"codigo": "QSX21EEZ7UT"
	},
	{
		"nombre": "Lance Osborne",
		"fecha": "2016-03-03T05:02:56-08:00",
		"rut": "20942250-6",
		"codigo": "BFX52QJV2GU"
	}
];
	return {
		all: function() {
			return pacientes;
		},
		get: function(pacientesId) {
			return pacientes[pacientesId - 1];
		}
	}
})
.factory('Tratamientos', function() {
var tratamientos = [
	{
		"nombre": "Clorambucil",
		"fecha": "2016-09-08T19:25:28-07:00",
		"duracion": "3 meses",
		"dosis": "1 cada 8 hrs"
	},
	{
		"nombre": "Ciclosporina",
		"fecha": "2016-03-14T03:50:17-07:00",
		"duracion": "20 Días",
		"dosis": "1 cada 12 hrs"
	},
	{
		"nombre": "Metotrexato",
		"fecha": "2015-04-05T21:07:08-07:00",
		"duracion": "Indefinido",
		"dosis": "1 cada 3 Días"
	},
	{
		"nombre": "Aspirina 100mg",
		"fecha": "2016-04-13T19:52:11-07:00",
		"duracion": "1 meses",
		"dosis": "1 cada 24 hrs"
	},
	{
		"nombre": "Paracetamol 500mg",
		"fecha": "2016-04-13T19:52:11-07:00",
		"duracion": "Indefinido",
		"dosis": "1 cada 12 hrs"
	}
];
	return {
		all: function() {
			return tratamientos;
		},
		get: function(tratamientosId) {
			return tratamientos[tratamientosId - 1];
		}
	}
})

.factory('Estudios', function() {
var estudios = [
	{
		"nombre": "Análisis de sangre",
		"fecha": "2016-09-08T19:25:28-07:00",
		"frecuencia": "Anual"
	},
	{
		"nombre": "Colesterol",
		"fecha": "2016-03-14T03:50:17-07:00",
		"frecuencia": "Mensual"
	},
	{
		"nombre": "hemoglobina A1c",
		"fecha": "2015-04-05T21:07:08-07:00",
		"frecuencia": "Semanal"
	},
	{
		"nombre": "Exámenes oculares",
		"fecha": "2016-04-13T19:52:11-07:00",
		"frecuencia": "Semestral"
	},
	{
		"nombre": "Examen de orina",
		"fecha": "2016-04-13T19:52:11-07:00",
		"frecuencia": "Anual"
	}
];
	return {
		all: function() {
			return estudios;
		},
		get: function(estudiosId) {
			return estudios[estudiosId - 1];
		}
	}
})
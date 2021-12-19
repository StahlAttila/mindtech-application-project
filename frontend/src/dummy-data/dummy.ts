import CovidData from "../models/covid-data";

const DUMMY_DATA: CovidData[] =[
  {
  infected: 32,
  activeInfected: 0,
  deceased: 0,
  quarantined: 159,
  tested: 1236,
  id: "2020-03-15T12:46:00+01:00"
  },
  {
  infected: 0,
  activeInfected: 0,
  deceased: 0,
  quarantined: 0,
  tested: 0,
  id: "2020-03-15T13:30:00+01:00"
  },
  {
  infected: 32,
  activeInfected: 0,
  deceased: 0,
  quarantined: 159,
  tested: 1236,
  id: "2020-03-15T13:35:00+01:00"
  },
  {
  infected: 32,
  activeInfected: 0,
  deceased: 1,
  quarantined: 159,
  tested: 1236,
  id: "2020-03-15T15:25:00+01:00"
  },
  {
  infected: 32,
  activeInfected: 0,
  deceased: 1,
  quarantined: 159,
  tested: 1236,
  id: "2020-03-15T17:25:00+01:00"
  },
  {
  infected: 39,
  activeInfected: 0,
  deceased: 1,
  quarantined: 159,
  tested: 1236,
  id: "2020-03-16T09:35:00+01:00"
  },
  {
  infected: 39,
  activeInfected: 0,
  deceased: 1,
  quarantined: 159,
  tested: 1436,
  id: "2020-03-16T09:45:00+01:00"
  },
  {
  infected: 39,
  activeInfected: 0,
  deceased: 1,
  quarantined: 136,
  tested: 1436,
  id: "2020-03-16T10:10:00+01:00"
  },
  {
  infected: 30,
  activeInfected: 0,
  deceased: 0,
  quarantined: 136,
  tested: 1436,
  id: "2020-03-16T13:05:00+01:00"
  },
  {
  infected: 39,
  activeInfected: 0,
  deceased: 1,
  quarantined: 136,
  tested: 1436,
  id: "2020-03-16T14:05:00+01:00"
  },
  {
  infected: 39,
  activeInfected: 0,
  deceased: 1,
  quarantined: 137,
  tested: 1470,
  id: "2020-03-16T19:35:00+01:00"
  },
  {
  infected: 39,
  activeInfected: 0,
  deceased: 1,
  quarantined: 137,
  tested: 1470,
  id: "2020-03-16T22:40:00+01:00"
  },
  {
  infected: 50,
  activeInfected: 0,
  deceased: 1,
  quarantined: 137,
  tested: 1587,
  id: "2020-03-17T08:35:00+01:00"
  },
  {
  infected: 58,
  activeInfected: 0,
  deceased: 1,
  quarantined: 137,
  tested: 1587,
  id: "2020-03-18T07:10:00+01:00"
  },
  {
  infected: 58,
  activeInfected: 0,
  deceased: 1,
  quarantined: 122,
  tested: 1803,
  id: "2020-03-18T07:15:00+01:00"
  },
  {
  infected: 73,
  activeInfected: 0,
  deceased: 1,
  quarantined: 124,
  tested: 2322,
  id: "2020-03-19T07:50:00+01:00"
  },
  {
  infected: 85,
  activeInfected: 0,
  deceased: 1,
  quarantined: 124,
  tested: 2322,
  id: "2020-03-20T06:50:00+01:00"
  },
  {
  infected: 85,
  activeInfected: 0,
  deceased: 1,
  quarantined: 124,
  tested: 3007,
  id: "2020-03-20T07:00:00+01:00"
  },
  {
  infected: 85,
  activeInfected: 0,
  deceased: 1,
  quarantined: 116,
  tested: 3007,
  id: "2020-03-20T08:15:00+01:00"
  },
  {
  infected: 85,
  activeInfected: 0,
  deceased: 3,
  quarantined: 116,
  tested: 3007,
  id: "2020-03-20T11:20:00+01:00"
  },
  {
  infected: 85,
  activeInfected: 0,
  deceased: 4,
  quarantined: 116,
  tested: 3007,
  id: "2020-03-20T19:35:00+01:00"
  },
  {
  infected: 103,
  activeInfected: 0,
  deceased: 4,
  quarantined: 117,
  tested: 3447,
  id: "2020-03-21T08:10:00+01:00"
  },
  {
  infected: 0,
  activeInfected: 0,
  deceased: 0,
  quarantined: 0,
  tested: 0,
  id: "2020-03-22T00:05:00+01:00"
  },
  {
  infected: 103,
  activeInfected: 0,
  deceased: 4,
  quarantined: 117,
  tested: 3447,
  id: "2020-03-22T00:20:00+01:00"
  },
  {
  infected: 103,
  activeInfected: 0,
  deceased: 4,
  quarantined: 115,
  tested: 4443,
  id: "2020-03-22T08:40:00+01:00"
  },
  {
  infected: 131,
  activeInfected: 0,
  deceased: 4,
  quarantined: 115,
  tested: 4443,
  id: "2020-03-22T08:45:00+01:00"
  },
  {
  infected: 131,
  activeInfected: 0,
  deceased: 6,
  quarantined: 115,
  tested: 4443,
  id: "2020-03-22T10:35:00+01:00"
  },
  {
  infected: 131,
  activeInfected: 0,
  deceased: 6,
  quarantined: 115,
  tested: 4443,
  id: "2020-03-22T11:45:00+01:00"
  },
  {
  infected: 167,
  activeInfected: 0,
  deceased: 7,
  quarantined: 101,
  tested: 5515,
  id: "2020-03-23T07:00:00+01:00"
  },
  {
  infected: 167,
  activeInfected: 0,
  deceased: 8,
  quarantined: 101,
  tested: 5515,
  id: "2020-03-23T19:15:00+01:00"
  },
  {
  infected: 187,
  activeInfected: 0,
  deceased: 8,
  quarantined: 92,
  tested: 6113,
  id: "2020-03-24T07:10:00+01:00"
  },
  {
  infected: 187,
  activeInfected: 0,
  deceased: 9,
  quarantined: 92,
  tested: 6113,
  id: "2020-03-24T11:15:00+01:00"
  },
  {
  infected: 226,
  activeInfected: 0,
  deceased: 10,
  quarantined: 85,
  tested: 6817,
  id: "2020-03-25T06:50:00+01:00"
  },
  {
  infected: 261,
  activeInfected: 0,
  deceased: 10,
  quarantined: 100,
  tested: 8005,
  id: "2020-03-26T06:35:00+01:00"
  },
  {
  infected: 300,
  activeInfected: 0,
  deceased: 10,
  quarantined: 100,
  tested: 9275,
  id: "2020-03-27T06:45:00+01:00"
  },
  {
  infected: 300,
  activeInfected: 0,
  deceased: 10,
  quarantined: 84,
  tested: 9275,
  id: "2020-03-27T07:25:00+01:00"
  },
  {
  infected: 343,
  activeInfected: 0,
  deceased: 11,
  quarantined: 84,
  tested: 9275,
  id: "2020-03-28T07:00:00+01:00"
  },
  {
  infected: 343,
  activeInfected: 0,
  deceased: 11,
  quarantined: 87,
  tested: 10303,
  id: "2020-03-28T07:05:00+01:00"
  },
  {
  infected: 408,
  activeInfected: 0,
  deceased: 13,
  quarantined: 71,
  tested: 12148,
  id: "2020-03-29T07:35:00+02:00"
  },
  {
  infected: 447,
  activeInfected: 0,
  deceased: 15,
  quarantined: 73,
  tested: 13301,
  id: "2020-03-30T06:40:00+02:00"
  },
  {
  infected: 492,
  activeInfected: 0,
  deceased: 16,
  quarantined: 61,
  tested: 14146,
  id: "2020-03-31T08:45:00+02:00"
  },
  {
  infected: 0,
  activeInfected: 0,
  deceased: 0,
  quarantined: 0,
  tested: 0,
  id: "2020-03-31T10:15:00+02:00"
  },
  {
  infected: 492,
  activeInfected: 0,
  deceased: 16,
  quarantined: 61,
  tested: 14146,
  id: "2020-03-31T10:20:00+02:00"
  },
  {
  infected: 492,
  activeInfected: 0,
  deceased: 0,
  quarantined: 61,
  tested: 14146,
  id: "2020-03-31T11:05:00+02:00"
  },
  {
  infected: 525,
  activeInfected: 0,
  deceased: 0,
  quarantined: 61,
  tested: 15208,
  id: "2020-04-01T06:50:00+02:00"
  },
  {
  infected: 585,
  activeInfected: 0,
  deceased: 0,
  quarantined: 59,
  tested: 16401,
  id: "2020-04-02T07:05:00+02:00"
  },
  {
  infected: 585,
  activeInfected: 0,
  deceased: 0,
  quarantined: 10668,
  tested: 16401,
  id: "2020-04-02T22:05:00+02:00"
  },
  {
  infected: 623,
  activeInfected: 0,
  deceased: 0,
  quarantined: 10668,
  tested: 17769,
  id: "2020-04-03T06:45:00+02:00"
  },
  {
  infected: 623,
  activeInfected: 0,
  deceased: 0,
  quarantined: 11399,
  tested: 17769,
  id: "2020-04-03T08:43:00+02:00"
  },
  {
  infected: 678,
  activeInfected: 0,
  deceased: 0,
  quarantined: 11399,
  tested: 19424,
  id: "2020-04-03T11:05:00+02:00"
  },
  {
  infected: 678,
  activeInfected: 0,
  deceased: 0,
  quarantined: 11399,
  tested: 19424,
  id: "2020-04-04T09:21:00+02:00"
  },
  {
  infected: 733,
  activeInfected: 0,
  deceased: 0,
  quarantined: 12492,
  tested: 21250,
  id: "2020-04-04T12:17:00+02:00"
  },
  {
  infected: 733,
  activeInfected: 0,
  deceased: 0,
  quarantined: 13435,
  tested: 21250,
  id: "2020-04-05T09:16:00+02:00"
  },
  {
  infected: 744,
  activeInfected: 0,
  deceased: 0,
  quarantined: 14325,
  tested: 22282,
  id: "2020-04-06T08:32:00+02:00"
  },
  {
  infected: 895,
  activeInfected: 0,
  deceased: 0,
  quarantined: 15481,
  tested: 25748,
  id: "2020-04-07T09:11:00+02:00"
  },
  {
  infected: 980,
  activeInfected: 0,
  deceased: 0,
  quarantined: 16006,
  tested: 27826,
  id: "2020-04-08T08:19:00+02:00"
  },
  {
  infected: 1190,
  activeInfected: 0,
  deceased: 0,
  quarantined: 16006,
  tested: 29948,
  id: "2020-04-09T08:45:00+02:00"
  },
  {
  infected: 1190,
  activeInfected: 0,
  deceased: 0,
  quarantined: 16006,
  tested: 29948,
  id: "2020-04-10T09:02:00+02:00"
  },
  {
  infected: 1310,
  activeInfected: 0,
  deceased: 0,
  quarantined: 17490,
  tested: 31961,
  id: "2020-04-11T09:51:00+02:00"
  },
  {
  infected: 1458,
  activeInfected: 0,
  deceased: 0,
  quarantined: 15333,
  tested: 34819,
  id: "2020-04-12T09:32:00+02:00"
  },
  {
  infected: 1458,
  activeInfected: 0,
  deceased: 0,
  quarantined: 15333,
  tested: 34819,
  id: "2020-04-13T09:39:00+02:00"
  },
  {
  infected: 1579,
  activeInfected: 0,
  deceased: 0,
  quarantined: 13360,
  tested: 37326,
  id: "2020-04-14T08:44:00+02:00"
  },
  {
  infected: 1579,
  activeInfected: 0,
  deceased: 0,
  quarantined: 13360,
  tested: 37326,
  id: "2020-04-15T08:55:00+02:00"
  },
  {
  infected: 1652,
  activeInfected: 0,
  deceased: 0,
  quarantined: 12737,
  tested: 38489,
  id: "2020-04-15T14:44:00+02:00"
  },
  {
  infected: 1763,
  activeInfected: 0,
  deceased: 0,
  quarantined: 12401,
  tested: 41590,
  id: "2020-04-16T09:41:00+02:00"
  },
  {
  infected: 1834,
  activeInfected: 0,
  deceased: 0,
  quarantined: 12150,
  tested: 43901,
  id: "2020-04-17T09:29:00+02:00"
  },
  {
  infected: 1834,
  activeInfected: 0,
  deceased: 0,
  quarantined: 12150,
  tested: 43901,
  id: "2020-04-18T09:38:00+02:00"
  },
  {
  infected: 1984,
  activeInfected: 0,
  deceased: 0,
  quarantined: 11240,
  tested: 48057,
  id: "2020-04-19T10:27:00+02:00"
  },
  {
  infected: 2098,
  activeInfected: 0,
  deceased: 0,
  quarantined: 11172,
  tested: 50052,
  id: "2020-04-20T09:05:00+02:00"
  },
  {
  infected: 2168,
  activeInfected: 0,
  deceased: 0,
  quarantined: 11049,
  tested: 52702,
  id: "2020-04-21T09:06:00+02:00"
  },
  {
  infected: 2284,
  activeInfected: 0,
  deceased: 0,
  quarantined: 10942,
  tested: 55390,
  id: "2020-04-22T08:42:00+02:00"
  },
  {
  infected: 2383,
  activeInfected: 0,
  deceased: 0,
  quarantined: 10942,
  tested: 58251,
  id: "2020-04-23T09:22:00+02:00"
  },
  {
  infected: 2443,
  activeInfected: 0,
  deceased: 0,
  quarantined: 10942,
  tested: 60801,
  id: "2020-04-24T09:21:00+02:00"
  },
  {
  infected: 2500,
  activeInfected: 0,
  deceased: 0,
  quarantined: 9589,
  tested: 63505,
  id: "2020-04-25T09:09:00+02:00"
  },
  {
  infected: 2583,
  activeInfected: 0,
  deceased: 0,
  quarantined: 9829,
  tested: 65625,
  id: "2020-04-26T08:44:00+02:00"
  },
  {
  infected: 2649,
  activeInfected: 0,
  deceased: 0,
  quarantined: 9889,
  tested: 67172,
  id: "2020-04-27T08:56:00+02:00"
  },
  {
  infected: 2727,
  activeInfected: 0,
  deceased: 0,
  quarantined: 10071,
  tested: 70300,
  id: "2020-04-28T09:16:00+02:00"
  },
  {
  infected: 2775,
  activeInfected: 0,
  deceased: 0,
  quarantined: 10199,
  tested: 72951,
  id: "2020-04-29T08:38:00+02:00"
  },
  {
  infected: 2863,
  activeInfected: 0,
  deceased: 0,
  quarantined: 10384,
  tested: 76331,
  id: "2020-04-30T08:52:00+02:00"
  },
  {
  infected: 2942,
  activeInfected: 0,
  deceased: 0,
  quarantined: 10754,
  tested: 79551,
  id: "2020-05-01T09:10:00+02:00"
  },
  {
  infected: 2998,
  activeInfected: 0,
  deceased: 0,
  quarantined: 10786,
  tested: 82010,
  id: "2020-05-02T09:08:00+02:00"
  },
  {
  infected: 0,
  activeInfected: 0,
  deceased: 0,
  quarantined: 0,
  tested: 0,
  id: "2020-05-03T09:20:00+02:00"
  },
  {
  infected: 0,
  activeInfected: 0,
  deceased: 0,
  quarantined: 0,
  tested: 0,
  id: "2020-05-04T08:41:00+02:00"
  },
  {
  infected: 0,
  activeInfected: 0,
  deceased: 0,
  quarantined: 0,
  tested: 0,
  id: "2020-05-04T11:29:00+02:00"
  },
  {
  infected: 0,
  activeInfected: 0,
  deceased: 0,
  quarantined: 0,
  tested: 0,
  id: "2020-05-05T08:59:00+02:00"
  },
  {
  infected: 0,
  activeInfected: 0,
  deceased: 0,
  quarantined: 0,
  tested: 0,
  id: "2020-05-06T08:30:00+02:00"
  },
  {
  infected: 0,
  activeInfected: 0,
  deceased: 0,
  quarantined: 0,
  tested: 0,
  id: "2020-05-06T12:59:00+02:00"
  },
  {
  infected: 0,
  activeInfected: 0,
  deceased: 0,
  quarantined: 0,
  tested: 0,
  id: "2020-05-07T08:45:00+02:00"
  },
  {
  infected: 1921,
  activeInfected: 0,
  deceased: 392,
  quarantined: 11036,
  tested: 99058,
  id: "2020-05-08T08:54:00+02:00"
  },
  {
  infected: 1904,
  activeInfected: 0,
  deceased: 405,
  quarantined: 10927,
  tested: 103258,
  id: "2020-05-09T08:56:00+02:00"
  },
  {
  infected: 1917,
  activeInfected: 0,
  deceased: 413,
  quarantined: 10356,
  tested: 108257,
  id: "2020-05-10T09:01:00+02:00"
  },
  {
  infected: 1905,
  activeInfected: 0,
  deceased: 421,
  quarantined: 10955,
  tested: 112165,
  id: "2020-05-11T08:30:00+02:00"
  },
  {
  infected: 1881,
  activeInfected: 0,
  deceased: 425,
  quarantined: 11016,
  tested: 114719,
  id: "2020-05-12T08:41:00+02:00"
  },
  {
  infected: 1775,
  activeInfected: 0,
  deceased: 436,
  quarantined: 11084,
  tested: 123258,
  id: "2020-05-13T09:16:00+02:00"
  },
  {
  infected: 1775,
  activeInfected: 0,
  deceased: 436,
  quarantined: 11084,
  tested: 123258,
  id: "2020-05-14T08:45:00+02:00"
  },
  {
  infected: 1688,
  activeInfected: 0,
  deceased: 442,
  quarantined: 10954,
  tested: 127237,
  id: "2020-05-15T09:11:00+02:00"
  },
  {
  infected: 1654,
  activeInfected: 0,
  deceased: 448,
  quarantined: 10742,
  tested: 131429,
  id: "2020-05-16T09:30:00+02:00"
  },
  {
  infected: 1662,
  activeInfected: 0,
  deceased: 451,
  quarantined: 10470,
  tested: 135137,
  id: "2020-05-17T08:58:00+02:00"
  },
  {
  infected: 1673,
  activeInfected: 0,
  deceased: 462,
  quarantined: 10388,
  tested: 137243,
  id: "2020-05-18T08:51:00+02:00"
  },
  {
  infected: 1673,
  activeInfected: 0,
  deceased: 462,
  quarantined: 10388,
  tested: 137243,
  id: "2020-05-18T11:42:00+02:00"
  },
  {
  infected: 1674,
  activeInfected: 0,
  deceased: 470,
  quarantined: 10931,
  tested: 142729,
  id: "2020-05-19T09:05:00+02:00"
  },
  {
  infected: 1674,
  activeInfected: 0,
  deceased: 470,
  quarantined: 10931,
  tested: 142729,
  id: "2020-05-19T09:10:00+02:00"
  },
  {
  infected: 1674,
  activeInfected: 0,
  deceased: 470,
  quarantined: 10931,
  tested: 142729,
  id: "2020-05-20T09:10:00+02:00"
  },
  {
  infected: 1659,
  activeInfected: 0,
  deceased: 473,
  quarantined: 11103,
  tested: 147511,
  id: "2020-05-21T08:46:00+02:00"
  },
  {
  infected: 1615,
  activeInfected: 0,
  deceased: 476,
  quarantined: 11668,
  tested: 155801,
  id: "2020-05-22T08:43:00+02:00"
  },
  {
  infected: 1576,
  activeInfected: 0,
  deceased: 482,
  quarantined: 11704,
  tested: 159260,
  id: "2020-05-23T09:03:00+02:00"
  },
  {
  infected: 1565,
  activeInfected: 0,
  deceased: 486,
  quarantined: 11934,
  tested: 162925,
  id: "2020-05-24T08:55:00+02:00"
  },
  {
  infected: 1554,
  activeInfected: 0,
  deceased: 491,
  quarantined: 11810,
  tested: 164619,
  id: "2020-05-25T08:46:00+02:00"
  },
  {
  infected: 1554,
  activeInfected: 0,
  deceased: 491,
  quarantined: 11810,
  tested: 164619,
  id: "2020-05-25T16:34:00+02:00"
  },
  {
  infected: 1436,
  activeInfected: 0,
  deceased: 499,
  quarantined: 11611,
  tested: 166263,
  id: "2020-05-26T09:09:00+02:00"
  },
  {
  infected: 1432,
  activeInfected: 0,
  deceased: 505,
  quarantined: 11616,
  tested: 169960,
  id: "2020-05-27T08:59:00+02:00"
  },
  {
  infected: 1300,
  activeInfected: 0,
  deceased: 517,
  quarantined: 10763,
  tested: 180152,
  id: "2020-05-28T08:59:00+02:00"
  },
  {
  infected: 3841,
  activeInfected: 1300,
  deceased: 517,
  quarantined: 10763,
  tested: 180152,
  id: "2020-05-29T09:20:00+02:00"
  },
  {
  infected: 3867,
  activeInfected: 1201,
  deceased: 524,
  quarantined: 11408,
  tested: 183562,
  id: "2020-05-30T10:34:00+02:00"
  },
  {
  infected: 3876,
  activeInfected: 1203,
  deceased: 526,
  quarantined: 11540,
  tested: 185980,
  id: "2020-05-31T10:43:00+02:00"
  },
  {
  infected: 3892,
  activeInfected: 1209,
  deceased: 527,
  quarantined: 11226,
  tested: 187965,
  id: "2020-06-01T10:17:00+02:00"
  },
  {
  infected: 3892,
  activeInfected: 1209,
  deceased: 527,
  quarantined: 11226,
  tested: 187965,
  id: "2020-06-01T11:50:00+02:00"
  },
  {
  infected: 3921,
  activeInfected: 1229,
  deceased: 532,
  quarantined: 11159,
  tested: 189969,
  id: "2020-06-02T10:44:00+02:00"
  },
  {
  infected: 3931,
  activeInfected: 1207,
  deceased: 534,
  quarantined: 11172,
  tested: 191572,
  id: "2020-06-03T10:40:00+02:00"
  },
  {
  infected: 3954,
  activeInfected: 1210,
  deceased: 539,
  quarantined: 10985,
  tested: 195894,
  id: "2020-06-04T11:23:00+02:00"
  },
  {
  infected: 3954,
  activeInfected: 1210,
  deceased: 539,
  quarantined: 10985,
  tested: 195894,
  id: "2020-06-04T12:28:00+02:00"
  },
  {
  infected: 3970,
  activeInfected: 1183,
  deceased: 542,
  quarantined: 9693,
  tested: 202606,
  id: "2020-06-05T10:24:00+02:00"
  },
  {
  infected: 3990,
  activeInfected: 1166,
  deceased: 545,
  quarantined: 10133,
  tested: 206853,
  id: "2020-06-06T11:07:00+02:00"
  },
  {
  infected: 4008,
  activeInfected: 1183,
  deceased: 546,
  quarantined: 9916,
  tested: 210202,
  id: "2020-06-07T11:56:00+02:00"
  },
  {
  infected: 4014,
  activeInfected: 1182,
  deceased: 548,
  quarantined: 9665,
  tested: 210749,
  id: "2020-06-08T10:26:00+02:00"
  },
  {
  infected: 4017,
  activeInfected: 1143,
  deceased: 550,
  quarantined: 9523,
  tested: 214468,
  id: "2020-06-09T10:26:00+02:00"
  },
  {
  infected: 4027,
  activeInfected: 1121,
  deceased: 551,
  quarantined: 8805,
  tested: 217689,
  id: "2020-06-10T10:34:00+02:00"
  },
  {
  infected: 4039,
  activeInfected: 1095,
  deceased: 553,
  quarantined: 9167,
  tested: 222247,
  id: "2020-06-11T10:46:00+02:00"
  },
  {
  infected: 4053,
  activeInfected: 1051,
  deceased: 555,
  quarantined: 8834,
  tested: 226669,
  id: "2020-06-12T10:28:00+02:00"
  },
  {
  infected: 4064,
  activeInfected: 1029,
  deceased: 559,
  quarantined: 8472,
  tested: 230139,
  id: "2020-06-13T10:42:00+02:00"
  },
  {
  infected: 4069,
  activeInfected: 1025,
  deceased: 562,
  quarantined: 7287,
  tested: 233742,
  id: "2020-06-14T10:56:00+02:00"
  },
  {
  infected: 4076,
  activeInfected: 1028,
  deceased: 563,
  quarantined: 7707,
  tested: 235377,
  id: "2020-06-15T10:07:00+02:00"
  },
  {
  infected: 4077,
  activeInfected: 996,
  deceased: 565,
  quarantined: 7545,
  tested: 236828,
  id: "2020-06-16T10:33:00+02:00"
  },
  {
  infected: 4078,
  activeInfected: 964,
  deceased: 567,
  quarantined: 7545,
  tested: 242139,
  id: "2020-06-17T10:46:00+02:00"
  },
  {
  infected: 4079,
  activeInfected: 947,
  deceased: 568,
  quarantined: 7092,
  tested: 245598,
  id: "2020-06-18T10:38:00+02:00"
  },
  {
  infected: 4081,
  activeInfected: 932,
  deceased: 568,
  quarantined: 6310,
  tested: 249391,
  id: "2020-06-19T10:53:00+02:00"
  },
  {
  infected: 4094,
  activeInfected: 935,
  deceased: 570,
  quarantined: 4490,
  tested: 256326,
  id: "2020-06-20T10:31:00+02:00"
  },
  {
  infected: 4094,
  activeInfected: 935,
  deceased: 570,
  quarantined: 4490,
  tested: 256326,
  id: "2020-06-21T11:00:00+02:00"
  },
  {
  infected: 4102,
  activeInfected: 940,
  deceased: 572,
  quarantined: 3528,
  tested: 258115,
  id: "2020-06-22T10:42:00+02:00"
  },
  {
  infected: 4107,
  activeInfected: 934,
  deceased: 573,
  quarantined: 4193,
  tested: 258861,
  id: "2020-06-23T09:53:00+02:00"
  },
  {
  infected: 4114,
  activeInfected: 920,
  deceased: 576,
  quarantined: 3705,
  tested: 261420,
  id: "2020-06-24T11:29:00+02:00"
  },
  {
  infected: 4123,
  activeInfected: 906,
  deceased: 577,
  quarantined: 3041,
  tested: 265129,
  id: "2020-06-25T09:59:00+02:00"
  },
  {
  infected: 4127,
  activeInfected: 886,
  deceased: 578,
  quarantined: 2801,
  tested: 267056,
  id: "2020-06-26T10:53:00+02:00"
  },
  {
  infected: 4138,
  activeInfected: 879,
  deceased: 578,
  quarantined: 2681,
  tested: 270263,
  id: "2020-06-27T11:24:00+02:00"
  },
  {
  infected: 4142,
  activeInfected: 876,
  deceased: 581,
  quarantined: 2551,
  tested: 271194,
  id: "2020-06-28T11:22:00+02:00"
  },
  {
  infected: 4145,
  activeInfected: 875,
  deceased: 585,
  quarantined: 1763,
  tested: 273897,
  id: "2020-06-29T10:48:00+02:00"
  },
  {
  infected: 4155,
  activeInfected: 878,
  deceased: 585,
  quarantined: 1763,
  tested: 274945,
  id: "2020-06-30T10:26:00+02:00"
  },
  {
  infected: 4155,
  activeInfected: 878,
  deceased: 585,
  quarantined: 1783,
  tested: 274945,
  id: "2020-06-30T10:34:00+02:00"
  },
  {
  infected: 4157,
  activeInfected: 857,
  deceased: 586,
  quarantined: 1412,
  tested: 277750,
  id: "2020-07-01T11:26:00+02:00"
  },
  {
  infected: 4166,
  activeInfected: 858,
  deceased: 587,
  quarantined: 1201,
  tested: 279690,
  id: "2020-07-02T11:14:00+02:00"
  },
  {
  infected: 4172,
  activeInfected: 832,
  deceased: 588,
  quarantined: 1217,
  tested: 281628,
  id: "2020-07-03T11:22:00+02:00"
  },
  {
  infected: 4174,
  activeInfected: 801,
  deceased: 589,
  quarantined: 1252,
  tested: 283508,
  id: "2020-07-04T10:53:00+02:00"
  },
  {
  infected: 4183,
  activeInfected: 783,
  deceased: 589,
  quarantined: 1348,
  tested: 285590,
  id: "2020-07-05T10:16:00+02:00"
  },
  {
  infected: 4189,
  activeInfected: 740,
  deceased: 589,
  quarantined: 1675,
  tested: 286083,
  id: "2020-07-06T11:12:00+02:00"
  },
  {
  infected: 4205,
  activeInfected: 742,
  deceased: 589,
  quarantined: 1658,
  tested: 286983,
  id: "2020-07-07T11:15:00+02:00"
  },
  {
  infected: 4210,
  activeInfected: 736,
  deceased: 589,
  quarantined: 1909,
  tested: 288693,
  id: "2020-07-08T09:50:00+02:00"
  },
  {
  infected: 4220,
  activeInfected: 742,
  deceased: 591,
  quarantined: 2123,
  tested: 289602,
  id: "2020-07-09T11:18:00+02:00"
  },
  {
  infected: 4229,
  activeInfected: 660,
  deceased: 595,
  quarantined: 2409,
  tested: 293220,
  id: "2020-07-10T10:49:00+02:00"
  },
  {
  infected: 4229,
  activeInfected: 660,
  deceased: 595,
  quarantined: 2409,
  tested: 293220,
  id: "2020-07-11T10:20:00+02:00"
  },
  {
  infected: 4247,
  activeInfected: 579,
  deceased: 595,
  quarantined: 2453,
  tested: 295561,
  id: "2020-07-12T10:47:00+02:00"
  },
  {
  infected: 4247,
  activeInfected: 579,
  deceased: 595,
  quarantined: 2453,
  tested: 295561,
  id: "2020-07-13T10:45:00+02:00"
  },
  {
  infected: 4263,
  activeInfected: 541,
  deceased: 595,
  quarantined: 2979,
  tested: 299185,
  id: "2020-07-14T11:09:00+02:00"
  },
  {
  infected: 4263,
  activeInfected: 541,
  deceased: 595,
  quarantined: 2979,
  tested: 299185,
  id: "2020-07-15T10:45:00+02:00"
  },
  {
  infected: 4279,
  activeInfected: 528,
  deceased: 595,
  quarantined: 3701,
  tested: 300632,
  id: "2020-07-16T10:39:00+02:00"
  },
  {
  infected: 4293,
  activeInfected: 478,
  deceased: 595,
  quarantined: 4213,
  tested: 302749,
  id: "2020-07-17T11:00:00+02:00"
  },
  {
  infected: 4315,
  activeInfected: 497,
  deceased: 596,
  quarantined: 4953,
  tested: 305133,
  id: "2020-07-18T11:11:00+02:00"
  },
  {
  infected: 4333,
  activeInfected: 514,
  deceased: 596,
  quarantined: 5486,
  tested: 307846,
  id: "2020-07-19T10:51:00+02:00"
  },
  {
  infected: 4339,
  activeInfected: 511,
  deceased: 596,
  quarantined: 5710,
  tested: 310070,
  id: "2020-07-20T10:27:00+02:00"
  },
  {
  infected: 4347,
  activeInfected: 494,
  deceased: 596,
  quarantined: 6388,
  tested: 310930,
  id: "2020-07-21T10:12:00+02:00"
  },
  {
  infected: 4366,
  activeInfected: 487,
  deceased: 596,
  quarantined: 6553,
  tested: 312988,
  id: "2020-07-22T10:33:00+02:00"
  },
  {
  infected: 4380,
  activeInfected: 484,
  deceased: 596,
  quarantined: 7001,
  tested: 316120,
  id: "2020-07-23T11:11:00+02:00"
  },
  {
  infected: 4424,
  activeInfected: 504,
  deceased: 596,
  quarantined: 7453,
  tested: 323673,
  id: "2020-07-24T10:22:00+02:00"
  },
  {
  infected: 4424,
  activeInfected: 504,
  deceased: 596,
  quarantined: 7453,
  tested: 323673,
  id: "2020-07-25T10:49:00+02:00"
  },
  {
  infected: 4435,
  activeInfected: 510,
  deceased: 596,
  quarantined: 7824,
  tested: 326554,
  id: "2020-07-26T10:42:00+02:00"
  },
  {
  infected: 4448,
  activeInfected: 523,
  deceased: 596,
  quarantined: 8490,
  tested: 328583,
  id: "2020-07-27T10:32:00+02:00"
  },
  {
  infected: 4456,
  activeInfected: 529,
  deceased: 596,
  quarantined: 8970,
  tested: 330239,
  id: "2020-07-28T11:21:00+02:00"
  },
  {
  infected: 4465,
  activeInfected: 530,
  deceased: 596,
  quarantined: 8683,
  tested: 333446,
  id: "2020-07-29T10:48:00+02:00"
  },
  {
  infected: 4484,
  activeInfected: 542,
  deceased: 596,
  quarantined: 7819,
  tested: 336461,
  id: "2020-07-30T11:16:00+02:00"
  },
  {
  infected: 4505,
  activeInfected: 556,
  deceased: 596,
  quarantined: 8083,
  tested: 339163,
  id: "2020-07-31T11:39:00+02:00"
  },
  {
  infected: 4526,
  activeInfected: 565,
  deceased: 597,
  quarantined: 7782,
  tested: 342887,
  id: "2020-08-01T10:32:00+02:00"
  },
  {
  infected: 4535,
  activeInfected: 549,
  deceased: 597,
  quarantined: 7436,
  tested: 344997,
  id: "2020-08-02T11:13:00+02:00"
  },
  {
  infected: 4544,
  activeInfected: 534,
  deceased: 597,
  quarantined: 7657,
  tested: 346962,
  id: "2020-08-03T10:19:00+02:00"
  },
  {
  infected: 4553,
  activeInfected: 540,
  deceased: 598,
  quarantined: 7742,
  tested: 348132,
  id: "2020-08-04T10:56:00+02:00"
  },
  {
  infected: 4564,
  activeInfected: 534,
  deceased: 599,
  quarantined: 6858,
  tested: 350108,
  id: "2020-08-05T12:46:00+02:00"
  },
  {
  infected: 4597,
  activeInfected: 534,
  deceased: 600,
  quarantined: 7227,
  tested: 352546,
  id: "2020-08-06T10:54:00+02:00"
  },
  {
  infected: 4621,
  activeInfected: 555,
  deceased: 602,
  quarantined: 7092,
  tested: 355467,
  id: "2020-08-07T10:58:00+02:00"
  },
  {
  infected: 4653,
  activeInfected: 560,
  deceased: 602,
  quarantined: 7092,
  tested: 358437,
  id: "2020-08-08T11:08:00+02:00"
  },
  {
  infected: 4653,
  activeInfected: 560,
  deceased: 602,
  quarantined: 6783,
  tested: 358437,
  id: "2020-08-08T11:15:00+02:00"
  },
  {
  infected: 4696,
  activeInfected: 595,
  deceased: 602,
  quarantined: 7184,
  tested: 360772,
  id: "2020-08-09T11:15:00+02:00"
  },
  {
  infected: 4746,
  activeInfected: 614,
  deceased: 605,
  quarantined: 7492,
  tested: 363459,
  id: "2020-08-10T11:22:00+02:00"
  },
  {
  infected: 4746,
  activeInfected: 614,
  deceased: 605,
  quarantined: 7492,
  tested: 363459,
  id: "2020-08-11T11:06:00+02:00"
  },
  {
  infected: 4768,
  activeInfected: 634,
  deceased: 605,
  quarantined: 7730,
  tested: 366356,
  id: "2020-08-12T11:16:00+02:00"
  },
  {
  infected: 4813,
  activeInfected: 645,
  deceased: 607,
  quarantined: 7613,
  tested: 369545,
  id: "2020-08-13T11:16:00+02:00"
  },
  {
  infected: 4853,
  activeInfected: 656,
  deceased: 607,
  quarantined: 7707,
  tested: 372687,
  id: "2020-08-14T11:18:00+02:00"
  },
  {
  infected: 4877,
  activeInfected: 664,
  deceased: 607,
  quarantined: 8526,
  tested: 375685,
  id: "2020-08-15T11:07:00+02:00"
  },
  {
  infected: 4916,
  activeInfected: 685,
  deceased: 608,
  quarantined: 8104,
  tested: 378608,
  id: "2020-08-16T11:31:00+02:00"
  },
  {
  infected: 4946,
  activeInfected: 708,
  deceased: 608,
  quarantined: 8188,
  tested: 380932,
  id: "2020-08-17T10:42:00+02:00"
  },
  {
  infected: 4970,
  activeInfected: 730,
  deceased: 609,
  quarantined: 8098,
  tested: 383411,
  id: "2020-08-18T10:44:00+02:00"
  },
  {
  infected: 5002,
  activeInfected: 728,
  deceased: 609,
  quarantined: 7806,
  tested: 387111,
  id: "2020-08-19T10:53:00+02:00"
  },
  {
  infected: 5046,
  activeInfected: 759,
  deceased: 609,
  quarantined: 7663,
  tested: 390079,
  id: "2020-08-20T10:43:00+02:00"
  },
  {
  infected: 5098,
  activeInfected: 806,
  deceased: 611,
  quarantined: 7543,
  tested: 393431,
  id: "2020-08-21T10:56:00+02:00"
  },
  {
  infected: 5133,
  activeInfected: 830,
  deceased: 611,
  quarantined: 7118,
  tested: 394911,
  id: "2020-08-22T10:52:00+02:00"
  },
  {
  infected: 5155,
  activeInfected: 847,
  deceased: 613,
  quarantined: 7420,
  tested: 397092,
  id: "2020-08-23T11:13:00+02:00"
  },
  {
  infected: 5191,
  activeInfected: 883,
  deceased: 613,
  quarantined: 7917,
  tested: 398550,
  id: "2020-08-24T10:56:00+02:00"
  },
  {
  infected: 5215,
  activeInfected: 885,
  deceased: 614,
  quarantined: 7284,
  tested: 400442,
  id: "2020-08-25T10:57:00+02:00"
  },
  {
  infected: 5288,
  activeInfected: 940,
  deceased: 614,
  quarantined: 7707,
  tested: 405067,
  id: "2020-08-26T10:53:00+02:00"
  },
  {
  infected: 5379,
  activeInfected: 1008,
  deceased: 614,
  quarantined: 7654,
  tested: 408799,
  id: "2020-08-27T11:01:00+02:00"
  },
  {
  infected: 5511,
  activeInfected: 1138,
  deceased: 614,
  quarantined: 8008,
  tested: 414645,
  id: "2020-08-28T10:54:00+02:00"
  },
  {
  infected: 5669,
  activeInfected: 1296,
  deceased: 614,
  quarantined: 8191,
  tested: 417890,
  id: "2020-08-29T11:13:00+02:00"
  },
  {
  infected: 6139,
  activeInfected: 1763,
  deceased: 615,
  quarantined: 8982,
  tested: 428150,
  id: "2020-08-30T11:42:00+02:00"
  },
  {
  infected: 6139,
  activeInfected: 1763,
  deceased: 615,
  quarantined: 8982,
  tested: 428150,
  id: "2020-08-31T10:20:00+02:00"
  },
  {
  infected: 6257,
  activeInfected: 1820,
  deceased: 616,
  quarantined: 10124,
  tested: 429942,
  id: "2020-09-01T10:35:00+02:00"
  },
  {
  infected: 6622,
  activeInfected: 2100,
  deceased: 619,
  quarantined: 11485,
  tested: 437531,
  id: "2020-09-02T10:29:00+02:00"
  },
  {
  infected: 6923,
  activeInfected: 2373,
  deceased: 620,
  quarantined: 12608,
  tested: 445047,
  id: "2020-09-03T10:26:00+02:00"
  },
  {
  infected: 7382,
  activeInfected: 2817,
  deceased: 621,
  quarantined: 14619,
  tested: 452138,
  id: "2020-09-04T11:13:00+02:00"
  },
  {
  infected: 7892,
  activeInfected: 3316,
  deceased: 624,
  quarantined: 16438,
  tested: 460235,
  id: "2020-09-05T10:12:00+02:00"
  },
  {
  infected: 8387,
  activeInfected: 3811,
  deceased: 624,
  quarantined: 18480,
  tested: 470000,
  id: "2020-09-06T11:36:00+02:00"
  },
  {
  infected: 8963,
  activeInfected: 4377,
  deceased: 625,
  quarantined: 21756,
  tested: 481424,
  id: "2020-09-07T11:18:00+02:00"
  },
  {
  infected: 9304,
  activeInfected: 4706,
  deceased: 626,
  quarantined: 23318,
  tested: 487146,
  id: "2020-09-08T10:47:00+02:00"
  },
  {
  infected: 10191,
  activeInfected: 5571,
  deceased: 630,
  quarantined: 25043,
  tested: 505585,
  id: "2020-09-09T10:30:00+02:00"
  },
  {
  infected: 10191,
  activeInfected: 5571,
  deceased: 630,
  quarantined: 25043,
  tested: 505585,
  id: "2020-09-10T10:45:00+02:00"
  },
  {
  infected: 10909,
  activeInfected: 6264,
  deceased: 631,
  quarantined: 25117,
  tested: 517222,
  id: "2020-09-11T10:54:00+02:00"
  },
  {
  infected: 11825,
  activeInfected: 7134,
  deceased: 633,
  quarantined: 25569,
  tested: 529063,
  id: "2020-09-12T10:43:00+02:00"
  },
  {
  infected: 12309,
  activeInfected: 7603,
  deceased: 637,
  quarantined: 26531,
  tested: 537897,
  id: "2020-09-13T11:20:00+02:00"
  },
  {
  infected: 13153,
  activeInfected: 8394,
  deceased: 642,
  quarantined: 26668,
  tested: 549211,
  id: "2020-09-14T11:02:00+02:00"
  },
  {
  infected: 14460,
  activeInfected: 9653,
  deceased: 654,
  quarantined: 29005,
  tested: 567691,
  id: "2020-09-15T10:52:00+02:00"
  },
  {
  infected: 14460,
  activeInfected: 9653,
  deceased: 654,
  quarantined: 29005,
  tested: 567691,
  id: "2020-09-16T10:40:00+02:00"
  },
  {
  infected: 15170,
  activeInfected: 10280,
  deceased: 663,
  quarantined: 28920,
  tested: 580072,
  id: "2020-09-17T11:23:00+02:00"
  },
  {
  infected: 16111,
  activeInfected: 11202,
  deceased: 669,
  quarantined: 27866,
  tested: 591618,
  id: "2020-09-18T10:43:00+02:00"
  },
  {
  infected: 16920,
  activeInfected: 11863,
  deceased: 675,
  quarantined: 28527,
  tested: 604122,
  id: "2020-09-19T10:57:00+02:00"
  },
  {
  infected: 17990,
  activeInfected: 12916,
  deceased: 683,
  quarantined: 25583,
  tested: 615999,
  id: "2020-09-20T10:52:00+02:00"
  },
  {
  infected: 18866,
  activeInfected: 13779,
  deceased: 686,
  quarantined: 26750,
  tested: 626021,
  id: "2020-09-21T11:31:00+02:00"
  },
  {
  infected: 19499,
  activeInfected: 14246,
  deceased: 694,
  quarantined: 25212,
  tested: 632031,
  id: "2020-09-22T11:18:00+02:00"
  },
  {
  infected: 20450,
  activeInfected: 15104,
  deceased: 702,
  quarantined: 27449,
  tested: 645492,
  id: "2020-09-23T11:09:00+02:00"
  },
  {
  infected: 21200,
  activeInfected: 15673,
  deceased: 709,
  quarantined: 27403,
  tested: 657437,
  id: "2020-09-24T10:30:00+02:00"
  },
  {
  infected: 22127,
  activeInfected: 16464,
  deceased: 718,
  quarantined: 25374,
  tested: 668553,
  id: "2020-09-25T10:50:00+02:00"
  },
  {
  infected: 23077,
  activeInfected: 17248,
  deceased: 730,
  quarantined: 25017,
  tested: 680335,
  id: "2020-09-26T10:58:00+02:00"
  },
  {
  infected: 24014,
  activeInfected: 18137,
  deceased: 736,
  quarantined: 24538,
  tested: 690408,
  id: "2020-09-27T11:26:00+02:00"
  },
  {
  infected: 24716,
  activeInfected: 18815,
  deceased: 749,
  quarantined: 24017,
  tested: 697473,
  id: "2020-09-28T09:41:00+02:00"
  },
  {
  infected: 25567,
  activeInfected: 19637,
  deceased: 757,
  quarantined: 23740,
  tested: 704510,
  id: "2020-09-29T10:52:00+02:00"
  },
  {
  infected: 26461,
  activeInfected: 19806,
  deceased: 765,
  quarantined: 24121,
  tested: 715677,
  id: "2020-09-30T11:16:00+02:00"
  },
  {
  infected: 27309,
  activeInfected: 20410,
  deceased: 781,
  quarantined: 21930,
  tested: 727649,
  id: "2020-10-01T10:57:00+02:00"
  },
  {
  infected: 28631,
  activeInfected: 21484,
  deceased: 798,
  quarantined: 22906,
  tested: 740043,
  id: "2020-10-02T10:37:00+02:00"
  },
  {
  infected: 30575,
  activeInfected: 22283,
  deceased: 822,
  quarantined: 19923,
  tested: 759174,
  id: "2020-10-03T11:09:00+02:00"
  },
  {
  infected: 30575,
  activeInfected: 22283,
  deceased: 822,
  quarantined: 19923,
  tested: 759174,
  id: "2020-10-04T11:27:00+02:00"
  },
  {
  infected: 31480,
  activeInfected: 22482,
  deceased: 833,
  quarantined: 20199,
  tested: 765598,
  id: "2020-10-05T10:44:00+02:00"
  },
  {
  infected: 32298,
  activeInfected: 22722,
  deceased: 853,
  quarantined: 20088,
  tested: 771297,
  id: "2020-10-06T10:39:00+02:00"
  },
  {
  infected: 33114,
  activeInfected: 23088,
  deceased: 877,
  quarantined: 20319,
  tested: 781023,
  id: "2020-10-07T11:27:00+02:00"
  },
  {
  infected: 34046,
  activeInfected: 23961,
  deceased: 898,
  quarantined: 20217,
  tested: 792485,
  id: "2020-10-08T11:01:00+02:00"
  },
  {
  infected: 35222,
  activeInfected: 25107,
  deceased: 913,
  quarantined: 22385,
  tested: 803648,
  id: "2020-10-09T10:58:00+02:00"
  },
  {
  infected: 36596,
  activeInfected: 25980,
  deceased: 933,
  quarantined: 22780,
  tested: 815367,
  id: "2020-10-10T10:47:00+02:00"
  },
  {
  infected: 37664,
  activeInfected: 25862,
  deceased: 954,
  quarantined: 22215,
  tested: 825570,
  id: "2020-10-11T10:57:00+02:00"
  },
  {
  infected: 39862,
  activeInfected: 27113,
  deceased: 996,
  quarantined: 21990,
  tested: 841220,
  id: "2020-10-12T10:40:00+02:00"
  },
  {
  infected: 40782,
  activeInfected: 27595,
  deceased: 1023,
  quarantined: 23815,
  tested: 850878,
  id: "2020-10-13T10:35:00+02:00"
  },
  {
  infected: 40782,
  activeInfected: 27595,
  deceased: 1023,
  quarantined: 23815,
  tested: 850878,
  id: "2020-10-14T10:45:00+02:00"
  },
  {
  infected: 41732,
  activeInfected: 28052,
  deceased: 1052,
  quarantined: 24710,
  tested: 861620,
  id: "2020-10-15T10:52:00+02:00"
  },
  {
  infected: 43025,
  activeInfected: 28806,
  deceased: 1085,
  quarantined: 22656,
  tested: 871417,
  id: "2020-10-16T10:54:00+02:00"
  },
  {
  infected: 44816,
  activeInfected: 30127,
  deceased: 1109,
  quarantined: 25647,
  tested: 884388,
  id: "2020-10-17T11:24:00+02:00"
  },
  {
  infected: 46290,
  activeInfected: 31060,
  deceased: 1142,
  quarantined: 25734,
  tested: 894385,
  id: "2020-10-18T11:06:00+02:00"
  },
  {
  infected: 47768,
  activeInfected: 32283,
  deceased: 1173,
  quarantined: 24929,
  tested: 904036,
  id: "2020-10-19T10:41:00+02:00"
  },
  {
  infected: 48757,
  activeInfected: 32909,
  deceased: 1211,
  quarantined: 24780,
  tested: 910368,
  id: "2020-10-20T11:02:00+02:00"
  },
  {
  infected: 50180,
  activeInfected: 34016,
  deceased: 1259,
  quarantined: 25203,
  tested: 919481,
  id: "2020-10-21T11:18:00+02:00"
  },
  {
  infected: 52212,
  activeInfected: 35653,
  deceased: 1305,
  quarantined: 24764,
  tested: 935842,
  id: "2020-10-22T10:47:00+02:00"
  },
  {
  infected: 56098,
  activeInfected: 38701,
  deceased: 1390,
  quarantined: 27859,
  tested: 961441,
  id: "2020-10-23T11:04:00+02:00"
  },
  {
  infected: 56098,
  activeInfected: 38701,
  deceased: 1390,
  quarantined: 27859,
  tested: 961441,
  id: "2020-10-24T11:29:00+02:00"
  },
  {
  infected: 59247,
  activeInfected: 41580,
  deceased: 1425,
  quarantined: 27883,
  tested: 980373,
  id: "2020-10-25T10:31:00+01:00"
  },
  {
  infected: 61563,
  activeInfected: 43600,
  deceased: 1472,
  quarantined: 28070,
  tested: 990383,
  id: "2020-10-26T09:48:00+01:00"
  },
  {
  infected: 63642,
  activeInfected: 45461,
  deceased: 1535,
  quarantined: 27050,
  tested: 1002093,
  id: "2020-10-27T10:11:00+01:00"
  },
  {
  infected: 65933,
  activeInfected: 47257,
  deceased: 1578,
  quarantined: 26678,
  tested: 1017689,
  id: "2020-10-28T09:52:00+01:00"
  },
  {
  infected: 68127,
  activeInfected: 49024,
  deceased: 1634,
  quarantined: 25585,
  tested: 1032942,
  id: "2020-10-29T09:46:00+01:00"
  },
  {
  infected: 71413,
  activeInfected: 51761,
  deceased: 1699,
  quarantined: 26396,
  tested: 1048580,
  id: "2020-10-30T09:34:00+01:00"
  },
  {
  infected: 75321,
  activeInfected: 54539,
  deceased: 1750,
  quarantined: 28596,
  tested: 1065143,
  id: "2020-10-31T11:37:00+01:00"
  },
  {
  infected: 79199,
  activeInfected: 57302,
  deceased: 1819,
  quarantined: 29635,
  tested: 1083743,
  id: "2020-11-01T10:05:00+01:00"
  },
  {
  infected: 82780,
  activeInfected: 60415,
  deceased: 1889,
  quarantined: 29750,
  tested: 1097371,
  id: "2020-11-02T09:48:00+01:00"
  },
  {
  infected: 86769,
  activeInfected: 63940,
  deceased: 1973,
  quarantined: 30984,
  tested: 1111991,
  id: "2020-11-03T10:10:00+01:00"
  },
  {
  infected: 94916,
  activeInfected: 69946,
  deceased: 2147,
  quarantined: 34603,
  tested: 1147616,
  id: "2020-11-04T10:13:00+01:00"
  },
  {
  infected: 94916,
  activeInfected: 69946,
  deceased: 2147,
  quarantined: 34603,
  tested: 1147616,
  id: "2020-11-05T10:05:00+01:00"
  },
  {
  infected: 99625,
  activeInfected: 74162,
  deceased: 2250,
  quarantined: 30741,
  tested: 1167641,
  id: "2020-11-06T10:18:00+01:00"
  },
  {
  infected: 104943,
  activeInfected: 77739,
  deceased: 2357,
  quarantined: 36911,
  tested: 1189962,
  id: "2020-11-07T10:22:00+01:00"
  },
  {
  infected: 109616,
  activeInfected: 82108,
  deceased: 2438,
  quarantined: 34287,
  tested: 1209151,
  id: "2020-11-08T10:27:00+01:00"
  },
  {
  infected: 114778,
  activeInfected: 86134,
  deceased: 2493,
  quarantined: 36356,
  tested: 1225399,
  id: "2020-11-09T09:54:00+01:00"
  },
  {
  infected: 118918,
  activeInfected: 88737,
  deceased: 2596,
  quarantined: 36078,
  tested: 1238467,
  id: "2020-11-10T10:24:00+01:00"
  },
  {
  infected: 122863,
  activeInfected: 91358,
  deceased: 2697,
  quarantined: 36492,
  tested: 1259454,
  id: "2020-11-11T10:24:00+01:00"
  },
  {
  infected: 126790,
  activeInfected: 94704,
  deceased: 2784,
  quarantined: 34040,
  tested: 1282975,
  id: "2020-11-12T10:16:00+01:00"
  },
  {
  infected: 131887,
  activeInfected: 99202,
  deceased: 2883,
  quarantined: 36166,
  tested: 1306887,
  id: "2020-11-13T10:20:00+01:00"
  },
  {
  infected: 136723,
  activeInfected: 102607,
  deceased: 2990,
  quarantined: 36166,
  tested: 1326027,
  id: "2020-11-14T10:18:00+01:00"
  },
  {
  infected: 136723,
  activeInfected: 102607,
  deceased: 2990,
  quarantined: 38028,
  tested: 1326027,
  id: "2020-11-14T11:10:00+01:00"
  },
  {
  infected: 140961,
  activeInfected: 106265,
  deceased: 3097,
  quarantined: 36411,
  tested: 1354742,
  id: "2020-11-15T10:19:00+01:00"
  },
  {
  infected: 147456,
  activeInfected: 110256,
  deceased: 3190,
  quarantined: 35090,
  tested: 1360840,
  id: "2020-11-16T09:50:00+01:00"
  },
  {
  infected: 152659,
  activeInfected: 115193,
  deceased: 3281,
  quarantined: 35042,
  tested: 1388132,
  id: "2020-11-17T10:09:00+01:00"
  },
  {
  infected: 161461,
  activeInfected: 121644,
  deceased: 3472,
  quarantined: 38610,
  tested: 1433008,
  id: "2020-11-18T10:09:00+01:00"
  },
  {
  infected: 161461,
  activeInfected: 121644,
  deceased: 3472,
  quarantined: 38610,
  tested: 1433008,
  id: "2020-11-19T10:05:00+01:00"
  },
  {
  infected: 165901,
  activeInfected: 124259,
  deceased: 3568,
  quarantined: 42241,
  tested: 1455868,
  id: "2020-11-20T10:09:00+01:00"
  },
  {
  infected: 174618,
  activeInfected: 127903,
  deceased: 3800,
  quarantined: 42370,
  tested: 1502847,
  id: "2020-11-21T10:09:00+01:00"
  },
  {
  infected: 174618,
  activeInfected: 127903,
  deceased: 3800,
  quarantined: 42370,
  tested: 1502847,
  id: "2020-11-22T10:20:00+01:00"
  },
  {
  infected: 177952,
  activeInfected: 130722,
  deceased: 3891,
  quarantined: 42071,
  tested: 1518158,
  id: "2020-11-23T10:06:00+01:00"
  },
  {
  infected: 181881,
  activeInfected: 133853,
  deceased: 4008,
  quarantined: 41557,
  tested: 1528302,
  id: "2020-11-24T10:26:00+01:00"
  },
  {
  infected: 185687,
  activeInfected: 137553,
  deceased: 4114,
  quarantined: 41558,
  tested: 1548318,
  id: "2020-11-25T10:19:00+01:00"
  },
  {
  infected: 192047,
  activeInfected: 138202,
  deceased: 4229,
  quarantined: 45750,
  tested: 1566619,
  id: "2020-11-26T10:19:00+01:00"
  },
  {
  infected: 192047,
  activeInfected: 138202,
  deceased: 4229,
  quarantined: 45750,
  tested: 1580197,
  id: "2020-11-26T13:22:00+01:00"
  },
  {
  infected: 198440,
  activeInfected: 141950,
  deceased: 4364,
  quarantined: 49549,
  tested: 1601203,
  id: "2020-11-27T10:11:00+01:00"
  },
  {
  infected: 204708,
  activeInfected: 146171,
  deceased: 4516,
  quarantined: 51142,
  tested: 1622765,
  id: "2020-11-28T09:58:00+01:00"
  },
  {
  infected: 211527,
  activeInfected: 151218,
  deceased: 4672,
  quarantined: 50227,
  tested: 1639076,
  id: "2020-11-29T10:20:00+01:00"
  },
  {
  infected: 221073,
  activeInfected: 151294,
  deceased: 4977,
  quarantined: 48171,
  tested: 1653780,
  id: "2020-11-30T09:58:00+01:00"
  },
  {
  infected: 221073,
  activeInfected: 151294,
  deceased: 4977,
  quarantined: 48171,
  tested: 1653780,
  id: "2020-12-01T10:00:00+01:00"
  },
  {
  infected: 221073,
  activeInfected: 151294,
  deceased: 4977,
  quarantined: 48171,
  tested: 1835286,
  id: "2020-12-01T13:04:00+01:00"
  },
  {
  infected: 231844,
  activeInfected: 159487,
  deceased: 5324,
  quarantined: 50430,
  tested: 1876274,
  id: "2020-12-02T10:00:00+01:00"
  },
  {
  infected: 231844,
  activeInfected: 159487,
  deceased: 5324,
  quarantined: 50430,
  tested: 1876274,
  id: "2020-12-03T10:10:00+01:00"
  },
  {
  infected: 238056,
  activeInfected: 164018,
  deceased: 5513,
  quarantined: 53238,
  tested: 1894753,
  id: "2020-12-04T10:10:00+01:00"
  },
  {
  infected: 243581,
  activeInfected: 167479,
  deceased: 5706,
  quarantined: 53315,
  tested: 1918043,
  id: "2020-12-05T10:05:00+01:00"
  },
  {
  infected: 250278,
  activeInfected: 172728,
  deceased: 5868,
  quarantined: 50283,
  tested: 1941724,
  id: "2020-12-06T09:54:00+01:00"
  },
  {
  infected: 254148,
  activeInfected: 173881,
  deceased: 5984,
  quarantined: 51485,
  tested: 1963148,
  id: "2020-12-07T09:42:00+01:00"
  },
  {
  infected: 254148,
  activeInfected: 173881,
  deceased: 5984,
  quarantined: 51485,
  tested: 2149291,
  id: "2020-12-07T12:43:00+01:00"
  },
  {
  infected: 256367,
  activeInfected: 174966,
  deceased: 6120,
  quarantined: 45542,
  tested: 2158818,
  id: "2020-12-08T09:40:00+01:00"
  },
  {
  infected: 259588,
  activeInfected: 177038,
  deceased: 6280,
  quarantined: 45957,
  tested: 2187555,
  id: "2020-12-09T09:48:00+01:00"
  },
  {
  infected: 265003,
  activeInfected: 181190,
  deceased: 6451,
  quarantined: 43923,
  tested: 2216880,
  id: "2020-12-10T09:50:00+01:00"
  },
  {
  infected: 271200,
  activeInfected: 185878,
  deceased: 6622,
  quarantined: 49524,
  tested: 2245483,
  id: "2020-12-11T10:04:00+01:00"
  },
  {
  infected: 276247,
  activeInfected: 189694,
  deceased: 6784,
  quarantined: 49365,
  tested: 2275935,
  id: "2020-12-12T09:27:00+01:00"
  },
  {
  infected: 280400,
  activeInfected: 192683,
  deceased: 6965,
  quarantined: 47486,
  tested: 2301174,
  id: "2020-12-13T10:02:00+01:00"
  },
  {
  infected: 283870,
  activeInfected: 194194,
  deceased: 7130,
  quarantined: 43966,
  tested: 2320419,
  id: "2020-12-14T09:57:00+01:00"
  },
  {
  infected: 283870,
  activeInfected: 194194,
  deceased: 7130,
  quarantined: 43966,
  tested: 2382632,
  id: "2020-12-14T12:23:00+01:00"
  },
  {
  infected: 285763,
  activeInfected: 195411,
  deceased: 7237,
  quarantined: 42752,
  tested: 2393535,
  id: "2020-12-15T09:50:00+01:00"
  },
  {
  infected: 288567,
  activeInfected: 197246,
  deceased: 7381,
  quarantined: 42467,
  tested: 2406171,
  id: "2020-12-16T09:42:00+01:00"
  },
  {
  infected: 295977,
  activeInfected: 198438,
  deceased: 7725,
  quarantined: 45075,
  tested: 2456600,
  id: "2020-12-17T10:07:00+01:00"
  },
  {
  infected: 295977,
  activeInfected: 198438,
  deceased: 7725,
  quarantined: 45075,
  tested: 2456600,
  id: "2020-12-18T09:55:00+01:00"
  },
  {
  infected: 300022,
  activeInfected: 198785,
  deceased: 7914,
  quarantined: 44010,
  tested: 2480804,
  id: "2020-12-19T11:27:00+01:00"
  },
  {
  infected: 302989,
  activeInfected: 197447,
  deceased: 8099,
  quarantined: 41445,
  tested: 2504837,
  id: "2020-12-20T09:50:00+01:00"
  },
  {
  infected: 305130,
  activeInfected: 193886,
  deceased: 8282,
  quarantined: 32486,
  tested: 2520288,
  id: "2020-12-21T09:55:00+01:00"
  },
  {
  infected: 306368,
  activeInfected: 189230,
  deceased: 8462,
  quarantined: 35624,
  tested: 2528225,
  id: "2020-12-22T10:02:00+01:00"
  },
  {
  infected: 308262,
  activeInfected: 185015,
  deceased: 8616,
  quarantined: 29316,
  tested: 2549464,
  id: "2020-12-23T09:53:00+01:00"
  },
  {
  infected: 311554,
  activeInfected: 182296,
  deceased: 8729,
  quarantined: 29019,
  tested: 2575650,
  id: "2020-12-23T10:18:00+01:00"
  },
  {
  infected: 311554,
  activeInfected: 182296,
  deceased: 8729,
  quarantined: 29019,
  tested: 2575650,
  id: "2020-12-24T10:22:00+01:00"
  },
  {
  infected: 314164,
  activeInfected: 181342,
  deceased: 8833,
  quarantined: 29961,
  tested: 2597804,
  id: "2020-12-25T09:58:00+01:00"
  },
  {
  infected: 315362,
  activeInfected: 179929,
  deceased: 8951,
  quarantined: 24878,
  tested: 2607298,
  id: "2020-12-26T10:26:00+01:00"
  },
  {
  infected: 316060,
  activeInfected: 176593,
  deceased: 9047,
  quarantined: 24327,
  tested: 2610590,
  id: "2020-12-27T09:50:00+01:00"
  },
  {
  infected: 316669,
  activeInfected: 173164,
  deceased: 9161,
  quarantined: 22779,
  tested: 2615237,
  id: "2020-12-28T09:45:00+01:00"
  },
  {
  infected: 317571,
  activeInfected: 169914,
  deceased: 9292,
  quarantined: 21667,
  tested: 2621427,
  id: "2020-12-29T09:43:00+01:00"
  },
  {
  infected: 319543,
  activeInfected: 165880,
  deceased: 9429,
  quarantined: 19496,
  tested: 2639729,
  id: "2020-12-30T09:49:00+01:00"
  },
  {
  infected: 322514,
  activeInfected: 162875,
  deceased: 9537,
  quarantined: 17704,
  tested: 2657119,
  id: "2020-12-31T10:22:00+01:00"
  },
  {
  infected: 325278,
  activeInfected: 158548,
  deceased: 9667,
  quarantined: 20057,
  tested: 2675247,
  id: "2021-01-01T10:00:00+01:00"
  },
  {
  infected: 326688,
  activeInfected: 153504,
  deceased: 9781,
  quarantined: 18239,
  tested: 2685944,
  id: "2021-01-02T09:41:00+01:00"
  },
  {
  infected: 327995,
  activeInfected: 149730,
  deceased: 9884,
  quarantined: 16537,
  tested: 2691904,
  id: "2021-01-03T10:23:00+01:00"
  },
  {
  infected: 328851,
  activeInfected: 144804,
  deceased: 9977,
  quarantined: 18794,
  tested: 2700631,
  id: "2021-01-04T09:46:00+01:00"
  },
  {
  infected: 328851,
  activeInfected: 144804,
  deceased: 9977,
  quarantined: 18794,
  tested: 2721375,
  id: "2021-01-04T12:42:00+01:00"
  },
  {
  infected: 329721,
  activeInfected: 143065,
  deceased: 10080,
  quarantined: 20272,
  tested: 2727896,
  id: "2021-01-05T09:54:00+01:00"
  },
  {
  infected: 331768,
  activeInfected: 142029,
  deceased: 10198,
  quarantined: 20657,
  tested: 2729881,
  id: "2021-01-06T10:13:00+01:00"
  },
  {
  infected: 331768,
  activeInfected: 142029,
  deceased: 10198,
  quarantined: 20657,
  tested: 2750625,
  id: "2021-01-06T11:29:00+01:00"
  },
  {
  infected: 334836,
  activeInfected: 144970,
  deceased: 10325,
  quarantined: 21627,
  tested: 2774915,
  id: "2021-01-07T11:00:00+01:00"
  },
  {
  infected: 337743,
  activeInfected: 140854,
  deceased: 10440,
  quarantined: 20865,
  tested: 2798939,
  id: "2021-01-08T10:09:00+01:00"
  },
  {
  infected: 340459,
  activeInfected: 136733,
  deceased: 10554,
  quarantined: 23281,
  tested: 2820762,
  id: "2021-01-09T10:12:00+01:00"
  },
  {
  infected: 343656,
  activeInfected: 128959,
  deceased: 10725,
  quarantined: 21979,
  tested: 2852591,
  id: "2021-01-10T10:23:00+01:00"
  },
  {
  infected: 343656,
  activeInfected: 128959,
  deceased: 10725,
  quarantined: 21979,
  tested: 2852591,
  id: "2021-01-11T09:50:00+01:00"
  },
  {
  infected: 345710,
  activeInfected: 119309,
  deceased: 10948,
  quarantined: 25856,
  tested: 2879364,
  id: "2021-01-12T09:47:00+01:00"
  },
  {
  infected: 345710,
  activeInfected: 119309,
  deceased: 10948,
  quarantined: 25856,
  tested: 2879364,
  id: "2021-01-13T10:00:00+01:00"
  },
  {
  infected: 349149,
  activeInfected: 112951,
  deceased: 11177,
  quarantined: 25678,
  tested: 2918096,
  id: "2021-01-14T09:37:00+01:00"
  },
  {
  infected: 349149,
  activeInfected: 112951,
  deceased: 11177,
  quarantined: 25678,
  tested: 2918096,
  id: "2021-01-15T09:45:00+01:00"
  },
  {
  infected: 350587,
  activeInfected: 111998,
  deceased: 11264,
  quarantined: 24874,
  tested: 2936435,
  id: "2021-01-16T09:45:00+01:00"
  },
  {
  infected: 351828,
  activeInfected: 111872,
  deceased: 11341,
  quarantined: 23083,
  tested: 2953710,
  id: "2021-01-17T09:43:00+01:00"
  },
  {
  infected: 352703,
  activeInfected: 110853,
  deceased: 11409,
  quarantined: 21648,
  tested: 2963613,
  id: "2021-01-18T09:38:00+01:00"
  },
  {
  infected: 353276,
  activeInfected: 109841,
  deceased: 11520,
  quarantined: 18523,
  tested: 2968743,
  id: "2021-01-19T09:34:00+01:00"
  },
  {
  infected: 354252,
  activeInfected: 109405,
  deceased: 11615,
  quarantined: 20170,
  tested: 2984748,
  id: "2021-01-20T09:59:00+01:00"
  },
  {
  infected: 355662,
  activeInfected: 108673,
  deceased: 11713,
  quarantined: 19932,
  tested: 3000325,
  id: "2021-01-21T10:20:00+01:00"
  },
  {
  infected: 356973,
  activeInfected: 107800,
  deceased: 11811,
  quarantined: 19908,
  tested: 3018389,
  id: "2021-01-22T09:26:00+01:00"
  },
  {
  infected: 358317,
  activeInfected: 106533,
  deceased: 11904,
  quarantined: 20095,
  tested: 3035627,
  id: "2021-01-23T10:00:00+01:00"
  },
  {
  infected: 359574,
  activeInfected: 106134,
  deceased: 11968,
  quarantined: 18929,
  tested: 3052068,
  id: "2021-01-24T09:52:00+01:00"
  },
  {
  infected: 360418,
  activeInfected: 105302,
  deceased: 12024,
  quarantined: 18141,
  tested: 3062132,
  id: "2021-01-25T09:53:00+01:00"
  },
  {
  infected: 360877,
  activeInfected: 104083,
  deceased: 12113,
  quarantined: 18075,
  tested: 3067663,
  id: "2021-01-26T09:46:00+01:00"
  },
  {
  infected: 361881,
  activeInfected: 103087,
  deceased: 12198,
  quarantined: 17834,
  tested: 3084716,
  id: "2021-01-27T09:52:00+01:00"
  },
  {
  infected: 363450,
  activeInfected: 102156,
  deceased: 12291,
  quarantined: 19131,
  tested: 3097809,
  id: "2021-01-28T09:22:00+01:00"
  },
  {
  infected: 364909,
  activeInfected: 97752,
  deceased: 12374,
  quarantined: 17540,
  tested: 3116784,
  id: "2021-01-29T09:56:00+01:00"
  },
  {
  infected: 368710,
  activeInfected: 91872,
  deceased: 12578,
  quarantined: 13810,
  tested: 3169150,
  id: "2021-02-01T09:56:00+01:00"
  },
  {
  infected: 369288,
  activeInfected: 87829,
  deceased: 12656,
  quarantined: 18030,
  tested: 3176944,
  id: "2021-02-02T09:49:00+01:00"
  },
  {
  infected: 371988,
  activeInfected: 84848,
  deceased: 12832,
  quarantined: 19633,
  tested: 3210549,
  id: "2021-02-03T09:54:00+01:00"
  },
  {
  infected: 371988,
  activeInfected: 84848,
  deceased: 12832,
  quarantined: 19633,
  tested: 3210549,
  id: "2021-02-04T09:45:00+01:00"
  },
  {
  infected: 373564,
  activeInfected: 84870,
  deceased: 12930,
  quarantined: 20254,
  tested: 3229242,
  id: "2021-02-05T09:53:00+01:00"
  },
  {
  infected: 375125,
  activeInfected: 84150,
  deceased: 13026,
  quarantined: 18124,
  tested: 3246838,
  id: "2021-02-06T10:26:00+01:00"
  },
  {
  infected: 376495,
  activeInfected: 83642,
  deceased: 13090,
  quarantined: 19510,
  tested: 3265862,
  id: "2021-02-07T09:40:00+01:00"
  },
  {
  infected: 377655,
  activeInfected: 82661,
  deceased: 13155,
  quarantined: 15847,
  tested: 3275582,
  id: "2021-02-08T09:54:00+01:00"
  },
  {
  infected: 378734,
  activeInfected: 82203,
  deceased: 13249,
  quarantined: 16850,
  tested: 3281992,
  id: "2021-02-09T09:50:00+01:00"
  },
  {
  infected: 380013,
  activeInfected: 81644,
  deceased: 13347,
  quarantined: 19414,
  tested: 3298814,
  id: "2021-02-10T10:11:00+01:00"
  },
  {
  infected: 383735,
  activeInfected: 80672,
  deceased: 13543,
  quarantined: 22525,
  tested: 3338289,
  id: "2021-02-11T09:54:00+01:00"
  },
  {
  infected: 383735,
  activeInfected: 80672,
  deceased: 13543,
  quarantined: 22525,
  tested: 3338289,
  id: "2021-02-12T09:45:00+01:00"
  },
  {
  infected: 385755,
  activeInfected: 78577,
  deceased: 13636,
  quarantined: 20794,
  tested: 3357672,
  id: "2021-02-13T09:56:00+01:00"
  },
  {
  infected: 387462,
  activeInfected: 77583,
  deceased: 13706,
  quarantined: 19927,
  tested: 3377187,
  id: "2021-02-14T09:43:00+01:00"
  },
  {
  infected: 388799,
  activeInfected: 77039,
  deceased: 13752,
  quarantined: 20718,
  tested: 3388457,
  id: "2021-02-15T09:45:00+01:00"
  },
  {
  infected: 391170,
  activeInfected: 77250,
  deceased: 13931,
  quarantined: 18205,
  tested: 3414023,
  id: "2021-02-17T09:44:00+01:00"
  },
  {
  infected: 394023,
  activeInfected: 78625,
  deceased: 14035,
  quarantined: 22893,
  tested: 3434878,
  id: "2021-02-18T09:25:00+01:00"
  },
  {
  infected: 397116,
  activeInfected: 80282,
  deceased: 14145,
  quarantined: 25536,
  tested: 3457538,
  id: "2021-02-19T11:53:00+01:00"
  },
  {
  infected: 400111,
  activeInfected: 81179,
  deceased: 14252,
  quarantined: 26068,
  tested: 3480444,
  id: "2021-02-20T09:50:00+01:00"
  },
  {
  infected: 403023,
  activeInfected: 82103,
  deceased: 14299,
  quarantined: 27179,
  tested: 3503611,
  id: "2021-02-21T10:17:00+01:00"
  },
  {
  infected: 405646,
  activeInfected: 82649,
  deceased: 14347,
  quarantined: 25589,
  tested: 3519536,
  id: "2021-02-22T09:35:00+01:00"
  },
  {
  infected: 407274,
  activeInfected: 81976,
  deceased: 14450,
  quarantined: 26549,
  tested: 3528862,
  id: "2021-02-23T09:37:00+01:00"
  },
  {
  infected: 410129,
  activeInfected: 82127,
  deceased: 14552,
  quarantined: 27737,
  tested: 3552261,
  id: "2021-02-24T09:41:00+01:00"
  },
  {
  infected: 414514,
  activeInfected: 84061,
  deceased: 14672,
  quarantined: 29389,
  tested: 3577770,
  id: "2021-02-25T10:26:00+01:00"
  },
  {
  infected: 419182,
  activeInfected: 86488,
  deceased: 14795,
  quarantined: 35303,
  tested: 3604898,
  id: "2021-02-26T09:34:00+01:00"
  },
  {
  infected: 424130,
  activeInfected: 89537,
  deceased: 14902,
  quarantined: 37658,
  tested: 3632712,
  id: "2021-02-27T09:58:00+01:00"
  },
  {
  infected: 428599,
  activeInfected: 92497,
  deceased: 14974,
  quarantined: 33353,
  tested: 3660342,
  id: "2021-02-28T10:32:00+01:00"
  },
  {
  infected: 432925,
  activeInfected: 94911,
  deceased: 15058,
  quarantined: 34716,
  tested: 3680572,
  id: "2021-03-01T10:08:00+01:00"
  },
  {
  infected: 435689,
  activeInfected: 96299,
  deceased: 15188,
  quarantined: 35023,
  tested: 3693390,
  id: "2021-03-02T09:48:00+01:00"
  },
  {
  infected: 439900,
  activeInfected: 98361,
  deceased: 15324,
  quarantined: 37005,
  tested: 3719113,
  id: "2021-03-03T09:58:00+01:00"
  },
  {
  infected: 446178,
  activeInfected: 102566,
  deceased: 15476,
  quarantined: 41440,
  tested: 3749907,
  id: "2021-03-04T09:41:00+01:00"
  },
  {
  infected: 452547,
  activeInfected: 105371,
  deceased: 15619,
  quarantined: 45164,
  tested: 3781181,
  id: "2021-03-05T09:40:00+01:00"
  },
  {
  infected: 459816,
  activeInfected: 111006,
  deceased: 15765,
  quarantined: 46620,
  tested: 3816852,
  id: "2021-03-06T09:30:00+01:00"
  },
  {
  infected: 466017,
  activeInfected: 114632,
  deceased: 15873,
  quarantined: 44217,
  tested: 3850623,
  id: "2021-03-07T09:59:00+01:00"
  },
  {
  infected: 468713,
  activeInfected: 115981,
  deceased: 15988,
  quarantined: 37343,
  tested: 3874513,
  id: "2021-03-08T11:25:00+01:00"
  },
  {
  infected: 475207,
  activeInfected: 120115,
  deceased: 16146,
  quarantined: 40869,
  tested: 3891778,
  id: "2021-03-09T10:13:00+01:00"
  },
  {
  infected: 480860,
  activeInfected: 123691,
  deceased: 16325,
  quarantined: 42362,
  tested: 3922530,
  id: "2021-03-10T08:50:00+01:00"
  },
  {
  infected: 489172,
  activeInfected: 128408,
  deceased: 16497,
  quarantined: 46302,
  tested: 3955994,
  id: "2021-03-11T10:10:00+01:00"
  },
  {
  infected: 498183,
  activeInfected: 134652,
  deceased: 16627,
  quarantined: 48677,
  tested: 3992790,
  id: "2021-03-12T09:59:00+01:00"
  },
  {
  infected: 507627,
  activeInfected: 141307,
  deceased: 16790,
  quarantined: 46249,
  tested: 4034635,
  id: "2021-03-13T09:47:00+01:00"
  },
  {
  infected: 516490,
  activeInfected: 147647,
  deceased: 16952,
  quarantined: 48329,
  tested: 4076943,
  id: "2021-03-14T09:42:00+01:00"
  },
  {
  infected: 524196,
  activeInfected: 152296,
  deceased: 17083,
  quarantined: 45605,
  tested: 4104415,
  id: "2021-03-15T09:51:00+01:00"
  },
  {
  infected: 529122,
  activeInfected: 155217,
  deceased: 17226,
  quarantined: 43553,
  tested: 4122541,
  id: "2021-03-16T09:56:00+01:00"
  },
  {
  infected: 532578,
  activeInfected: 156096,
  deceased: 17421,
  quarantined: 44648,
  tested: 4136190,
  id: "2021-03-17T10:09:00+01:00"
  },
  {
  infected: 532578,
  activeInfected: 156096,
  deceased: 17421,
  quarantined: 44648,
  tested: 4136190,
  id: "2021-03-17T11:36:00+01:00"
  },
  {
  infected: 539080,
  activeInfected: 160557,
  deceased: 17628,
  quarantined: 47116,
  tested: 4162688,
  id: "2021-03-18T09:38:00+01:00"
  },
  {
  infected: 549839,
  activeInfected: 167190,
  deceased: 17841,
  quarantined: 50701,
  tested: 4202286,
  id: "2021-03-19T09:50:00+01:00"
  },
  {
  infected: 560971,
  activeInfected: 176129,
  deceased: 18068,
  quarantined: 52885,
  tested: 4242762,
  id: "2021-03-20T09:32:00+01:00"
  },
  {
  infected: 571596,
  activeInfected: 183336,
  deceased: 18262,
  quarantined: 50512,
  tested: 4283741,
  id: "2021-03-21T09:26:00+01:00"
  },
  {
  infected: 580642,
  activeInfected: 188525,
  deceased: 18451,
  quarantined: 43961,
  tested: 4315305,
  id: "2021-03-22T10:18:00+01:00"
  },
  {
  infected: 586123,
  activeInfected: 189244,
  deceased: 18703,
  quarantined: 50096,
  tested: 4334584,
  id: "2021-03-23T09:38:00+01:00"
  },
  {
  infected: 593710,
  activeInfected: 192951,
  deceased: 18952,
  quarantined: 51230,
  tested: 4367900,
  id: "2021-03-24T09:37:00+01:00"
  },
  {
  infected: 603347,
  activeInfected: 196553,
  deceased: 19224,
  quarantined: 54422,
  tested: 4403317,
  id: "2021-03-25T10:05:00+01:00"
  },
  {
  infected: 614612,
  activeInfected: 202799,
  deceased: 19499,
  quarantined: 58667,
  tested: 4443610,
  id: "2021-03-26T10:00:00+01:00"
  },
  {
  infected: 624779,
  activeInfected: 211028,
  deceased: 19752,
  quarantined: 61430,
  tested: 4486163,
  id: "2021-03-27T10:15:00+01:00"
  },
  {
  infected: 633861,
  activeInfected: 218099,
  deceased: 19972,
  quarantined: 59018,
  tested: 4515464,
  id: "2021-03-28T11:32:00+02:00"
  },
  {
  infected: 641124,
  activeInfected: 221002,
  deceased: 20161,
  quarantined: 55511,
  tested: 4557943,
  id: "2021-03-29T10:52:00+02:00"
  },
  {
  infected: 652433,
  activeInfected: 224761,
  deceased: 20737,
  quarantined: 55287,
  tested: 4609152,
  id: "2021-03-30T16:44:00+02:00"
  },
  {
  infected: 652433,
  activeInfected: 224761,
  deceased: 20737,
  quarantined: 55287,
  tested: 4609152,
  id: "2021-03-31T11:12:00+02:00"
  },
  {
  infected: 661721,
  activeInfected: 230161,
  deceased: 20995,
  quarantined: 55915,
  tested: 4649596,
  id: "2021-04-01T11:06:00+02:00"
  },
  {
  infected: 670776,
  activeInfected: 236144,
  deceased: 21262,
  quarantined: 57800,
  tested: 4689589,
  id: "2021-04-02T11:06:00+02:00"
  },
  {
  infected: 679413,
  activeInfected: 242308,
  deceased: 21504,
  quarantined: 55056,
  tested: 4726187,
  id: "2021-04-03T10:45:00+02:00"
  },
  {
  infected: 685979,
  activeInfected: 247292,
  deceased: 21715,
  quarantined: 52528,
  tested: 4753281,
  id: "2021-04-04T11:15:00+02:00"
  },
  {
  infected: 689853,
  activeInfected: 249841,
  deceased: 21928,
  quarantined: 50052,
  tested: 4772189,
  id: "2021-04-05T11:03:00+02:00"
  },
  {
  infected: 691743,
  activeInfected: 251077,
  deceased: 22098,
  quarantined: 44172,
  tested: 4783383,
  id: "2021-04-06T10:48:00+02:00"
  },
  {
  infected: 693676,
  activeInfected: 252115,
  deceased: 22409,
  quarantined: 47578,
  tested: 4795584,
  id: "2021-04-07T10:10:00+02:00"
  },
  {
  infected: 698490,
  activeInfected: 256044,
  deceased: 22681,
  quarantined: 46612,
  tested: 4825607,
  id: "2021-04-08T11:05:00+02:00"
  },
  {
  infected: 705815,
  activeInfected: 262574,
  deceased: 22966,
  quarantined: 46775,
  tested: 4861310,
  id: "2021-04-09T10:39:00+02:00"
  },
  {
  infected: 713868,
  activeInfected: 267291,
  deceased: 23211,
  quarantined: 47041,
  tested: 4897922,
  id: "2021-04-10T11:12:00+02:00"
  },
  {
  infected: 720164,
  activeInfected: 270353,
  deceased: 23417,
  quarantined: 44370,
  tested: 4934786,
  id: "2021-04-11T10:55:00+02:00"
  },
  {
  infected: 725241,
  activeInfected: 272459,
  deceased: 23708,
  quarantined: 43002,
  tested: 4961146,
  id: "2021-04-12T10:12:00+02:00"
  },
  {
  infected: 753188,
  activeInfected: 269595,
  deceased: 25381,
  quarantined: 45132,
  tested: 5144130,
  id: "2021-04-19T10:54:00+02:00"
  },
  {
  infected: 754833,
  activeInfected: 268072,
  deceased: 25580,
  quarantined: 43841,
  tested: 5157082,
  id: "2021-04-20T10:50:00+02:00"
  },
  {
  infected: 757360,
  activeInfected: 266823,
  deceased: 25787,
  quarantined: 42068,
  tested: 5179517,
  id: "2021-04-21T10:43:00+02:00"
  },
  {
  infected: 760967,
  activeInfected: 265374,
  deceased: 26001,
  quarantined: 41857,
  tested: 5205923,
  id: "2021-04-22T10:40:00+02:00"
  },
  {
  infected: 764394,
  activeInfected: 264039,
  deceased: 26208,
  quarantined: 42182,
  tested: 5233530,
  id: "2021-04-23T11:52:00+02:00"
  },
  {
  infected: 767190,
  activeInfected: 262447,
  deceased: 26420,
  quarantined: 40947,
  tested: 5257377,
  id: "2021-04-24T11:10:00+02:00"
  },
  {
  infected: 769518,
  activeInfected: 260686,
  deceased: 26625,
  quarantined: 37497,
  tested: 5280600,
  id: "2021-04-25T11:26:00+02:00"
  },
  {
  infected: 771454,
  activeInfected: 258218,
  deceased: 26801,
  quarantined: 35472,
  tested: 5297235,
  id: "2021-04-26T11:13:00+02:00"
  },
  {
  infected: 772707,
  activeInfected: 254103,
  deceased: 26984,
  quarantined: 34785,
  tested: 5308624,
  id: "2021-04-27T11:08:00+02:00"
  },
  {
  infected: 774399,
  activeInfected: 250143,
  deceased: 27172,
  quarantined: 33429,
  tested: 5327413,
  id: "2021-04-28T10:44:00+02:00"
  },
  {
  infected: 776983,
  activeInfected: 245928,
  deceased: 27358,
  quarantined: 31133,
  tested: 5349792,
  id: "2021-04-29T10:52:00+02:00"
  },
  {
  infected: 779348,
  activeInfected: 241429,
  deceased: 27540,
  quarantined: 32838,
  tested: 5373540,
  id: "2021-04-30T11:31:00+02:00"
  },
  {
  infected: 779348,
  activeInfected: 241429,
  deceased: 27540,
  quarantined: 32838,
  tested: 5373540,
  id: "2021-04-30T19:50:00+02:00"
  },
  {
  infected: 781299,
  activeInfected: 236572,
  deceased: 27701,
  quarantined: 31885,
  tested: 5394652,
  id: "2021-05-01T11:13:00+02:00"
  },
  {
  infected: 782892,
  activeInfected: 231580,
  deceased: 27802,
  quarantined: 28979,
  tested: 5415983,
  id: "2021-05-02T11:08:00+02:00"
  },
  {
  infected: 784111,
  activeInfected: 228002,
  deceased: 27908,
  quarantined: 27386,
  tested: 5429737,
  id: "2021-05-03T11:03:00+02:00"
  },
  {
  infected: 784837,
  activeInfected: 223802,
  deceased: 28045,
  quarantined: 28080,
  tested: 5438145,
  id: "2021-05-04T11:02:00+02:00"
  },
  {
  infected: 785967,
  activeInfected: 218829,
  deceased: 28173,
  quarantined: 24796,
  tested: 5454661,
  id: "2021-05-05T11:17:00+02:00"
  },
  {
  infected: 787647,
  activeInfected: 213104,
  deceased: 28297,
  quarantined: 24902,
  tested: 5475551,
  id: "2021-05-06T10:43:00+02:00"
  },
  {
  infected: 789188,
  activeInfected: 206949,
  deceased: 28403,
  quarantined: 24690,
  tested: 5494198,
  id: "2021-05-07T10:59:00+02:00"
  },
  {
  infected: 790564,
  activeInfected: 200941,
  deceased: 28504,
  quarantined: 21301,
  tested: 5494198,
  id: "2021-05-08T10:25:00+02:00"
  },
  {
  infected: 791709,
  activeInfected: 194778,
  deceased: 28602,
  quarantined: 21975,
  tested: 5528240,
  id: "2021-05-09T11:25:00+02:00"
  },
  {
  infected: 792386,
  activeInfected: 188083,
  deceased: 28693,
  quarantined: 20967,
  tested: 5538792,
  id: "2021-05-10T10:54:00+02:00"
  },
  {
  infected: 792879,
  activeInfected: 180285,
  deceased: 28792,
  quarantined: 20197,
  tested: 5545305,
  id: "2021-05-11T11:14:00+02:00"
  },
  {
  infected: 793784,
  activeInfected: 172456,
  deceased: 28888,
  quarantined: 18872,
  tested: 5560617,
  id: "2021-05-12T11:18:00+02:00"
  },
  {
  infected: 796390,
  activeInfected: 158458,
  deceased: 29041,
  quarantined: 18448,
  tested: 5607336,
  id: "2021-05-13T10:30:00+02:00"
  },
  {
  infected: 796390,
  activeInfected: 158458,
  deceased: 29041,
  quarantined: 18448,
  tested: 5607336,
  id: "2021-05-14T11:24:00+02:00"
  },
  {
  infected: 797429,
  activeInfected: 149707,
  deceased: 29114,
  quarantined: 18171,
  tested: 5622836,
  id: "2021-05-15T11:06:00+02:00"
  },
  {
  infected: 798147,
  activeInfected: 143884,
  deceased: 29175,
  quarantined: 17043,
  tested: 5638662,
  id: "2021-05-16T11:10:00+02:00"
  },
  {
  infected: 798573,
  activeInfected: 138384,
  deceased: 29213,
  quarantined: 16297,
  tested: 5649027,
  id: "2021-05-17T11:08:00+02:00"
  },
  {
  infected: 798955,
  activeInfected: 128714,
  deceased: 29277,
  quarantined: 16088,
  tested: 5656131,
  id: "2021-05-18T11:00:00+02:00"
  },
  {
  infected: 799588,
  activeInfected: 121746,
  deceased: 29329,
  quarantined: 16027,
  tested: 5670793,
  id: "2021-05-19T11:08:00+02:00"
  },
  {
  infected: 800368,
  activeInfected: 115029,
  deceased: 29380,
  quarantined: 16210,
  tested: 5687117,
  id: "2021-05-20T11:08:00+02:00"
  },
  {
  infected: 801025,
  activeInfected: 110034,
  deceased: 29427,
  quarantined: 16209,
  tested: 5697748,
  id: "2021-05-21T11:01:00+02:00"
  },
  {
  infected: 801672,
  activeInfected: 106645,
  deceased: 29475,
  quarantined: 15585,
  tested: 5720398,
  id: "2021-05-22T11:09:00+02:00"
  },
  {
  infected: 801672,
  activeInfected: 106645,
  deceased: 29475,
  quarantined: 15585,
  tested: 5720398,
  id: "2021-05-22T19:22:00+02:00"
  },
  {
  infected: 802088,
  activeInfected: 103749,
  deceased: 29519,
  quarantined: 14220,
  tested: 5734447,
  id: "2021-05-23T11:03:00+02:00"
  },
  {
  infected: 802346,
  activeInfected: 102581,
  deceased: 29560,
  quarantined: 13211,
  tested: 5743991,
  id: "2021-05-24T10:54:00+02:00"
  },
  {
  infected: 802510,
  activeInfected: 101537,
  deceased: 29581,
  quarantined: 12376,
  tested: 5750359,
  id: "2021-05-25T10:30:00+02:00"
  },
  {
  infected: 802723,
  activeInfected: 98019,
  deceased: 29622,
  quarantined: 11878,
  tested: 5756599,
  id: "2021-05-26T10:37:00+02:00"
  },
  {
  infected: 803119,
  activeInfected: 91164,
  deceased: 29654,
  quarantined: 11432,
  tested: 5771058,
  id: "2021-05-27T10:56:00+02:00"
  },
  {
  infected: 803567,
  activeInfected: 84719,
  deceased: 29682,
  quarantined: 10790,
  tested: 5786609,
  id: "2021-05-28T11:12:00+02:00"
  },
  {
  infected: 804032,
  activeInfected: 82075,
  deceased: 29709,
  quarantined: 10302,
  tested: 5801554,
  id: "2021-05-29T11:13:00+02:00"
  },
  {
  infected: 804382,
  activeInfected: 78625,
  deceased: 29728,
  quarantined: 9670,
  tested: 5816796,
  id: "2021-05-30T11:10:00+02:00"
  },
  {
  infected: 804538,
  activeInfected: 74569,
  deceased: 29733,
  quarantined: 9221,
  tested: 5824848,
  id: "2021-05-31T10:55:00+02:00"
  },
  {
  infected: 804712,
  activeInfected: 71599,
  deceased: 29761,
  quarantined: 8749,
  tested: 5837630,
  id: "2021-06-01T10:45:00+02:00"
  },
  {
  infected: 804987,
  activeInfected: 69835,
  deceased: 29774,
  quarantined: 8320,
  tested: 5862778,
  id: "2021-06-02T10:51:00+02:00"
  },
  {
  infected: 805302,
  activeInfected: 67312,
  deceased: 29792,
  quarantined: 7759,
  tested: 5866214,
  id: "2021-06-03T10:40:00+02:00"
  },
  {
  infected: 805571,
  activeInfected: 64648,
  deceased: 29818,
  quarantined: 7393,
  tested: 5884887,
  id: "2021-06-03T11:20:00+02:00"
  },
  {
  infected: 805871,
  activeInfected: 61700,
  deceased: 29842,
  quarantined: 7254,
  tested: 5897459,
  id: "2021-06-05T10:39:00+02:00"
  },
  {
  infected: 806008,
  activeInfected: 59991,
  deceased: 29854,
  quarantined: 7093,
  tested: 5910248,
  id: "2021-06-06T10:26:00+02:00"
  },
  {
  infected: 806089,
  activeInfected: 58969,
  deceased: 29866,
  quarantined: 7066,
  tested: 5916866,
  id: "2021-06-07T10:50:00+02:00"
  },
  {
  infected: 806206,
  activeInfected: 57746,
  deceased: 29883,
  quarantined: 6890,
  tested: 5922744,
  id: "2021-06-08T11:04:00+02:00"
  },
  {
  infected: 806385,
  activeInfected: 56096,
  deceased: 29889,
  quarantined: 6749,
  tested: 5936304,
  id: "2021-06-09T10:36:00+02:00"
  },
  {
  infected: 806591,
  activeInfected: 54399,
  deceased: 29896,
  quarantined: 6189,
  tested: 5948874,
  id: "2021-06-10T11:00:00+02:00"
  },
  {
  infected: 806790,
  activeInfected: 52272,
  deceased: 29904,
  quarantined: 6182,
  tested: 5962887,
  id: "2021-06-11T11:00:00+02:00"
  },
  {
  infected: 807045,
  activeInfected: 46532,
  deceased: 29925,
  quarantined: 5567,
  tested: 5991170,
  id: "2021-06-14T10:42:00+02:00"
  },
  {
  infected: 807102,
  activeInfected: 45541,
  deceased: 29935,
  quarantined: 5182,
  tested: 5996016,
  id: "2021-06-15T10:58:00+02:00"
  },
  {
  infected: 807209,
  activeInfected: 44364,
  deceased: 29944,
  quarantined: 4665,
  tested: 6009124,
  id: "2021-06-16T10:52:00+02:00"
  },
  {
  infected: 807322,
  activeInfected: 43467,
  deceased: 29948,
  quarantined: 4411,
  tested: 6020027,
  id: "2021-06-17T10:51:00+02:00"
  },
  {
  infected: 807428,
  activeInfected: 42851,
  deceased: 29950,
  quarantined: 4044,
  tested: 6033519,
  id: "2021-06-18T10:42:00+02:00"
  },
  {
  infected: 807630,
  activeInfected: 42097,
  deceased: 29959,
  quarantined: 3969,
  tested: 6058488,
  id: "2021-06-21T10:57:00+02:00"
  },
  {
  infected: 807684,
  activeInfected: 41784,
  deceased: 29963,
  quarantined: 3866,
  tested: 6062806,
  id: "2021-06-22T10:40:00+02:00"
  },
  {
  infected: 807775,
  activeInfected: 41417,
  deceased: 29971,
  quarantined: 3322,
  tested: 6073516,
  id: "2021-06-23T11:20:00+02:00"
  },
  {
  infected: 807844,
  activeInfected: 41018,
  deceased: 29972,
  quarantined: 2973,
  tested: 6083248,
  id: "2021-06-24T11:00:00+02:00"
  },
  {
  infected: 807910,
  activeInfected: 40697,
  deceased: 29980,
  quarantined: 2701,
  tested: 6094415,
  id: "2021-06-25T11:02:00+02:00"
  },
  {
  infected: 808042,
  activeInfected: 39662,
  deceased: 29989,
  quarantined: 2614,
  tested: 6116542,
  id: "2021-06-28T12:00:00+02:00"
  },
  {
  infected: 808076,
  activeInfected: 39543,
  deceased: 29991,
  quarantined: 2376,
  tested: 6120838,
  id: "2021-06-29T10:46:00+02:00"
  },
  {
  infected: 808128,
  activeInfected: 39354,
  deceased: 29992,
  quarantined: 2212,
  tested: 6130295,
  id: "2021-06-30T11:20:00+02:00"
  },
  {
  infected: 808160,
  activeInfected: 38964,
  deceased: 29992,
  quarantined: 1998,
  tested: 6138529,
  id: "2021-07-01T10:45:00+02:00"
  },
  {
  infected: 808197,
  activeInfected: 38644,
  deceased: 29992,
  quarantined: 1851,
  tested: 6145920,
  id: "2021-07-02T11:03:00+02:00"
  },
  {
  infected: 808262,
  activeInfected: 38071,
  deceased: 29996,
  quarantined: 2332,
  tested: 6164167,
  id: "2021-07-05T10:52:00+02:00"
  },
  {
  infected: 808294,
  activeInfected: 37969,
  deceased: 29998,
  quarantined: 1852,
  tested: 6168335,
  id: "2021-07-06T10:58:00+02:00"
  },
  {
  infected: 808338,
  activeInfected: 37804,
  deceased: 29999,
  quarantined: 1778,
  tested: 6173422,
  id: "2021-07-07T11:04:00+02:00"
  },
  {
  infected: 808393,
  activeInfected: 37599,
  deceased: 30004,
  quarantined: 1678,
  tested: 6179187,
  id: "2021-07-08T10:59:00+02:00"
  },
  {
  infected: 808437,
  activeInfected: 37350,
  deceased: 30004,
  quarantined: 1629,
  tested: 6192388,
  id: "2021-07-09T11:27:00+02:00"
  },
  {
  infected: 808539,
  activeInfected: 37023,
  deceased: 30007,
  quarantined: 1649,
  tested: 6210862,
  id: "2021-07-12T10:56:00+02:00"
  },
  {
  infected: 808556,
  activeInfected: 36883,
  deceased: 30010,
  quarantined: 1659,
  tested: 6214858,
  id: "2021-07-13T11:30:00+02:00"
  },
  {
  infected: 808612,
  activeInfected: 36703,
  deceased: 30013,
  quarantined: 1582,
  tested: 6222052,
  id: "2021-07-14T10:44:00+02:00"
  },
  {
  infected: 808661,
  activeInfected: 36378,
  deceased: 30013,
  quarantined: 1544,
  tested: 6229508,
  id: "2021-07-15T10:22:00+02:00"
  },
  {
  infected: 808725,
  activeInfected: 36078,
  deceased: 30015,
  quarantined: 1473,
  tested: 6238275,
  id: "2021-07-16T10:56:00+02:00"
  },
  {
  infected: 808864,
  activeInfected: 35602,
  deceased: 30017,
  quarantined: 1594,
  tested: 6257264,
  id: "2021-07-19T10:42:00+02:00"
  },
  {
  infected: 808889,
  activeInfected: 35421,
  deceased: 30019,
  quarantined: 1504,
  tested: 6261622,
  id: "2021-07-20T10:48:00+02:00"
  },
  {
  infected: 808945,
  activeInfected: 34875,
  deceased: 30019,
  quarantined: 1409,
  tested: 6268163,
  id: "2021-07-21T10:48:00+02:00"
  },
  {
  infected: 809016,
  activeInfected: 34282,
  deceased: 30020,
  quarantined: 1384,
  tested: 6274804,
  id: "2021-07-22T10:41:00+02:00"
  },
  {
  infected: 809101,
  activeInfected: 33804,
  deceased: 30020,
  quarantined: 1376,
  tested: 6284811,
  id: "2021-07-23T10:41:00+02:00"
  },
  {
  infected: 809262,
  activeInfected: 33394,
  deceased: 30020,
  quarantined: 1517,
  tested: 6303940,
  id: "2021-07-26T10:32:00+02:00"
  },
  {
  infected: 809288,
  activeInfected: 33048,
  deceased: 30021,
  quarantined: 1471,
  tested: 6308291,
  id: "2021-07-27T10:46:00+02:00"
  },
  {
  infected: 809362,
  activeInfected: 32356,
  deceased: 30025,
  quarantined: 1475,
  tested: 6316629,
  id: "2021-07-28T10:48:00+02:00"
  },
  {
  infected: 809427,
  activeInfected: 31890,
  deceased: 30025,
  quarantined: 1412,
  tested: 6323793,
  id: "2021-07-29T10:36:00+02:00"
  },
  {
  infected: 809491,
  activeInfected: 31308,
  deceased: 30026,
  quarantined: 1335,
  tested: 6328373,
  id: "2021-07-30T11:15:00+02:00"
  },
  {
  infected: 809491,
  activeInfected: 31308,
  deceased: 30026,
  quarantined: 1335,
  tested: 6328373,
  id: "2021-07-30T13:43:00+02:00"
  },
  {
  infected: 809646,
  activeInfected: 30434,
  deceased: 30027,
  quarantined: 1365,
  tested: 6348148,
  id: "2021-08-02T11:14:00+02:00"
  },
  {
  infected: 809672,
  activeInfected: 30182,
  deceased: 30029,
  quarantined: 1349,
  tested: 6352215,
  id: "2021-08-03T10:58:00+02:00"
  },
  {
  infected: 809731,
  activeInfected: 29926,
  deceased: 30032,
  quarantined: 1412,
  tested: 6360304,
  id: "2021-08-04T11:11:00+02:00"
  },
  {
  infected: 809803,
  activeInfected: 28816,
  deceased: 30032,
  quarantined: 1364,
  tested: 6367442,
  id: "2021-08-05T11:23:00+02:00"
  },
  {
  infected: 809855,
  activeInfected: 27113,
  deceased: 30033,
  quarantined: 1346,
  tested: 6375668,
  id: "2021-08-06T11:06:00+02:00"
  },
  {
  infected: 810011,
  activeInfected: 22727,
  deceased: 30037,
  quarantined: 1252,
  tested: 6395030,
  id: "2021-08-09T11:25:00+02:00"
  },
  {
  infected: 810046,
  activeInfected: 20976,
  deceased: 30037,
  quarantined: 1137,
  tested: 6399106,
  id: "2021-08-10T11:15:00+02:00"
  },
  {
  infected: 810126,
  activeInfected: 18824,
  deceased: 30037,
  quarantined: 1233,
  tested: 6407283,
  id: "2021-08-11T10:50:00+02:00"
  },
  {
  infected: 810212,
  activeInfected: 16374,
  deceased: 30037,
  quarantined: 1168,
  tested: 6415557,
  id: "2021-08-12T11:18:00+02:00"
  },
  {
  infected: 810316,
  activeInfected: 14326,
  deceased: 30038,
  quarantined: 1085,
  tested: 6423992,
  id: "2021-08-13T11:25:00+02:00"
  },
  {
  infected: 810504,
  activeInfected: 12155,
  deceased: 30041,
  quarantined: 835,
  tested: 6445084,
  id: "2021-08-16T11:25:00+02:00"
  },
  {
  infected: 810549,
  activeInfected: 11988,
  deceased: 30042,
  quarantined: 731,
  tested: 6449264,
  id: "2021-08-17T11:23:00+02:00"
  },
  {
  infected: 810658,
  activeInfected: 11722,
  deceased: 30045,
  quarantined: 864,
  tested: 6457558,
  id: "2021-08-18T10:59:00+02:00"
  },
  {
  infected: 810781,
  activeInfected: 10958,
  deceased: 30046,
  quarantined: 879,
  tested: 6467683,
  id: "2021-08-19T11:09:00+02:00"
  },
  {
  infected: 811121,
  activeInfected: 9539,
  deceased: 30052,
  quarantined: 865,
  tested: 6492441,
  id: "2021-08-23T11:02:00+02:00"
  },
  {
  infected: 811121,
  activeInfected: 9539,
  deceased: 30052,
  quarantined: 865,
  tested: 6498814,
  id: "2021-08-23T13:59:00+02:00"
  },
  {
  infected: 811203,
  activeInfected: 8908,
  deceased: 30054,
  quarantined: 942,
  tested: 6504169,
  id: "2021-08-24T10:58:00+02:00"
  },
  {
  infected: 811337,
  activeInfected: 7713,
  deceased: 30055,
  quarantined: 1101,
  tested: 6513515,
  id: "2021-08-25T11:13:00+02:00"
  },
  {
  infected: 811517,
  activeInfected: 6861,
  deceased: 30056,
  quarantined: 1217,
  tested: 6531925,
  id: "2021-08-26T10:43:00+02:00"
  },
  {
  infected: 811706,
  activeInfected: 6363,
  deceased: 30057,
  quarantined: 1137,
  tested: 6542042,
  id: "2021-08-26T11:20:00+02:00"
  },
  {
  infected: 812227,
  activeInfected: 4936,
  deceased: 30057,
  quarantined: 1270,
  tested: 6568905,
  id: "2021-08-30T11:06:00+02:00"
  },
  {
  infected: 812337,
  activeInfected: 4834,
  deceased: 30058,
  quarantined: 1344,
  tested: 6574523,
  id: "2021-08-31T11:18:00+02:00"
  },
  {
  infected: 812531,
  activeInfected: 4826,
  deceased: 30059,
  quarantined: 1437,
  tested: 6584218,
  id: "2021-09-01T11:07:00+02:00"
  },
  {
  infected: 812531,
  activeInfected: 4826,
  deceased: 30059,
  quarantined: 1437,
  tested: 6584218,
  id: "2021-09-02T11:13:00+02:00"
  },
  {
  infected: 812793,
  activeInfected: 4824,
  deceased: 30060,
  quarantined: 1750,
  tested: 6595169,
  id: "2021-09-02T13:49:00+02:00"
  },
  {
  infected: 813040,
  activeInfected: 4991,
  deceased: 30061,
  quarantined: 1874,
  tested: 6606051,
  id: "2021-09-03T11:02:00+02:00"
  },
  {
  infected: 813688,
  activeInfected: 5382,
  deceased: 30070,
  quarantined: 1799,
  tested: 6634089,
  id: "2021-09-06T10:52:00+02:00"
  },
  {
  infected: 813818,
  activeInfected: 5486,
  deceased: 30074,
  quarantined: 1955,
  tested: 6640890,
  id: "2021-09-07T10:43:00+02:00"
  },
  {
  infected: 814064,
  activeInfected: 5586,
  deceased: 30077,
  quarantined: 2212,
  tested: 6651684,
  id: "2021-09-08T10:54:00+02:00"
  },
  {
  infected: 814409,
  activeInfected: 5798,
  deceased: 30080,
  quarantined: 2563,
  tested: 6664898,
  id: "2021-09-09T10:56:00+02:00"
  },
  {
  infected: 814732,
  activeInfected: 6006,
  deceased: 30086,
  quarantined: 2868,
  tested: 6679227,
  id: "2021-09-10T10:56:00+02:00"
  },
  {
  infected: 815605,
  activeInfected: 6502,
  deceased: 30098,
  quarantined: 2630,
  tested: 6715858,
  id: "2021-09-13T11:05:00+02:00"
  },
  {
  infected: 815851,
  activeInfected: 6635,
  deceased: 30102,
  quarantined: 2842,
  tested: 6724821,
  id: "2021-09-14T10:52:00+02:00"
  },
  {
  infected: 966167,
  activeInfected: 106594,
  deceased: 32336,
  quarantined: 41353,
  tested: 7876457,
  id: "2021-11-15T11:23:00+01:00"
  },
  {
  infected: 966167,
  activeInfected: 106594,
  deceased: 32336,
  quarantined: 41353,
  tested: 7876457,
  id: "2021-11-16T10:00:00+01:00"
  },
  {
  infected: 976432,
  activeInfected: 115383,
  deceased: 32514,
  quarantined: 46530,
  tested: 7909782,
  id: "2021-11-17T09:57:00+01:00"
  },
  {
  infected: 987199,
  activeInfected: 121138,
  deceased: 32645,
  quarantined: 54312,
  tested: 7954654,
  id: "2021-11-18T09:56:00+01:00"
  },
  {
  infected: 998488,
  activeInfected: 128124,
  deceased: 32780,
  quarantined: 59177,
  tested: 8006581,
  id: "2021-11-19T09:59:00+01:00"
  },
  {
  infected: 1025697,
  activeInfected: 144533,
  deceased: 33172,
  quarantined: 50429,
  tested: 8134310,
  id: "2021-11-22T09:53:00+01:00"
  },
  {
  infected: 1032215,
  activeInfected: 147558,
  deceased: 33343,
  quarantined: 49737,
  tested: 8157875,
  id: "2021-11-23T09:53:00+01:00"
  },
  {
  infected: 1044852,
  activeInfected: 155003,
  deceased: 33519,
  quarantined: 54978,
  tested: 8196724,
  id: "2021-11-24T09:53:00+01:00"
  },
  {
  infected: 1057017,
  activeInfected: 165862,
  deceased: 33704,
  quarantined: 64002,
  tested: 8249524,
  id: "2021-11-25T09:52:00+01:00"
  },
  {
  infected: 1068888,
  activeInfected: 172488,
  deceased: 33866,
  quarantined: 66834,
  tested: 8298820,
  id: "2021-11-26T09:54:00+01:00"
  },
  {
  infected: 1068888,
  activeInfected: 172488,
  deceased: 33866,
  quarantined: 66834,
  tested: 8298820,
  id: "2021-11-28T09:50:00+01:00"
  },
  {
  infected: 1096718,
  activeInfected: 185141,
  deceased: 34326,
  quarantined: 52452,
  tested: 8423435,
  id: "2021-11-29T09:54:00+01:00"
  },
  {
  infected: 1103108,
  activeInfected: 185928,
  deceased: 34521,
  quarantined: 49607,
  tested: 8443744,
  id: "2021-11-30T09:54:00+01:00"
  },
  {
  infected: 1114260,
  activeInfected: 187856,
  deceased: 34713,
  quarantined: 53551,
  tested: 8474664,
  id: "2021-12-01T09:57:00+01:00"
  },
  {
  infected: 1124726,
  activeInfected: 187795,
  deceased: 34931,
  quarantined: 59593,
  tested: 8516699,
  id: "2021-12-02T09:46:00+01:00"
  },
  {
  infected: 1134869,
  activeInfected: 189002,
  deceased: 35122,
  quarantined: 60555,
  tested: 8559975,
  id: "2021-12-03T09:57:00+01:00"
  },
  {
  infected: 1157568,
  activeInfected: 189753,
  deceased: 35611,
  quarantined: 48217,
  tested: 8666739,
  id: "2021-12-06T10:08:00+01:00"
  },
  {
  infected: 1161879,
  activeInfected: 187208,
  deceased: 35835,
  quarantined: 45198,
  tested: 8679620,
  id: "2021-12-07T09:55:00+01:00"
  },
  {
  infected: 1168728,
  activeInfected: 184295,
  deceased: 36048,
  quarantined: 47718,
  tested: 8701776,
  id: "2021-12-08T09:54:00+01:00"
  },
  {
  infected: 1176038,
  activeInfected: 184527,
  deceased: 36263,
  quarantined: 53187,
  tested: 8734938,
  id: "2021-12-09T09:47:00+01:00"
  },
  {
  infected: 1182922,
  activeInfected: 177596,
  deceased: 36429,
  quarantined: 55544,
  tested: 8768881,
  id: "2021-12-10T09:47:00+01:00"
  },
  {
  infected: 1198939,
  activeInfected: 170416,
  deceased: 36884,
  quarantined: 43047,
  tested: 8853922,
  id: "2021-12-13T09:51:00+01:00"
  },
  {
  infected: 1202514,
  activeInfected: 168918,
  deceased: 37079,
  quarantined: 40518,
  tested: 8868961,
  id: "2021-12-14T09:55:00+01:00"
  },
  {
  infected: 1208020,
  activeInfected: 165202,
  deceased: 37232,
  quarantined: 42569,
  tested: 8890023,
  id: "2021-12-15T10:02:00+01:00"
  },
  {
  infected: 1213318,
  activeInfected: 159853,
  deceased: 37376,
  quarantined: 45659,
  tested: 8919775,
  id: "2021-12-16T10:03:00+01:00"
  },
  {
  infected: 1218295,
  activeInfected: 154511,
  deceased: 37530,
  quarantined: 45852,
  tested: 8947845,
  id: "2021-12-17T09:57:00+01:00"
  }
  ]

  export default DUMMY_DATA;
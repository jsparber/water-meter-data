var dataSeries = [
{"date": "2019-10-14 17:08:00", "value1": 6.25, "value2": 2.651},
{"date": "2019-10-14 17:09:00", "value1": 6.144, "value2": 2.786},
{"date": "2019-10-14 17:09:00", "value1": 6.144, "value2": 2.786},
{"date": "2019-10-14 17:12:00", "value1": 6.276, "value2": 2.721},
{"date": "2019-10-14 17:13:00", "value1": 9.527, "value2": 6.223},
{"date": "2019-10-14 17:14:00", "value1": 6.166, "value2": 3.099},
{"date": "2019-10-14 17:15:00", "value1": 6.197, "value2": 2.99},
{"date": "2019-10-14 17:16:00", "value1": 6.169, "value2": 3.176},
{"date": "2019-10-14 17:17:00", "value1": 6.276, "value2": 2.967},
{"date": "2019-10-14 17:18:00", "value1": 6.169, "value2": 2.967},
{"date": "2019-10-14 17:19:00", "value1": 6.115, "value2": 3.024},
{"date": "2019-10-14 17:20:00", "value1": 6.331, "value2": 3.158},
{"date": "2019-10-14 17:21:00", "value1": 6.224, "value2": 3.067},
{"date": "2019-10-14 17:22:00", "value1": 6.301, "value2": 2.933},
{"date": "2019-10-14 17:23:00", "value1": 6.14, "value2": 2.957},
{"date": "2019-10-14 17:24:00", "value1": 6.147, "value2": 3.058},
{"date": "2019-10-14 17:25:00", "value1": 6.224, "value2": 3.14},
{"date": "2019-10-14 17:26:00", "value1": 6.195, "value2": 3.126},
{"date": "2019-10-14 17:26:00", "value1": 6.195, "value2": 3.126},
{"date": "2019-10-14 17:28:00", "value1": 6.197, "value2": 3.092},
{"date": "2019-10-14 17:30:00", "value1": 6.223, "value2": 3.024},
{"date": "2019-10-14 17:31:00", "value1": 6.224, "value2": 3.207},
{"date": "2019-10-14 17:31:00", "value1": 6.224, "value2": 3.207},
{"date": "2019-10-14 17:33:00", "value1": 6.169, "value2": 3.099},
{"date": "2019-10-14 17:35:00", "value1": 6.14, "value2": 3.126},
{"date": "2019-10-14 17:36:00", "value1": 6.301, "value2": 3.099},
{"date": "2019-10-14 17:37:00", "value1": 6.169, "value2": 3.112},
{"date": "2019-10-14 17:38:00", "value1": 6.353, "value2": 3.131},
{"date": "2019-10-14 17:39:00", "value1": 6.38, "value2": 3.366},
{"date": "2019-10-14 17:40:00", "value1": 6.305, "value2": 3.961},
{"date": "2019-10-14 17:41:00", "value1": 6.513, "value2": 4.522},
{"date": "2019-10-14 17:42:00", "value1": 6.483, "value2": 4.656},
{"date": "2019-10-14 17:43:00", "value1": 6.438, "value2": 4.714},
{"date": "2019-10-14 17:44:00", "value1": 6.444, "value2": 4.567},
{"date": "2019-10-14 17:45:00", "value1": 6.513, "value2": 4.7},
{"date": "2019-10-14 17:46:00", "value1": 6.513, "value2": 4.567},
{"date": "2019-10-14 17:47:00", "value1": 6.461, "value2": 4.7},
{"date": "2019-10-14 17:48:00", "value1": 6.468, "value2": 4.664},
{"date": "2019-10-14 17:49:00", "value1": 6.438, "value2": 4.664},
{"date": "2019-10-14 17:50:00", "value1": 6.513, "value2": 4.583},
{"date": "2019-10-14 17:51:00", "value1": 6.414, "value2": 4.779},
{"date": "2019-10-14 17:52:00", "value1": 6.438, "value2": 4.724},
{"date": "2019-10-14 17:53:00", "value1": 6.483, "value2": 4.648},
{"date": "2019-10-14 17:54:00", "value1": 6.363, "value2": 4.636},
{"date": "2019-10-14 17:55:00", "value1": 6.385, "value2": 4.636},
{"date": "2019-10-14 17:56:00", "value1": 6.389, "value2": 4.737},
{"date": "2019-10-14 17:57:00", "value1": 6.414, "value2": 4.636},
{"date": "2019-10-14 17:58:00", "value1": 6.461, "value2": 4.567},
{"date": "2019-10-14 17:59:00", "value1": 6.389, "value2": 4.664},
{"date": "2019-10-14 18:00:00", "value1": 6.468, "value2": 4.779},
{"date": "2019-10-14 18:01:00", "value1": 6.522, "value2": 4.666},
{"date": "2019-10-14 18:02:00", "value1": 6.414, "value2": 4.511},
{"date": "2019-10-14 18:03:00", "value1": 6.389, "value2": 4.737},
{"date": "2019-10-14 18:04:00", "value1": 6.438, "value2": 4.699},
{"date": "2019-10-14 18:05:00", "value1": 6.389, "value2": 4.636},
{"date": "2019-10-14 18:06:00", "value1": 6.483, "value2": 4.737},
{"date": "2019-10-14 18:07:00", "value1": 6.438, "value2": 4.887},
{"date": "2019-10-14 18:08:00", "value1": 6.468, "value2": 4.743},
{"date": "2019-10-14 18:09:00", "value1": 6.483, "value2": 4.816},
{"date": "2019-10-14 18:12:00", "value1": 6.444, "value2": 4.816},
{"date": "2019-10-14 18:15:00", "value1": 6.522, "value2": 4.82},
{"date": "2019-10-14 18:16:00", "value1": 6.451, "value2": 5.074},
{"date": "2019-10-14 18:17:00", "value1": 6.522, "value2": 5.286},
{"date": "2019-10-14 18:18:00", "value1": 6.432, "value2": 5.634},
{"date": "2019-10-14 18:19:00", "value1": 6.553, "value2": 6.032},
{"date": "2019-10-14 18:20:00", "value1": 6.575, "value2": 6.414},
{"date": "2019-10-14 18:21:00", "value1": 6.619, "value2": 6.696},
{"date": "2019-10-14 18:22:00", "value1": 6.711, "value2": 7.025},
{"date": "2019-10-14 18:23:00", "value1": 6.674, "value2": 7.186},
{"date": "2019-10-14 18:23:00", "value1": 6.674, "value2": 7.186},
{"date": "2019-10-14 18:25:00", "value1": 6.708, "value2": 7.375},
{"date": "2019-10-14 18:27:00", "value1": 6.727, "value2": 7.42},
{"date": "2019-10-14 18:28:00", "value1": 6.674, "value2": 7.375},
{"date": "2019-10-14 18:29:00", "value1": 6.693, "value2": 7.418},
{"date": "2019-10-14 18:29:00", "value1": 6.693, "value2": 7.418},
{"date": "2019-10-14 18:31:00", "value1": 6.627, "value2": 7.42},
{"date": "2019-10-14 18:33:00", "value1": 6.729, "value2": 7.381},
{"date": "2019-10-14 18:34:00", "value1": 6.729, "value2": 7.378},
{"date": "2019-10-14 18:35:00", "value1": 6.762, "value2": 7.42},
{"date": "2019-10-14 18:36:00", "value1": 6.711, "value2": 7.21},
{"date": "2019-10-14 18:37:00", "value1": 6.689, "value2": 7.418},

]

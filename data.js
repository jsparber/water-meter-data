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
{"date": "2019-10-14 18:40:00", "value1": 6.693, "value2": 7.337},
{"date": "2019-10-14 18:42:00", "value1": 6.646, "value2": 7.416},
{"date": "2019-10-14 18:43:00", "value1": 6.674, "value2": 7.13},
{"date": "2019-10-14 18:44:00", "value1": 6.729, "value2": 7.46},
{"date": "2019-10-14 18:44:00", "value1": 6.729, "value2": 7.46},
{"date": "2019-10-14 18:46:00", "value1": 6.762, "value2": 7.42},
{"date": "2019-10-14 18:48:00", "value1": 6.779, "value2": 7.257},
{"date": "2019-10-14 18:49:00", "value1": 6.729, "value2": 7.412},
{"date": "2019-10-14 18:50:00", "value1": 6.762, "value2": 7.42},
{"date": "2019-10-14 18:51:00", "value1": 6.654, "value2": 7.412},
{"date": "2019-10-14 18:52:00", "value1": 6.779, "value2": 7.42},
{"date": "2019-10-14 18:53:00", "value1": 6.619, "value2": 7.42},
{"date": "2019-10-14 18:54:00", "value1": 6.708, "value2": 7.54},
{"date": "2019-10-14 18:55:00", "value1": 6.669, "value2": 8.263},
{"date": "2019-10-14 18:55:00", "value1": 6.669, "value2": 8.263},
{"date": "2019-10-14 18:57:00", "value1": 6.88, "value2": 8.628},
{"date": "2019-10-14 18:59:00", "value1": 6.85, "value2": 8.976},
{"date": "2019-10-14 19:00:00", "value1": 6.85, "value2": 8.993},
{"date": "2019-10-14 19:01:00", "value1": 6.887, "value2": 8.944},
{"date": "2019-10-14 19:02:00", "value1": 6.866, "value2": 8.94},
{"date": "2019-10-14 19:03:00", "value1": 6.85, "value2": 8.906},
{"date": "2019-10-14 19:04:00", "value1": 6.796, "value2": 8.906},
{"date": "2019-10-14 19:05:00", "value1": 6.85, "value2": 8.959},
{"date": "2019-10-14 19:06:00", "value1": 6.796, "value2": 8.84},
{"date": "2019-10-14 19:07:00", "value1": 6.834, "value2": 8.894},
{"date": "2019-10-14 19:08:00", "value1": 6.815, "value2": 8.926},
{"date": "2019-10-14 19:09:00", "value1": 6.83, "value2": 8.906},
{"date": "2019-10-14 19:10:00", "value1": 6.812, "value2": 8.951},
{"date": "2019-10-14 19:11:00", "value1": 6.834, "value2": 8.9},
{"date": "2019-10-14 19:11:00", "value1": 6.834, "value2": 8.9},
{"date": "2019-10-14 19:13:00", "value1": 6.88, "value2": 8.906},
{"date": "2019-10-14 19:15:00", "value1": 6.887, "value2": 8.993},
{"date": "2019-10-14 19:16:00", "value1": 6.834, "value2": 8.967},
{"date": "2019-10-14 19:17:00", "value1": 6.815, "value2": 8.959},
{"date": "2019-10-14 19:18:00", "value1": 6.834, "value2": 8.959},
{"date": "2019-10-14 19:18:00", "value1": 6.834, "value2": 8.959},
{"date": "2019-10-14 19:20:00", "value1": 6.815, "value2": 8.959},
{"date": "2019-10-14 19:22:00", "value1": 6.815, "value2": 8.872},
{"date": "2019-10-14 19:23:00", "value1": 6.815, "value2": 8.993},
{"date": "2019-10-14 19:24:00", "value1": 6.834, "value2": 8.877},
{"date": "2019-10-14 19:25:00", "value1": 6.85, "value2": 9.064},
{"date": "2019-10-14 19:26:00", "value1": 6.887, "value2": 8.984},
{"date": "2019-10-14 19:27:00", "value1": 6.834, "value2": 8.933},
{"date": "2019-10-14 19:28:00", "value1": 6.815, "value2": 9.125},
{"date": "2019-10-14 19:31:00", "value1": 6.887, "value2": 8.926},
{"date": "2019-10-14 19:33:00", "value1": 6.834, "value2": 8.967},
{"date": "2019-10-14 19:34:00", "value1": 6.846, "value2": 8.984},
{"date": "2019-10-14 19:35:00", "value1": 6.902, "value2": 8.816},
{"date": "2019-10-14 19:35:00", "value1": 6.902, "value2": 8.816},
{"date": "2019-10-14 19:37:00", "value1": 6.85, "value2": 9.077},
{"date": "2019-10-14 19:37:00", "value1": 6.85, "value2": 9.077},
{"date": "2019-10-14 19:40:00", "value1": 6.929, "value2": 9.163},
{"date": "2019-10-14 19:42:00", "value1": 6.798, "value2": 9.202},
{"date": "2019-10-14 19:43:00", "value1": 6.86, "value2": 9.101},
{"date": "2019-10-14 19:44:00", "value1": 6.929, "value2": 9.088},
{"date": "2019-10-14 19:45:00", "value1": 6.887, "value2": 9.039},
{"date": "2019-10-14 19:46:00", "value1": 6.798, "value2": 9.041},
{"date": "2019-10-14 19:46:00", "value1": 6.798, "value2": 9.041},
{"date": "2019-10-14 19:48:00", "value1": 6.887, "value2": 9.051},
{"date": "2019-10-14 19:50:00", "value1": 6.887, "value2": 9.14},
{"date": "2019-10-14 19:51:00", "value1": 6.818, "value2": 9.088},
{"date": "2019-10-14 19:52:00", "value1": 6.866, "value2": 9.064},
{"date": "2019-10-14 19:53:00", "value1": 6.929, "value2": 9.003},
{"date": "2019-10-14 19:54:00", "value1": 6.872, "value2": 9.091},
{"date": "2019-10-14 19:55:00", "value1": 6.951, "value2": 9.064},
{"date": "2019-10-14 19:58:00", "value1": 6.815, "value2": 9.077},
{"date": "2019-10-14 20:00:00", "value1": 6.908, "value2": 9.46},
{"date": "2019-10-14 20:00:00", "value1": 6.908, "value2": 9.46},
{"date": "2019-10-14 20:02:00", "value1": 6.988, "value2": 0.634},
{"date": "2019-10-14 20:02:00", "value1": 6.988, "value2": 0.634},
{"date": "2019-10-14 20:05:00", "value1": 7.101, "value2": 1.745},
{"date": "2019-10-14 20:07:00", "value1": 7.09, "value2": 1.812},
{"date": "2019-10-14 20:07:00", "value1": 7.09, "value2": 1.812},
{"date": "2019-10-14 20:09:00", "value1": 7.13, "value2": 1.921},
{"date": "2019-10-14 20:11:00", "value1": 7.11, "value2": 1.88},
{"date": "2019-10-14 20:12:00", "value1": 7.08, "value2": 1.846},
{"date": "2019-10-14 20:13:00", "value1": 7.193, "value2": 1.888},
{"date": "2019-10-14 20:14:00", "value1": 7.13, "value2": 1.842},
{"date": "2019-10-14 20:15:00", "value1": 7.13, "value2": 1.866},
{"date": "2019-10-14 20:16:00", "value1": 7.09, "value2": 1.827},
{"date": "2019-10-14 20:17:00", "value1": 7.101, "value2": 1.921},
{"date": "2019-10-14 20:18:00", "value1": 7.101, "value2": 1.921},
{"date": "2019-10-14 20:19:00", "value1": 7.101, "value2": 1.908},
{"date": "2019-10-14 20:20:00", "value1": 7.09, "value2": 1.842},
{"date": "2019-10-14 20:21:00", "value1": 7.09, "value2": 1.842},
{"date": "2019-10-14 20:22:00", "value1": 7.13, "value2": 1.88},
{"date": "2019-10-14 20:23:00", "value1": 7.069, "value2": 1.762},
{"date": "2019-10-14 20:24:00", "value1": 7.08, "value2": 1.842},
{"date": "2019-10-14 20:25:00", "value1": 7.13, "value2": 1.846},
{"date": "2019-10-14 20:26:00", "value1": 7.156, "value2": 1.846},
{"date": "2019-10-14 20:27:00", "value1": 7.073, "value2": 1.827},
{"date": "2019-10-14 20:28:00", "value1": 7.083, "value2": 1.951},
{"date": "2019-10-14 20:29:00", "value1": 7.09, "value2": 1.842},
{"date": "2019-10-14 20:30:00", "value1": 7.11, "value2": 1.908},
{"date": "2019-10-14 20:31:00", "value1": 7.11, "value2": 1.929},
{"date": "2019-10-14 20:32:00", "value1": 7.13, "value2": 1.908},
{"date": "2019-10-14 20:33:00", "value1": 7.156, "value2": 2.092},
{"date": "2019-10-14 20:34:00", "value1": 7.202, "value2": 2.757},
{"date": "2019-10-14 20:35:00", "value1": 7.302, "value2": 3.3},
{"date": "2019-10-14 20:36:00", "value1": 7.333, "value2": 4.013},
{"date": "2019-10-14 20:37:00", "value1": 7.337, "value2": 4.346},
{"date": "2019-10-14 20:38:00", "value1": 7.461, "value2": 4.636},
{"date": "2019-10-14 20:38:00", "value1": 7.461, "value2": 4.636},
{"date": "2019-10-14 20:40:00", "value1": 7.459, "value2": 6.195},
{"date": "2019-10-14 20:42:00", "value1": 7.693, "value2": 6.678},
{"date": "2019-10-14 20:43:00", "value1": 7.703, "value2": 7.231},
{"date": "2019-10-14 20:43:00", "value1": 7.703, "value2": 7.231},
{"date": "2019-10-14 20:45:00", "value1": 7.714, "value2": 7.378},
{"date": "2019-10-14 20:47:00", "value1": 7.714, "value2": 7.378},
{"date": "2019-10-14 20:48:00", "value1": 7.749, "value2": 7.378},
{"date": "2019-10-14 20:49:00", "value1": 7.708, "value2": 7.582},
{"date": "2019-10-14 20:50:00", "value1": 7.667, "value2": 7.46},
{"date": "2019-10-14 20:52:00", "value1": 7.731, "value2": 7.416},
{"date": "2019-10-14 20:53:00", "value1": 7.749, "value2": 7.459},
{"date": "2019-10-14 20:53:00", "value1": 7.749, "value2": 7.459},
{"date": "2019-10-14 20:55:00", "value1": 7.714, "value2": 7.329},
{"date": "2019-10-14 20:57:00", "value1": 7.714, "value2": 7.541},
{"date": "2019-10-14 20:58:00", "value1": 7.708, "value2": 7.375},
{"date": "2019-10-14 20:59:00", "value1": 7.708, "value2": 7.459},
{"date": "2019-10-14 21:00:00", "value1": 7.731, "value2": 7.584},
{"date": "2019-10-14 21:01:00", "value1": 7.703, "value2": 7.412},
{"date": "2019-10-14 21:02:00", "value1": 7.703, "value2": 7.371},
{"date": "2019-10-14 21:03:00", "value1": 7.731, "value2": 7.542},
{"date": "2019-10-14 21:04:00", "value1": 7.731, "value2": 7.371},
{"date": "2019-10-14 21:05:00", "value1": 7.703, "value2": 7.418},
{"date": "2019-10-14 21:06:00", "value1": 7.625, "value2": 7.371},
{"date": "2019-10-14 21:08:00", "value1": 7.731, "value2": 7.371},
{"date": "2019-10-14 21:09:00", "value1": 7.622, "value2": 7.584},
{"date": "2019-10-14 21:11:00", "value1": 7.798, "value2": 7.455},
{"date": "2019-10-14 21:12:00", "value1": 7.769, "value2": 7.825},
{"date": "2019-10-14 21:13:00", "value1": 7.749, "value2": 8.084},
{"date": "2019-10-14 21:14:00", "value1": 7.807, "value2": 7.198},
{"date": "2019-10-14 21:14:00", "value1": 7.807, "value2": 7.198},
{"date": "2019-10-14 21:16:00", "value1": 7.89, "value2": 8.319},
{"date": "2019-10-14 21:18:00", "value1": 7.776, "value2": 8.29},
{"date": "2019-10-14 21:19:00", "value1": 7.783, "value2": 8.402},
{"date": "2019-10-14 21:20:00", "value1": 7.814, "value2": 8.05},
{"date": "2019-10-14 21:21:00", "value1": 7.807, "value2": 8.42},
{"date": "2019-10-14 21:22:00", "value1": 7.708, "value2": 8.524},
{"date": "2019-10-14 21:23:00", "value1": 7.743, "value2": 8.29},
{"date": "2019-10-14 21:24:00", "value1": 7.749, "value2": 8.261},
{"date": "2019-10-14 21:25:00", "value1": 7.743, "value2": 8.16},
{"date": "2019-10-14 21:26:00", "value1": 7.852, "value2": 8.263},
{"date": "2019-10-14 21:27:00", "value1": 7.737, "value2": 8.34},
{"date": "2019-10-14 21:28:00", "value1": 7.839, "value2": 8.29},
{"date": "2019-10-14 21:29:00", "value1": 7.798, "value2": 8.312},
{"date": "2019-10-14 21:30:00", "value1": 7.731, "value2": 8.238},
{"date": "2019-10-14 21:31:00", "value1": 7.783, "value2": 8.312},
{"date": "2019-10-14 21:32:00", "value1": 7.807, "value2": 8.37},
{"date": "2019-10-14 21:33:00", "value1": 7.814, "value2": 8.487},
{"date": "2019-10-14 21:34:00", "value1": 7.756, "value2": 8.212},
{"date": "2019-10-14 21:35:00", "value1": 7.769, "value2": 8.106},
{"date": "2019-10-14 21:36:00", "value1": 7.731, "value2": 8.349},
{"date": "2019-10-14 21:37:00", "value1": 7.743, "value2": 8.263},
{"date": "2019-10-14 21:38:00", "value1": 7.814, "value2": 8.389},
{"date": "2019-10-14 21:39:00", "value1": 7.667, "value2": 8.238},
{"date": "2019-10-14 21:40:00", "value1": 7.749, "value2": 8.238},
{"date": "2019-10-14 21:41:00", "value1": 7.79, "value2": 8.501},
{"date": "2019-10-14 21:43:00", "value1": 7.776, "value2": 8.37},
{"date": "2019-10-14 21:44:00", "value1": 7.708, "value2": 8.29},
{"date": "2019-10-14 21:45:00", "value1": 7.737, "value2": 8.389},
{"date": "2019-10-14 21:46:00", "value1": 7.703, "value2": 7.139},
{"date": "2019-10-14 21:47:00", "value1": 7.743, "value2": 8.012},
{"date": "2019-10-14 21:48:00", "value1": 7.769, "value2": 8.349},
{"date": "2019-10-14 21:49:00", "value1": 7.783, "value2": 8.05},
{"date": "2019-10-14 21:50:00", "value1": 7.83, "value2": 8.37},
{"date": "2019-10-14 21:51:00", "value1": 7.769, "value2": 8.319},
{"date": "2019-10-14 21:52:00", "value1": 7.731, "value2": 8.436},
{"date": "2019-10-14 21:53:00", "value1": 7.83, "value2": 8.16},
{"date": "2019-10-14 21:54:00", "value1": 7.667, "value2": 8.263},
{"date": "2019-10-14 21:55:00", "value1": 7.659, "value2": 8.295},
{"date": "2019-10-14 21:56:00", "value1": 7.852, "value2": 8.312},
{"date": "2019-10-14 21:57:00", "value1": 7.769, "value2": 8.42},
{"date": "2019-10-14 21:57:00", "value1": 7.769, "value2": 8.42},
{"date": "2019-10-14 21:59:00", "value1": 7.89, "value2": 9.077},
{"date": "2019-10-14 22:01:00", "value1": 7.88, "value2": 8.906},
{"date": "2019-10-14 22:02:00", "value1": 7.861, "value2": 8.919},
{"date": "2019-10-14 22:03:00", "value1": 7.88, "value2": 8.877},
{"date": "2019-10-14 22:03:00", "value1": 7.88, "value2": 8.877},
{"date": "2019-10-14 22:05:00", "value1": 7.839, "value2": 8.847},
{"date": "2019-10-14 22:07:00", "value1": 7.848, "value2": 8.926},
{"date": "2019-10-14 22:07:00", "value1": 7.848, "value2": 8.926},
{"date": "2019-10-14 22:09:00", "value1": 7.852, "value2": 8.976},
{"date": "2019-10-14 22:11:00", "value1": 7.89, "value2": 9.039},
{"date": "2019-10-14 22:11:00", "value1": 7.89, "value2": 9.039},
{"date": "2019-10-14 22:13:00", "value1": 7.88, "value2": 8.967},
{"date": "2019-10-14 22:16:00", "value1": 7.822, "value2": 8.906},
{"date": "2019-10-14 22:18:00", "value1": 7.917, "value2": 9.003},
{"date": "2019-10-14 22:19:00", "value1": 7.839, "value2": 8.933},
{"date": "2019-10-14 22:20:00", "value1": 7.89, "value2": 9.003},
{"date": "2019-10-14 22:20:00", "value1": 7.89, "value2": 9.003},
{"date": "2019-10-14 22:22:00", "value1": 7.89, "value2": 8.912},
{"date": "2019-10-14 22:24:00", "value1": 7.88, "value2": 9.003},
{"date": "2019-10-14 22:25:00", "value1": 7.87, "value2": 9.003},
{"date": "2019-10-14 22:26:00", "value1": 7.899, "value2": 8.959},
{"date": "2019-10-14 22:27:00", "value1": 7.848, "value2": 8.976},
{"date": "2019-10-14 22:28:00", "value1": 7.848, "value2": 9.039},
{"date": "2019-10-14 22:29:00", "value1": 7.91, "value2": 8.933},
{"date": "2019-10-14 22:30:00", "value1": 7.901, "value2": 8.967},
{"date": "2019-10-14 22:31:00", "value1": 7.861, "value2": 9.064},
{"date": "2019-10-14 22:32:00", "value1": 7.839, "value2": 8.967},
{"date": "2019-10-14 22:33:00", "value1": 7.88, "value2": 8.906},
{"date": "2019-10-14 22:34:00", "value1": 7.798, "value2": 9.003},
{"date": "2019-10-14 22:35:00", "value1": 7.848, "value2": 8.94},
{"date": "2019-10-14 22:36:00", "value1": 7.83, "value2": 8.94},
{"date": "2019-10-14 22:37:00", "value1": 7.89, "value2": 8.94},
{"date": "2019-10-14 22:38:00", "value1": 7.839, "value2": 9.003},
{"date": "2019-10-14 22:39:00", "value1": 7.756, "value2": 8.94},
{"date": "2019-10-14 22:40:00", "value1": 7.861, "value2": 8.94},
{"date": "2019-10-14 22:41:00", "value1": 7.839, "value2": 9.013},
{"date": "2019-10-14 22:42:00", "value1": 7.848, "value2": 8.976},
{"date": "2019-10-14 22:43:00", "value1": 7.756, "value2": 8.84},
{"date": "2019-10-14 22:44:00", "value1": 7.79, "value2": 8.888},
{"date": "2019-10-14 22:45:00", "value1": 7.861, "value2": 9.125},
{"date": "2019-10-14 22:46:00", "value1": 7.848, "value2": 8.948},
{"date": "2019-10-14 22:47:00", "value1": 7.822, "value2": 8.784},
{"date": "2019-10-14 22:48:00", "value1": 7.861, "value2": 8.906},
{"date": "2019-10-14 22:49:00", "value1": 7.798, "value2": 8.877},
{"date": "2019-10-14 22:49:00", "value1": 7.798, "value2": 8.877},
{"date": "2019-10-14 22:51:00", "value1": 7.839, "value2": 9.088},
{"date": "2019-10-14 22:53:00", "value1": 7.901, "value2": 9.163},
{"date": "2019-10-14 22:55:00", "value1": 7.972, "value2": 9.959},
{"date": "2019-10-14 22:56:00", "value1": 7.943, "value2": 9.961},
{"date": "2019-10-14 22:57:00", "value1": 7.948, "value2": 0.122},
{"date": "2019-10-14 22:58:00", "value1": 7.948, "value2": 9.958},
{"date": "2019-10-14 22:59:00", "value1": 8.038, "value2": 9.961},
{"date": "2019-10-14 23:00:00", "value1": 8.025, "value2": 9.959},
{"date": "2019-10-14 23:01:00", "value1": 7.987, "value2": 9.922},
{"date": "2019-10-14 23:02:00", "value1": 7.975, "value2": 0.082},
{"date": "2019-10-14 23:04:00", "value1": 7.972, "value2": 0.122},
{"date": "2019-10-14 23:05:00", "value1": 8.025, "value2": 0.119},
{"date": "2019-10-14 23:05:00", "value1": 8.025, "value2": 0.119},
{"date": "2019-10-14 23:07:00", "value1": 8.012, "value2": 9.922},
{"date": "2019-10-14 23:09:00", "value1": 7.972, "value2": 9.961},
{"date": "2019-10-14 23:10:00", "value1": 8.012, "value2": 9.884},
{"date": "2019-10-14 23:11:00", "value1": 7.999, "value2": 9.96},
{"date": "2019-10-14 23:14:00", "value1": 7.972, "value2": 9.959},
{"date": "2019-10-14 23:14:00", "value1": 7.972, "value2": 9.959},
{"date": "2019-10-14 23:17:00", "value1": 7.972, "value2": 9.92},
{"date": "2019-10-14 23:19:00", "value1": 8.066, "value2": 9.918},
{"date": "2019-10-14 23:20:00", "value1": 8.012, "value2": 0.163},
{"date": "2019-10-14 23:21:00", "value1": 7.975, "value2": 9.918},
{"date": "2019-10-14 23:22:00", "value1": 7.901, "value2": 0.043},
{"date": "2019-10-14 23:23:00", "value1": 7.987, "value2": 9.959},
{"date": "2019-10-14 23:24:00", "value1": 7.987, "value2": 0.078},
{"date": "2019-10-14 23:25:00", "value1": 7.89, "value2": 0.122},
{"date": "2019-10-14 23:26:00", "value1": 8.038, "value2": 9.918},
{"date": "2019-10-14 23:27:00", "value1": 8.038, "value2": 0.04},
{"date": "2019-10-14 23:28:00", "value1": 8.026, "value2": 0.122},
{"date": "2019-10-14 23:29:00", "value1": 7.948, "value2": 9.92},
{"date": "2019-10-14 23:30:00", "value1": 8.012, "value2": 0.122},
{"date": "2019-10-14 23:31:00", "value1": 7.96, "value2": 9.96},
{"date": "2019-10-14 23:32:00", "value1": 7.96, "value2": 9.92},
{"date": "2019-10-14 23:33:00", "value1": 7.985, "value2": 9.92},
{"date": "2019-10-14 23:34:00", "value1": 7.972, "value2": 0.078},
{"date": "2019-10-14 23:35:00", "value1": 7.975, "value2": 9.916},
{"date": "2019-10-14 23:36:00", "value1": 7.998, "value2": 0.078},
{"date": "2019-10-14 23:37:00", "value1": 7.96, "value2": 9.959},
{"date": "2019-10-14 23:37:00", "value1": 7.96, "value2": 9.959},
{"date": "2019-10-14 23:39:00", "value1": 7.998, "value2": 9.92},
{"date": "2019-10-14 23:41:00", "value1": 7.999, "value2": 0.163},
{"date": "2019-10-14 23:43:00", "value1": 7.96, "value2": 0.078},
{"date": "2019-10-14 23:43:00", "value1": 7.96, "value2": 0.078},
{"date": "2019-10-14 23:45:00", "value1": 7.96, "value2": 9.92},
{"date": "2019-10-14 23:47:00", "value1": 7.943, "value2": 9.961},
{"date": "2019-10-14 23:48:00", "value1": 8.025, "value2": 9.961},
{"date": "2019-10-14 23:49:00", "value1": 8.038, "value2": 9.918},
{"date": "2019-10-14 23:50:00", "value1": 7.985, "value2": 0.078},
{"date": "2019-10-14 23:51:00", "value1": 7.89, "value2": 0.159},
{"date": "2019-10-14 23:52:00", "value1": 7.972, "value2": 0.086},
{"date": "2019-10-14 23:53:00", "value1": 8.012, "value2": 0.163},
{"date": "2019-10-14 23:54:00", "value1": 7.987, "value2": 9.959},
{"date": "2019-10-14 23:55:00", "value1": 7.998, "value2": 0.08},
{"date": "2019-10-14 23:56:00", "value1": 7.972, "value2": 0.039},
{"date": "2019-10-14 23:57:00", "value1": 8.025, "value2": 9.958},
{"date": "2019-10-14 23:58:00", "value1": 8.04, "value2": 0.082},
{"date": "2019-10-14 23:59:00", "value1": 7.972, "value2": 9.955},
{"date": "2019-10-15 00:00:00", "value1": 7.96, "value2": 0.122},
{"date": "2019-10-15 00:01:00", "value1": 8.066, "value2": 0.082},
{"date": "2019-10-15 00:02:00", "value1": 7.948, "value2": 9.909},
{"date": "2019-10-15 00:08:00", "value1": 8.012, "value2": 9.92},
{"date": "2019-10-15 00:10:00", "value1": 7.938, "value2": 9.922},
{"date": "2019-10-15 00:11:00", "value1": 7.998, "value2": 9.961},
{"date": "2019-10-15 00:12:00", "value1": 8.012, "value2": 0.163},
{"date": "2019-10-15 00:13:00", "value1": 8.012, "value2": 9.92},
{"date": "2019-10-15 00:14:00", "value1": 8.026, "value2": 9.918},
{"date": "2019-10-15 00:15:00", "value1": 7.998, "value2": 0.038},
{"date": "2019-10-15 00:16:00", "value1": 7.88, "value2": 9.961},
{"date": "2019-10-15 00:17:00", "value1": 7.931, "value2": 0.159},
{"date": "2019-10-15 00:18:00", "value1": 8.026, "value2": 0.037},
{"date": "2019-10-15 00:19:00", "value1": 7.987, "value2": 0.163},
{"date": "2019-10-15 00:20:00", "value1": 7.999, "value2": 9.956},
{"date": "2019-10-15 00:21:00", "value1": 8.012, "value2": 0.078},
{"date": "2019-10-15 00:22:00", "value1": 8.026, "value2": 9.959},
{"date": "2019-10-15 00:23:00", "value1": 7.975, "value2": 9.92},
{"date": "2019-10-15 00:24:00", "value1": 7.998, "value2": 9.849},
{"date": "2019-10-15 00:25:00", "value1": 8.025, "value2": 9.922},
{"date": "2019-10-15 00:26:00", "value1": 8.026, "value2": 0.122},
{"date": "2019-10-15 00:27:00", "value1": 8.066, "value2": 9.959},
{"date": "2019-10-15 00:28:00", "value1": 7.91, "value2": 0.122},
{"date": "2019-10-15 00:29:00", "value1": 7.848, "value2": 0.039},
{"date": "2019-10-15 00:29:00", "value1": 7.848, "value2": 0.039},
{"date": "2019-10-15 00:31:00", "value1": 8.038, "value2": 0.041},
{"date": "2019-10-15 00:35:00", "value1": 7.972, "value2": 9.92},
{"date": "2019-10-15 00:37:00", "value1": 8.066, "value2": 9.955},
{"date": "2019-10-15 00:37:00", "value1": 8.066, "value2": 9.955},
{"date": "2019-10-15 00:39:00", "value1": 7.96, "value2": 9.956},
{"date": "2019-10-15 00:41:00", "value1": 8.026, "value2": 0.084},
{"date": "2019-10-15 00:42:00", "value1": 8.076, "value2": 0.042},
{"date": "2019-10-15 00:43:00", "value1": 8.012, "value2": 9.963},
{"date": "2019-10-15 00:44:00", "value1": 8.012, "value2": 9.909},
{"date": "2019-10-15 00:45:00", "value1": 8.066, "value2": 9.922},
{"date": "2019-10-15 00:46:00", "value1": 8.025, "value2": 0.08},
{"date": "2019-10-15 00:47:00", "value1": 8.066, "value2": 0.037},
{"date": "2019-10-15 00:48:00", "value1": 7.943, "value2": 9.92},
{"date": "2019-10-15 00:49:00", "value1": 8.012, "value2": 0.08},
{"date": "2019-10-15 00:50:00", "value1": 7.943, "value2": 9.92},
{"date": "2019-10-15 00:51:00", "value1": 8.012, "value2": 9.922},
{"date": "2019-10-15 00:52:00", "value1": 8.076, "value2": 0.122},
{"date": "2019-10-15 00:53:00", "value1": 7.83, "value2": 0.084},
{"date": "2019-10-15 00:54:00", "value1": 8.012, "value2": 0.163},
{"date": "2019-10-15 00:55:00", "value1": 7.972, "value2": 9.959},
{"date": "2019-10-15 00:56:00", "value1": 7.96, "value2": 9.92},
{"date": "2019-10-15 00:57:00", "value1": 7.92, "value2": 0.122},
{"date": "2019-10-15 00:58:00", "value1": 8.012, "value2": 0.122},
{"date": "2019-10-15 00:59:00", "value1": 8.012, "value2": 0.122},
{"date": "2019-10-15 01:00:00", "value1": 7.89, "value2": 0.122},
{"date": "2019-10-15 01:01:00", "value1": 8.026, "value2": 0.163},
{"date": "2019-10-15 01:02:00", "value1": 7.985, "value2": 0.122},
{"date": "2019-10-15 01:03:00", "value1": 7.91, "value2": 9.92},
{"date": "2019-10-15 01:04:00", "value1": 8.081, "value2": 0.122},
{"date": "2019-10-15 01:05:00", "value1": 8.012, "value2": 0.082},
{"date": "2019-10-15 01:06:00", "value1": 7.948, "value2": 0.08},
{"date": "2019-10-15 01:07:00", "value1": 7.92, "value2": 9.918},
{"date": "2019-10-15 01:08:00", "value1": 8.038, "value2": 9.909},
{"date": "2019-10-15 01:11:00", "value1": 7.96, "value2": 0.078},
{"date": "2019-10-15 01:13:00", "value1": 8.012, "value2": 0.082},
{"date": "2019-10-15 01:14:00", "value1": 8.025, "value2": 0.125},
{"date": "2019-10-15 01:15:00", "value1": 7.985, "value2": 0.044},
{"date": "2019-10-15 01:16:00", "value1": 8.076, "value2": 0.078},
{"date": "2019-10-15 01:17:00", "value1": 8.052, "value2": 0.082},
{"date": "2019-10-15 01:18:00", "value1": 8.076, "value2": 9.918},
{"date": "2019-10-15 01:19:00", "value1": 8.025, "value2": 0.086},
{"date": "2019-10-15 01:20:00", "value1": 8.025, "value2": 0.122},
{"date": "2019-10-15 01:21:00", "value1": 7.998, "value2": 0.078},
{"date": "2019-10-15 01:21:00", "value1": 7.998, "value2": 0.078},
{"date": "2019-10-15 01:23:00", "value1": 8.012, "value2": 0.119},
{"date": "2019-10-15 01:25:00", "value1": 7.92, "value2": 0.041},
{"date": "2019-10-15 01:26:00", "value1": 8.012, "value2": 0.122},
{"date": "2019-10-15 01:27:00", "value1": 7.938, "value2": 0.08},
{"date": "2019-10-15 01:28:00", "value1": 8.012, "value2": 9.959},
{"date": "2019-10-15 01:29:00", "value1": 8.097, "value2": 9.961},
{"date": "2019-10-15 01:30:00", "value1": 7.96, "value2": 9.958},
{"date": "2019-10-15 01:32:00", "value1": 8.052, "value2": 0.08},
{"date": "2019-10-15 01:32:00", "value1": 8.052, "value2": 0.08},
{"date": "2019-10-15 01:34:00", "value1": 8.055, "value2": 0.122},
{"date": "2019-10-15 01:36:00", "value1": 7.931, "value2": 0.045},
{"date": "2019-10-15 01:37:00", "value1": 7.972, "value2": 0.041},
{"date": "2019-10-15 01:38:00", "value1": 7.943, "value2": 0.039},
{"date": "2019-10-15 01:39:00", "value1": 7.987, "value2": 9.959},
{"date": "2019-10-15 01:40:00", "value1": 8.081, "value2": 0.042},
{"date": "2019-10-15 01:41:00", "value1": 8.012, "value2": 9.959},
{"date": "2019-10-15 01:42:00", "value1": 8.066, "value2": 9.92},
{"date": "2019-10-15 01:43:00", "value1": 8.012, "value2": 0.041},
{"date": "2019-10-15 01:44:00", "value1": 8.026, "value2": 9.959},
{"date": "2019-10-15 01:45:00", "value1": 8.066, "value2": 0.082},
{"date": "2019-10-15 01:47:00", "value1": 8.066, "value2": 0.044},
{"date": "2019-10-15 01:48:00", "value1": 8.066, "value2": 9.918},
{"date": "2019-10-15 01:49:00", "value1": 7.999, "value2": 0.08},
{"date": "2019-10-15 01:50:00", "value1": 8.081, "value2": 0.122},
{"date": "2019-10-15 01:51:00", "value1": 7.999, "value2": 0.08},
{"date": "2019-10-15 01:52:00", "value1": 8.025, "value2": 0.082},
{"date": "2019-10-15 01:53:00", "value1": 7.985, "value2": 0.038},
{"date": "2019-10-15 01:54:00", "value1": 8.052, "value2": 9.909},
{"date": "2019-10-15 01:55:00", "value1": 7.931, "value2": 0.042},
{"date": "2019-10-15 01:56:00", "value1": 8.066, "value2": 9.909},
{"date": "2019-10-15 01:57:00", "value1": 8.025, "value2": 0.163},
{"date": "2019-10-15 01:58:00", "value1": 7.975, "value2": 9.918},
{"date": "2019-10-15 01:58:00", "value1": 7.975, "value2": 9.918},
{"date": "2019-10-15 02:00:00", "value1": 7.987, "value2": 9.959},
{"date": "2019-10-15 02:02:00", "value1": 8.012, "value2": 9.96},
{"date": "2019-10-15 02:03:00", "value1": 8.076, "value2": 9.961},
{"date": "2019-10-15 02:04:00", "value1": 7.972, "value2": 0.122},
{"date": "2019-10-15 02:05:00", "value1": 7.972, "value2": 0.082},
{"date": "2019-10-15 02:06:00", "value1": 7.848, "value2": 0.119},
{"date": "2019-10-15 02:07:00", "value1": 7.917, "value2": 9.871},
{"date": "2019-10-15 02:07:00", "value1": 7.917, "value2": 9.871},
{"date": "2019-10-15 02:09:00", "value1": 8.076, "value2": 9.959},
{"date": "2019-10-15 02:12:00", "value1": 8.025, "value2": 0.039},
{"date": "2019-10-15 02:13:00", "value1": 7.96, "value2": 0.116},
{"date": "2019-10-15 02:14:00", "value1": 8.026, "value2": 9.922},
{"date": "2019-10-15 02:16:00", "value1": 7.999, "value2": 9.956},
{"date": "2019-10-15 02:17:00", "value1": 8.012, "value2": 0.163},
{"date": "2019-10-15 02:18:00", "value1": 7.96, "value2": 0.08},
{"date": "2019-10-15 02:19:00", "value1": 8.026, "value2": 0.08},
{"date": "2019-10-15 02:22:00", "value1": 7.999, "value2": 0.08},
{"date": "2019-10-15 02:23:00", "value1": 7.943, "value2": 0.122},
{"date": "2019-10-15 02:24:00", "value1": 8.026, "value2": 0.078},
{"date": "2019-10-15 02:25:00", "value1": 8.012, "value2": 0.037},
{"date": "2019-10-15 02:26:00", "value1": 8.052, "value2": 0.082},
{"date": "2019-10-15 02:27:00", "value1": 8.026, "value2": 9.963},
{"date": "2019-10-15 02:27:00", "value1": 8.026, "value2": 9.963},
{"date": "2019-10-15 02:29:00", "value1": 7.985, "value2": 0.039},
{"date": "2019-10-15 02:31:00", "value1": 8.04, "value2": 0.084},
{"date": "2019-10-15 02:32:00", "value1": 8.052, "value2": 0.082},
{"date": "2019-10-15 02:33:00", "value1": 7.938, "value2": 0.039},
{"date": "2019-10-15 02:34:00", "value1": 8.012, "value2": 0.122},
{"date": "2019-10-15 02:35:00", "value1": 7.89, "value2": 0.08},
{"date": "2019-10-15 02:36:00", "value1": 8.012, "value2": 9.958},
{"date": "2019-10-15 02:37:00", "value1": 7.987, "value2": 9.887},
{"date": "2019-10-15 02:38:00", "value1": 8.025, "value2": 0.122},
]

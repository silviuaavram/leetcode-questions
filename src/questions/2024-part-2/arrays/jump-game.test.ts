import {canJump} from './jump-game'

test('checks if it can jump 1', () => {
  const nums = [2, 3, 1, 1, 4]

  expect(canJump(nums)).toBe(true)
})

test('checks if it can jump 2', () => {
  const nums = [3, 2, 1, 0, 4]

  expect(canJump(nums)).toBe(false)
})
test('checks if it can jump 3', () => {
  const nums = [1, 1, 1, 1, 1]

  expect(canJump(nums)).toBe(true)
})

test('checks if it can jump 4', () => {
  const nums = [1, 1, 1, 1, 1, 1, 3, 0, 0]

  expect(canJump(nums)).toBe(true)
})

test('checks if it can jump 5', () => {
  const nums = [0]

  expect(canJump(nums)).toBe(true)
})

test('checks if it can jump 6', () => {
  const nums = [2, 0, 0]

  expect(canJump(nums)).toBe(true)
})

test('checks if it can jump 7', () => {
  const nums = [
    14577, 8676, 2538, 358, 3876, 14914, 13734, 19078, 1415, 6197, 13094, 834,
    88, 10183, 13744, 3989, 3212, 7044, 9232, 3081, 8757, 3144, 1101, 14097,
    5192, 4794, 4599, 9091, 2497, 1246, 7368, 9772, 971, 7176, 11337, 17987,
    672, 14706, 4985, 19676, 9471, 4597, 7535, 10460, 1941, 3083, 10515, 9193,
    12389, 18250, 5517, 9017, 15631, 17185, 4936, 9472, 4490, 1100, 9992, 13443,
    17400, 6533, 9825, 11210, 13297, 8689, 7865, 7852, 17776, 14394, 749, 2943,
    15262, 3918, 9007, 17399, 9174, 16532, 19993, 9200, 16933, 6054, 11569,
    10921, 3713, 14292, 13380, 4874, 14702, 10973, 12319, 12803, 9984, 1881,
    3255, 10590, 1167, 13335, 10856, 19585, 18816, 992, 18819, 14556, 8380,
    18350, 4040, 14326, 13087, 8856, 6322, 8270, 4941, 4586, 8569, 13462, 19409,
    15948, 8263, 6849, 15233, 9824, 1398, 5261, 10439, 1670, 16140, 6420, 18986,
    5385, 6698, 1622, 10752, 8876, 10964, 3163, 4054, 17414, 12955, 6699, 1503,
    7540, 12613, 7769, 7827, 10729, 8549, 10966, 2678, 5445, 18753, 7813, 9690,
    2530, 16025, 7495, 6981, 13385, 3062, 15836, 3960, 9916, 2168, 15648, 4931,
    19494, 5905, 17753, 13558, 4000, 7033, 15682, 16151, 1948, 7213, 7637,
    19254, 69, 12782, 14868, 5299, 13872, 3064, 18971, 6448, 17965, 1162, 851,
    14835, 18653, 1369, 6504, 8922, 4244, 12076, 14058, 9775, 9040, 16740, 7946,
    9997, 1873, 5188, 10231, 15055, 12760, 15653, 15477, 15312, 7383, 17960,
    7946, 4966, 19971, 3153, 8038, 19200, 5511, 7454, 12475, 514, 3927, 12035,
    12932, 13426, 2973, 18996, 10922, 9973, 683, 15045, 13456, 12081, 8942,
    3362, 10858, 17855, 4720, 11726, 17935, 289, 15033, 15463, 8929, 8692, 4770,
    6306, 17462, 16465, 1294, 9328, 10583, 12588, 5545, 17573, 3433, 7248,
    14314, 761, 11203, 7158, 7052, 10836, 13824, 1471, 9500, 1502, 16356, 13847,
    4869, 10743, 18251, 5202, 1869, 16403, 3827, 697, 788, 5002, 5582, 4600,
    4087, 11444, 4300, 738, 5115, 18971, 11588, 7966, 3806, 10833, 4037, 8516,
    2321, 11349, 2090, 10918, 18385, 16322, 18866, 19153, 18058, 13831, 19258,
    18043, 9610, 6252, 4579, 7690, 16394, 16047, 706, 16244, 10211, 5523, 10817,
    16634, 1656, 16749, 1144, 4538, 18102, 10113, 13279, 2095, 13749, 4721,
    9549, 6753, 15727, 6804, 19923, 5213, 16956, 10613, 11566, 377, 15290,
    16015, 6024, 19236, 5821, 17544, 15966, 4217, 11300, 19318, 17768, 713,
    8766, 16381, 17382, 2897, 4221, 13088, 10156, 6123, 4976, 15614, 11951,
    18672, 6903, 8163, 10239, 17006, 12353, 9471, 12149, 7151, 11139, 15286,
    6185, 14742, 7557, 11498, 1424, 9131, 9503, 8836, 5616, 3483, 1077, 4537,
    18877, 15031, 16820, 1807, 14649, 9206, 18718, 2750, 12112, 2055, 656,
    13135, 1827, 13530, 739, 1726, 19827, 2658, 8408, 12739, 9189, 2399, 12382,
    3695, 4708, 1230, 9320, 4710, 8174, 5158, 7905, 17434, 19234, 1250, 4926,
    10865, 10592, 1358, 9908, 10313, 2917, 17840, 12773, 11476, 1233, 19027,
    7711, 485, 8018, 3306, 18279, 4098, 17684, 12335, 13145, 2946, 10248, 14921,
    3350, 7004, 6227, 9622, 1731, 13404, 3867, 7430, 2764, 9460, 6332, 12989,
    13254, 16503, 17386, 7748, 6533, 13551, 656, 16321, 3557, 8690, 13225, 6566,
    6214, 17820, 10538, 1415, 959, 7465, 4829, 19403, 9004, 7194, 11355, 4104,
    10532, 12141, 14952, 13845, 2521, 11982, 1217, 19768, 14326, 1191, 9485,
    14179, 2099, 11988, 15071, 17838, 5508, 6466, 12996, 10747, 5117, 18831,
    5167, 8175, 6794, 17180, 6441, 8671, 16769, 2507, 13836, 12293, 8604, 10592,
    10690, 18146, 14814, 4685, 2631, 9958, 7365, 13511, 13826, 613, 2039, 16097,
    12421, 6929, 3403, 8709, 14208, 2834, 326, 10443, 13347, 16187, 12507,
    19870, 9035, 10343, 6742, 16726, 16804, 442, 19870, 5233, 14994, 17628,
    2585, 2115, 9322, 5689, 19257, 5135, 7922, 5088, 9110, 15570, 11375, 19044,
    14750, 4283, 16412, 3582, 10410, 1804, 17519, 15136, 875, 7222, 10755,
    14818, 9969, 3017, 17140, 1993, 15134, 8898, 8647, 13876, 3815, 6504, 6624,
    9191, 945, 3931, 10070, 4888, 5191, 19490, 16188, 15858, 7895, 8901, 1009,
    12405, 12847, 8847, 8127, 2287, 10174, 4836, 614, 14110, 4225, 6616, 15428,
    19541, 4307, 1772, 4925, 17025, 14680, 16637, 4041, 7026, 1697, 5533, 9653,
    287, 8607, 14396, 2114, 6248, 15397, 9094, 11970, 8141, 8726, 6957, 4136,
    3009, 18439, 610, 2977, 8848, 11908, 19487, 3540, 3475, 5831, 2331, 789,
    15998, 19734, 4567, 14149, 19330, 12397, 8504, 19021, 18095, 13308, 16574,
    6948, 13246, 17206, 16096, 9576, 1258, 9111, 10973, 2563, 19872, 6776,
    10548, 441, 1296, 4038, 10666, 1722, 19594, 10536, 5608, 1648, 6827, 4300,
    18595, 11502, 6183, 11454, 16607, 8409, 8418, 5994, 15620, 18646, 11246,
    2659, 19607, 4364, 12248, 5956, 7899, 16234, 1041, 5071, 6216, 10786, 3582,
    1812, 2754, 8313, 1781, 6116, 5640, 6829, 15969, 7507, 18971, 7451, 18242,
    204, 8869, 9466, 3951, 5901, 11397, 11225, 2192, 13490, 2927, 14136, 3571,
    6644, 15144, 6697, 1631, 6697, 19805, 14463, 9275, 365, 2696, 7031, 16242,
    11780, 18480, 3733, 14958, 7545, 8164, 12481, 14708, 2181, 11861, 9089,
    8603, 6454, 687, 8942, 16866, 13553, 10530, 17342, 2098, 15845, 6117, 8336,
    6172, 14409, 9612, 5997, 9597, 3411, 9495, 2575, 5203, 6220, 881, 10438,
    16237, 8437, 19652, 8420, 8733, 16209, 2470, 3866, 10957, 3855, 9270, 3893,
    5105, 10230, 11675, 6865, 493, 16185, 9197, 6412, 1947, 6870, 9366, 9345,
    16382, 18402, 13698, 12661, 17681, 4722, 9975, 9659, 16161, 4843, 13838,
    12425, 4132, 5521, 2347, 12053, 13234, 4336, 4135, 18399, 14159, 12695,
    6863, 8260, 3995, 17745, 15638, 9951, 16106, 14582, 11338, 10614, 3324,
    19883, 14352, 12365, 3374, 3175, 2998, 3381, 5650, 4185, 18462, 2258, 9574,
    10097, 2880, 5261, 1586, 6622, 8262, 5913, 8409, 2395, 12051, 4439, 8165,
    4996, 13669, 12696, 15986, 251, 14407, 18334, 41, 17113, 433, 1186, 5805,
    18691, 4545, 13895, 14061, 3928, 6631, 8553, 10007, 15725, 7557, 4091, 1098,
    13108, 14472, 3409, 8350, 12932, 8798, 9489, 17752, 2487, 1421, 18472, 2055,
    15593, 5728, 5567, 1989, 19734, 1469, 11809, 8136, 9521, 12426, 10776, 1603,
    10231, 19211, 12666, 18198, 10868, 5364, 3513, 1236, 11950, 7, 6655, 7358,
    18707, 3142, 9360, 5467, 3703, 6017, 596, 10226, 4006, 13262, 16098, 12559,
    10748, 5097, 10219, 11964, 17805, 14513, 13066, 4101, 13166, 56, 16122,
    13825, 7715, 16199, 2379, 3489, 18563, 833, 8925, 3791, 7692, 17359, 12004,
    19038, 19445, 7673, 3267, 13025, 2865, 4856, 1795, 17747, 12402, 9461,
    18532, 10995, 3149, 7681, 14618, 4479, 1699, 8955, 14351, 4383, 3499, 16390,
    5264, 5580, 483, 7959, 17652, 19191, 3236, 208, 17076, 1764, 5693, 14558,
    11797, 17849, 10239, 5241, 4309, 6118, 7866, 18413, 14384, 15550, 1871,
    2207, 4592, 9686, 11265, 17064, 7566, 4498, 1759, 13154, 3803, 8581, 16534,
    17299, 13348, 18071, 18713, 4443, 2986, 7992, 10932, 3427, 12677, 17044,
    2344, 17677, 15472, 10525, 12804, 5539, 1079, 2582, 13443, 10057, 17079,
    2423, 2347, 5105, 3324, 11494, 18986, 10813, 18419, 19768, 16226, 4962,
    11374, 7490, 6035, 10707, 18996, 4022, 15859, 7981, 1038, 16484, 4944,
    14631, 6176, 9323, 11360, 2671, 6256, 10448, 16966, 18300, 12833, 1349,
    10839, 10978, 183, 6493, 13239, 16390, 17188, 19822, 6437, 4197, 15, 19816,
    19625, 9596, 9080, 17712, 9966, 627, 12101, 16462, 11754, 8509, 8604, 13831,
    19277, 12451, 11875, 10102, 14788, 2217, 6349, 2451, 15577, 10046, 16907,
    2462, 10933, 17182, 12612, 8759, 17483, 16425, 7103, 14085, 4527, 4209,
    7548, 94, 15380, 16683, 18282, 8132, 6274, 9929, 9029, 17607, 2632, 5944,
    16775, 15835, 3052, 10098, 12162, 6097, 13079, 12416, 9265, 13232, 9068,
    8943, 10192, 13694, 749, 2923, 2381, 1578, 17605, 1286, 10450, 133, 10994,
    5761, 12482, 18401, 1415, 14636, 8469, 14777, 1069, 7846, 16625, 12605,
    3726, 413, 17130, 17064, 3578, 12536, 19082, 3419, 13212, 12963, 7303, 1595,
    6727, 8221, 2801, 891, 12568, 18277, 10314, 19341, 4026, 17204, 11624, 1002,
    10312, 911, 5194, 7206, 8889, 17739, 9264, 6535, 15361, 10769, 7068, 6375,
    7792, 14976, 6954, 16026, 4484, 774, 18028, 8571, 8456, 9318, 13098, 6933,
    15995, 2547, 17829, 5321, 11115, 7837, 15208, 17293, 7063, 18035, 14113,
    6558, 6330, 15257, 14578, 18672, 12734, 5928, 17988, 603, 13424, 6498,
    12490, 1003, 16011, 9007, 9572, 14045, 19369, 4539, 13964, 14597, 3991,
    11086, 7176, 5601, 6810, 1535, 5416, 12372, 2647, 16840, 575, 4433, 3340,
    11970, 570, 668, 17167, 7010, 10848, 334, 15106, 10754, 1108, 13148, 13885,
    7681, 14026, 4386, 17170, 11334, 14607, 2214, 288, 19319, 17904, 8852,
    12758, 13984, 1859, 81, 2254, 8845, 19932, 7295, 13821, 17819, 5548, 11692,
    3222, 12062, 11088, 15049, 8324, 17453, 12697, 18417, 12215, 17084, 430,
    901, 17659, 2260, 1105, 7737, 13727, 19897, 12, 9813, 4111, 4061, 8284,
    1359, 10827, 11967, 19155, 9667, 4369, 555, 18079, 4697, 15446, 14204,
    13065, 10184, 18383, 2420, 15106, 17414, 13340, 3731, 7327, 6415, 3500,
    3283, 1755, 2771, 4175, 19267, 13856, 7876, 12942, 14562, 13163, 1855,
    12275, 15661, 10516, 12226, 10564, 2458, 5486, 8625, 3608, 4520, 14192,
    12586, 15115, 19654, 2770, 15379, 5116, 19538, 12316, 9253, 3954, 4746,
    4606, 433, 11440, 5156, 12256, 17143, 915, 13466, 16636, 13182, 16333, 3461,
    10302, 9676, 1356, 8618, 10949, 2951, 7746, 2678, 7150, 17713, 8831, 19895,
    18473, 458, 6434, 5371, 423, 4249, 15392, 10820, 6271, 5548, 10396, 11196,
    11486, 5043, 16870, 752, 14441, 1478, 5860, 16323, 6228, 16465, 16152, 579,
    16129, 13024, 6510, 17362, 5582, 17720, 9385, 17462, 11177, 16473, 5410,
    7856, 15627, 12705, 10820, 18481, 8392, 13149, 2827, 550, 15633, 3239, 2076,
    12594, 9151, 7968, 11124, 5429, 17457, 19601, 17121, 3849, 16655, 12069,
    13147, 18781, 1044, 7803, 17052, 17068, 4367, 12066, 14842, 3190, 17829,
    10624, 3071, 827, 5242, 8683, 12108, 2442, 17681, 8229, 7989, 10263, 15465,
    12871, 2530, 4188, 8814, 4441, 11354, 1289, 9284, 12538, 18894, 9036, 17874,
    3715, 5770, 11462, 13733, 3007, 14286, 1738, 11148, 16556, 17937, 8276,
    11495, 12401, 4740, 14313, 359, 17036, 19176, 5394, 4865, 7965, 13297, 4132,
    373, 16391, 7881, 1362, 10409, 11652, 13601, 6718, 9941, 11401, 13065, 7948,
    11233, 3098, 3470, 11797, 7311, 12096, 6303, 10874, 2743, 6528, 11910, 8207,
    11762, 8817, 98, 12297, 397, 2042, 17397, 8753, 9137, 9930, 18686, 10909,
    11753, 14514, 12406, 17866, 15626, 2777, 2008, 10803, 3368, 9882, 13965,
    18387, 78, 12929, 19307, 4443, 18426, 16838, 2960, 12195, 2586, 14190, 8069,
    9184, 18360, 6313, 13832, 14779, 15715, 18702, 3042, 11841, 15611, 6951,
    13412, 9555, 3798, 125, 17574, 10845, 13543, 7787, 7864, 5419, 6838, 12248,
    7386, 9175, 9423, 17924, 10710, 19285, 1774, 10900, 12369, 14886, 19916,
    12903, 14583, 12642, 1846, 12906, 4348, 19559, 1587, 15845, 11527, 19583,
    3438, 6453, 2039, 6838, 9118, 900, 5047, 4128, 669, 3237, 1803, 19509,
    14716, 14807, 5132, 5053, 3927, 7506, 15031, 18178, 1684, 10945, 11817,
    16924, 11384, 8011, 11149, 2867, 3913, 10768, 5812, 10841, 12051, 13026,
    6708, 11797, 2609, 18474, 964, 15778, 2394, 11771, 6000, 8552, 8495, 17259,
    10234, 904, 2194, 7173, 15379, 11458, 4089, 1185, 12855, 4044, 6594, 17171,
    1093, 14945, 700, 11034, 3736, 3272, 6857, 6729, 17021, 19730, 2718, 8569,
    16772, 15657, 9547, 1512, 2948, 12018, 11830, 10686, 7768, 18524, 310, 8436,
    6879, 14116, 13566, 16725, 489, 9126, 7470, 13351, 6881, 6613, 7085, 16344,
    6941, 11570, 8450, 1662, 14106, 6122, 8171, 9700, 16701, 4558, 13960, 16455,
    965, 9090, 3914, 11538, 2537, 2638, 19036, 16326, 9630, 12530, 8980, 7512,
    18381, 10534, 8292, 17747, 7912, 727, 3481, 10581, 14979, 19088, 16584,
    10160, 17704, 1884, 6467, 5817, 3488, 9938, 8182, 3802, 17291, 15620, 10899,
    4557, 10595, 18102, 5898, 10435, 15735, 18640, 10425, 1200, 17684, 1995,
    12930, 1215, 15199, 11163, 73, 7634, 475, 8548, 5942, 14700, 16712, 15533,
    2428, 18816, 16452, 11114, 8012, 18270, 15989, 7340, 10774, 11254, 19049,
    18015, 4119, 1905, 6810, 13306, 7331, 11852, 9, 3558, 17090, 12812, 18022,
    18975, 1384, 6615, 15997, 16954, 6040, 6056, 4926, 19596, 5001, 18125,
    17479, 8969, 18743, 13564, 1427, 9509, 13091, 1300, 7175, 5665, 8344, 7758,
    11998, 6220, 11160, 433, 10190, 11105, 11888, 3704, 6089, 16461, 14665,
    5753, 14702, 16799, 6598, 8853, 15107, 16613, 15047, 5488, 1516, 13031,
    3173, 18130, 4755, 5262, 7343, 17467, 13901, 2203, 1277, 1332, 18113, 1487,
    15462, 10591, 3505, 2168, 7213, 1979, 3125, 6091, 10163, 2423, 6994, 11126,
    5661, 1552, 6297, 9970, 18537, 8385, 8675, 6573, 16720, 6810, 4886, 16730,
    2393, 12176, 1357, 19544, 8809, 15637, 8669, 9586, 10661, 19206, 18891,
    11189, 18595, 7695, 6023, 6126, 11546, 915, 19097, 2578, 9808, 16925, 7241,
    10569, 10365, 4708, 18998, 15808, 11224, 1744, 2902, 15593, 1511, 9121,
    13457, 12339, 8032, 15441, 3552, 3591, 13670, 12713, 5703, 3055, 13149,
    3248, 10453, 9344, 9439, 3524, 13041, 1674, 17954, 3554, 16211, 19411,
    19176, 13246, 16983, 7295, 1811, 9052, 3741, 499, 9743, 3050, 19642, 14610,
    11262, 3977, 19666, 18802, 8326, 7474, 19898, 1718, 682, 19966, 5186, 11864,
    7730, 5732, 3483, 16385, 15810, 4502, 17314, 14556, 14647, 17828, 10412,
    8120, 904, 16202, 4008, 5473, 9609, 12224, 4299, 5834, 4911, 9406, 6922,
    7153, 17658, 18941, 8696, 1116, 4795, 5231, 17924, 17679, 8209, 19038, 8515,
    1490, 12710, 19521, 4201, 13619, 4117, 4321, 3175, 260, 9171, 16384, 11464,
    16220, 17427, 11446, 16714, 9398, 19237, 14926, 628, 1559, 2633, 19967,
    15858, 7494, 7259, 9387, 2691, 8251, 4099, 13379, 18907, 6951, 14107, 15714,
    14551, 11099, 17914, 13232, 8785, 3797, 13671, 11174, 14341, 15574, 9981,
    18333, 18497, 17288, 15087, 6840, 4291, 11942, 3039, 1133, 1799, 17193,
    15024, 16813, 9988, 11231, 7093, 12672, 7775, 12633, 14938, 14668, 623,
    4978, 1489, 14913, 16505, 11556, 3731, 6477, 3793, 17770, 9232, 2266, 8068,
    2076, 6061, 1082, 4499, 13472, 10805, 12444, 11757, 10184, 17969, 11697,
    11418, 3699, 18426, 4785, 5050, 9435, 17720, 13787, 14273, 13131, 15343,
    8372, 12586, 1211, 8740, 1416, 8886, 14777, 10523, 2841, 3996, 3498, 8696,
    5078, 11314, 12142, 13466, 17055, 7600, 17473, 10712, 5803, 16122, 7131,
    10076, 5183, 10253, 3245, 14048, 12100, 3511, 6998, 1497, 4772, 56, 7311,
    17909, 12898, 15425, 16366, 6754, 64, 5861, 14555, 15330, 4247, 8841, 693,
    6304, 17307, 15936, 2868, 10731, 12920, 13820, 11923, 2059, 14155, 3034,
    1813, 2923, 9261, 14378, 510, 1796, 2628, 7887, 16274, 10740, 4964, 6287,
    8555, 12122, 8226, 9368, 15748, 11505, 12741, 14900, 8559, 9900, 3746, 1184,
    11435, 9556, 4490, 3783, 14887, 666, 15849, 5804, 15411, 13535, 6708, 217,
    7625, 10530, 12951, 13021, 3697, 19170, 13155, 17525, 15966, 11220, 19363,
    3041, 12162, 4580, 6578, 7192, 14437, 4610, 5588, 6151, 4255, 3745, 3747,
    11282, 18517, 19147, 543, 19315, 17401, 18362, 17276, 12657, 12089, 8520,
    15266, 9654, 11830, 10693, 16402, 15920, 19142, 17393, 19194, 12377, 11876,
    1774, 9859, 17407, 764, 7346, 8425, 15505, 16857, 8748, 14820, 7592, 12373,
    18776, 10774, 858, 337, 9814, 10449, 11170, 8411, 6755, 550, 19774, 15554,
    17083, 4155, 17394, 16346, 15865, 9397, 5787, 19110, 10210, 17974, 10666,
    10801, 12721, 18710, 16056, 1171, 19121, 3992, 17319, 410, 12066, 2286,
    7582, 15274, 15387, 11228, 2059, 1866, 10028, 17709, 2812, 11483, 10505,
    5444, 8646, 15411, 10394, 17115, 18732, 14770, 1961, 5526, 487, 14196,
    15564, 18733, 15884, 5337, 7313, 6774, 16016, 2029, 11823, 7656, 12947,
    13034, 14854, 16669, 19472, 3266, 16857, 13420, 2838, 18403, 15876, 9975,
    8309, 18893, 10911, 12404, 6874, 17355, 19414, 13559, 13398, 13763, 3682,
    5047, 6289, 15203, 18742, 7927, 13031, 18492, 1330, 6824, 13878, 3469,
    15213, 8882, 11069, 15106, 10746, 16722, 13962, 2489, 6531, 5600, 16425,
    283, 3629, 9399, 1403, 8402, 13757, 17087, 7189, 8583, 18351, 3373, 10609,
    17607, 15958, 3763, 15407, 17570, 7506, 507, 19587, 13249, 3278, 10069,
    5308, 13449, 12293, 7293, 9978, 19962, 18193, 14977, 4756, 12445, 2582,
    9799, 16478, 15258, 19020, 14415, 5230, 14975, 15223, 10420, 15738, 5844,
    4850, 18837, 19860, 341, 5305, 2390, 4823, 4597, 14578, 7616, 17608, 9740,
    17686, 11736, 294, 17920, 1256, 19293, 18744, 10243, 13364, 3870, 17958,
    18358, 11058, 10749, 6271, 1482, 7321, 6490, 4719, 15350, 10488, 19404,
    4779, 15781, 11262, 1156, 10947, 18647, 8066, 10654, 13410, 2400, 18175,
    19815, 19616, 6943, 19357, 10773, 6001, 17991, 16225, 1817, 11287, 18672,
    2030, 6669, 814, 3604, 15773, 17112, 13604, 18450, 1925, 11691, 18222,
    10649, 1766, 17737, 6071, 9093, 268, 5145, 5799, 14991, 11493, 18021, 13336,
    15808, 5904, 5487, 7633, 12044, 4130, 4252, 10633, 3291, 3699, 283, 11562,
    3124, 10443, 1309, 15490, 18048, 3518, 464, 11439, 9570, 6970, 12584, 11052,
    9656, 11881, 6959, 12297, 10579, 13703, 14534, 11730, 10948, 16599, 13514,
    11049, 17869, 991, 17851, 2017, 1089, 4828, 3676, 15821, 6661, 5483, 13529,
    1765, 16490, 3060, 12186, 7317, 717, 17645, 2074, 9073, 14586, 16630, 1391,
    2742, 6637, 18214, 15546, 12752, 19773, 6720, 16187, 2231, 11315, 5780, 4,
    8976, 3360, 504, 13376, 8506, 855, 3277, 18723, 18404, 3226, 19770, 18820,
    10999, 10095, 7217, 2547, 19543, 859, 4177, 8098, 10700, 7443, 18224, 3769,
    9470, 8931, 10318, 520, 19813, 16232, 3360, 2938, 4998, 14344, 15513, 15108,
    12100, 7227, 10429, 8350, 3707, 6819, 6379, 12365, 14649, 3871, 18593, 3732,
    1729, 18600, 17604, 12567, 8060, 1324, 8421, 3248, 11809, 13070, 44, 589,
    4974, 4541, 12529, 8045, 7757, 2143, 1038, 251, 10791, 9664, 19984, 5627,
    6184, 3091, 1196, 9807, 1565, 10661, 13028, 5668, 8491, 3267, 10057, 4801,
    6010, 11032, 4375, 17591, 461, 8961, 1504, 16286, 229, 8934, 9068, 14783,
    3643, 6178, 2234, 1528, 2079, 9556, 3490, 14234, 11217, 5477, 9797, 9173,
    11333, 4346, 8225, 12396, 5561, 8452, 7281, 18152, 15204, 7726, 6805, 17524,
    9121, 4101, 13235, 6246, 7589, 7078, 17899, 3900, 13430, 11688, 3856, 19685,
    17896, 14928, 14511, 5829, 7064, 11046, 11038, 4523, 13254, 2254, 14384,
    5859, 13974, 4813, 16736, 8937, 3970, 14331, 18045, 13989, 7710, 14461,
    7195, 2561, 17576, 18224, 7234, 5353, 1626, 2412, 2752, 9357, 15061, 5151,
    17765, 209, 3262, 11208, 15928, 9746, 11086, 17112, 16384, 7575, 317, 13287,
    2986, 11571, 12324, 4294, 15208, 12115, 2964, 16490, 3713, 2375, 6204,
    18106, 1853, 9628, 19653, 19405, 15959, 15796, 19418, 16489, 7785, 12119,
    12148, 1973, 7827, 14795, 6985, 12563, 8704, 9499, 19016, 513, 8845, 13143,
    12571, 1640, 720, 18804, 18442, 7354, 11153, 2667, 12197, 17282, 4515,
    15437, 15672, 19959, 18488, 5917, 3073, 3066, 15315, 16454, 6555, 8174,
    13570, 12513, 6211, 13302, 2508, 11917, 5599, 1426, 4922, 6010, 5201, 18309,
    7046, 7453, 12842, 19130, 14109, 5728, 13502, 3756, 4024, 10047, 13974,
    4935, 7386, 10762, 18717, 16508, 1090, 8297, 3077, 10812, 7540, 7433, 2085,
    3118, 1033, 9557, 15112, 12507, 3649, 81, 2245, 4159, 12472, 14300, 13615,
    14272, 17735, 4127, 17209, 11943, 14541, 18424, 10798, 14276, 11147, 4689,
    1049, 6635, 15702, 16805, 10684, 12019, 13726, 12541, 774, 4635, 12763,
    8195, 17717, 12824, 4480, 15433, 10652, 17264, 8747, 7376, 4708, 9402, 1436,
    17668, 3150, 10406, 4185, 4559, 4837, 3184, 18296, 2971, 17549, 10517,
    17305, 845, 13101, 2069, 902, 7682, 14741, 7412, 13579, 2479, 18522, 10433,
    5126, 5139, 16839, 5959, 15967, 14553, 2793, 1238, 19772, 11472, 16322,
    2631, 19640, 5560, 10947, 12546, 183, 8850, 10024, 8976, 7763, 14689, 5814,
    11140, 2002, 12649, 3770, 5605, 18506, 5224, 3346, 10083, 12071, 5521, 412,
    1271, 1031, 7470, 14929, 7332, 882, 3175, 213, 12352, 323, 9926, 17005,
    7176, 5950, 19413, 17564, 12175, 19926, 12226, 19708, 10194, 16370, 5627,
    13877, 3934, 15378, 6218, 18529, 7580, 8181, 1671, 9998, 12991, 18541, 1938,
    1893, 6304, 3003, 10466, 19197, 5850, 1124, 9615, 2903, 13601, 7171, 15959,
    4379, 12763, 8835, 7068, 9390, 1647, 5408, 7099, 3699, 9830, 15912, 17070,
    1868, 9719, 2782, 4711, 10717, 3184, 8417, 1985, 1611, 9057, 19779, 11049,
    16387, 858, 46, 17690, 11103, 5748, 9405, 7659, 6443, 19887, 16711, 8454,
    13754, 11141, 10411, 8910, 16318, 10008, 4352, 3926, 17060, 14202, 12016,
    19694, 2821, 3901, 10851, 3374, 12495, 10742, 1654, 3148, 10207, 9930,
    13233, 4688, 9043, 13640, 17230, 19495, 1764, 12245, 16481, 10304, 15718,
    11015, 346, 2352, 9717,
  ]

  expect(canJump(nums)).toBe(true)
})

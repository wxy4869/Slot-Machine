"""let stars = [
	["12345678", "张三"],
	["12345678", "张三"],
	["87654321", "李四"],
];"""

import re
import csv
import json

with open(r'.\source.txt', 'r', encoding='utf-8') as fin, open('result.txt', 'w', encoding='utf-8') as fout:
	res = []
	[res.extend([[num, name]] * int(wei)) for num, name, wei in map(lambda s: filter(lambda x: len(x), re.split(',|\t| ', s)), filter(lambda l: len(l), fin.readlines()))]
	s = json.dumps(res, ensure_ascii=False).replace("], [", "],\n [").replace("[[", "[\n [").replace("]]", "]\n]")
	print(f'let stars = {s};')
	print(f'let stars = {s};', file=fout)


//
// Created by ¼ÚÐù on 2019/12/28.
//
#include <iostream>
#include <vector>
#include <cstring>
#include <fstream>
#include <sstream>
using namespace std;

void split(const string& str, vector<string>& str_vec, const char delimeter) {
	str_vec.clear();
	std::istringstream iss(str);
	std::string temp;
	while (getline(iss, temp, delimeter)) {
		str_vec.push_back(temp);
	}
}
void buildList(){
    auto input_file = "source.txt";
    auto output_file = "result.txt";
    std::istream* input;
    std::ostream* output;
    std::ifstream inf;
    std::ofstream outf;
    inf.open(input_file,std::ios::binary | std::ios::in);
    if (!inf) {
        std::cout << "Fail to open source.txt for writing.\n";
        return ;
    }
    input = &inf;
    outf.open(output_file,std::ios::binary | std::ios::out | std::ios::trunc);
    if (!outf) {
        std::cout << "Fail to open ../result.txt for writing.\n";
        return ;
    }
    output = &outf;
	std::string temp;
    std::vector<std::string>info;
    for (std::string temp; std::getline(*input,temp);){
		split(temp, info, ',');
		info[0] = '\"'+info[0]+'\"';
		info[1] = '\"'+info[1]+'\"';
		info[2][0] -= '0';
		while(info[2][0]--){
			*output << "[" << info[0] << "," << info[1] << "]," << '\n';
		}
	}
    std::cout << "slotList transform finished!\n";
}
int main(){
    buildList();
    return 0;
}

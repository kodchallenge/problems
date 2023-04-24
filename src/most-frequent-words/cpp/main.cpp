#include "solution.hpp"
#include <iostream>
#include <string>
#include <cstdlib>

int main(int argc, char* argv[]) {
    std::string text = argv[1];
    kod::mostFrequentWords(text);
    return 0;
}
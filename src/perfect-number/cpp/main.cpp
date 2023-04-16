#include "solution.hpp"
#include <iostream>
#include <string>
#include <cstdlib>

int main(int argc, char* argv[]) {
    int num = std::stoi(argv[1]);
    kod::perfectNumber(num);
    return 0;
}
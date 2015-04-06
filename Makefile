BIN := ./node_modules/.bin
BUILD := ./build

install:
	npm i

cb:
	make clean
	make build

build:
	node $(BIN)/webpack

clean:
	rm -rf build

uninstall:
	rm -rf node_modules
	make clean

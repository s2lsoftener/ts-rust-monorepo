# Force rebuild the current package and local symlinked dependencies, and remake tsconfig.tsbuildinfo
pnpm exec tsc --build --force

# (Re)build current package and dependencies using cache from tsconfig.tsbuildinfo
TSC="tsc --build"

# --watch: Watch for changes in the .spec.ts files and imported src/**/*.ts files
# --runInBand: Don't run tests in parallel for better debugging
JEST_WATCH="node --inspect=0.0.0.0:9230 --require ts-node/register ./node_modules/jest/bin/jest.js --config=./jest.int.config.js --watch --runInBand $1"

# -d 1, --legacy-watch: settings to make nodemon work better with volume mounts
# --watch ./node_modules/**/@my-org/*/src/**/* -e ts: deeply watch for changes in this package's local dependencies
# --exec "...": Rebuild the current project and its dependencies, then restart Jest
# -I: Allow nodemon to forward keyboard inputs to Jest's watch mode CLI
# In nodemon.json, ignoreRoot: Override nodemon defaults to allow watching inside of node_modules
pnpm exec nodemon -I -d 1 --legacy-watch --watch "./node_modules/**/@my-org/*/src/**/*" -e ts --exec "$TSC && $JEST_WATCH"
# NOTE

API need to be preloaded. Add the following cmdline options with directory updated
```
--pre-load-apis="name=sample_rp+path=/home/heh/GitHub/hjhhh3000vitae/adl/sample_rp"
--pre-load-runtimes="path=/home/heh/GitHub/hjhhh3000vitae/adl/arm.adl" 
```

# create an instance of a normalized type

```
./cairo machinery \
--api-name=sample_rp \
--action=create-normalized-instance  \
--normalized-api-type-name=vm
```

# create an instance of a versioned type

```
./cairo machinery \
--api-name=sample_rp \
--action=create-versioned-instance \
--api-version="2020-09-09" \
--versioned-api-type-name="virtualmachine"
```


# normalize

```
./cairo \
--pre-load-apis="name=sample_rp+path=/home/heh/GitHub/hjhhh3000vitae/adl/sample_rp" \
--pre-load-runtimes="path=/home/heh/GitHub/hjhhh3000vitae/adl/arm.adl" \
 machinery \
--api-name=sample_rp \
--action=normalize  \
--api-version="2020-09-09" \
--versioned-api-type-name="virtualmachine" \
--source=./docs_ex/sample-rp-sample-data/vm_2020-09-09.json
```

## normalize a type that has an imperative versioner
```
./cairo machinery \
--api-name=sample_rp \
--action=normalize  \
--api-version="2020-09-09" \
--versioned-api-type-name="resource-two" \
--source=./docs_ex/sample-rp-sample-data/resource_two_2020-09-09.json
```


# denormalize

```
./cairo \
--pre-load-apis="name=sample_rp+path=/home/heh/GitHub/hjhhh3000vitae/adl/sample_rp" \
--pre-load-runtimes="path=/home/heh/GitHub/hjhhh3000vitae/adl/arm.adl" \
 machinery \
--api-name=sample_rp \
--action=denormalize \
--target-api-version=2020-09-09 \
--target-versioned-api-type-name=virtualmachine \
--source=./docs_ex/sample-rp-sample-data/vm-normalized.json
```

## denoromalize a type that has an imperative versioner
```
./cairo machinery \
--api-name=sample_rp \
--action=denormalize \
--target-api-version=2020-09-09 \
--target-versioned-api-type-name=resource-two \
--source=./docs_ex/sample-rp-sample-data/resource_two_normalized.json
```

# convert

```
./cairo machinery \
--api-name=sample_rp \
--action=convert \
--api-version=2020-09-09 \
--versioned-api-type-name=virtualmachine \
--target-api-version=2021-09-09 \
--target-versioned-api-type-name=virtualmachine \
--source=./docs_ex/sample-rp-sample-data/vm_2020-09-09.json
```

# list

```
./cairo \
--pre-load-apis="name=sample_rp+path=/home/heh/GitHub/hjhhh3000vitae/adl/sample_rp" \
--pre-load-runtimes="path=/home/heh/GitHub/hjhhh3000vitae/adl/arm.adl" \
list
 ```
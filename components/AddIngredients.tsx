import { View, Text, TouchableOpacity } from 'react-native'
import { FC, useState } from 'react'
import { Feather } from '@expo/vector-icons'
import Input from './Input'
import CustomText from './CustomText'
import { colors } from '@/theme'

interface Ingredient {
  id: number
  name: string
  quantity: string
}

interface AddIngredientsProps {
  ingredients: Ingredient[]
  setIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>
}

const AddIngredients: FC<AddIngredientsProps> = ({
  ingredients,
  setIngredients,
}) => {
  const addNewIngredient = () => {
    const newItem = { id: ingredients.length + 1, name: '', quantity: '' }
    setIngredients([...ingredients, newItem])
  }

  const removeIngredient = (id: number) => {
    const filteredIngredients = ingredients.filter(
      (ingredient) => ingredient.id !== id,
    )
    setIngredients(filteredIngredients)
  }

  const handleChange = (
    id: number,
    field: 'name' | 'quantity',
    value: string,
  ) => {
    setIngredients(
      ingredients.map((ingredient) =>
        ingredient.id === id ? { ...ingredient, [field]: value } : ingredient,
      ),
    )
  }

  return (
    <View style={{ marginTop: 24 }}>
      <CustomText bold size={20}>
        Ingredients
      </CustomText>

      <View
        style={{
          gap: 16,
        }}
      >
        {ingredients.map((item) => (
          <View
            key={item.id}
            style={{
              marginTop: 16,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <View
              style={{
                width: '50%',
              }}
            >
              <Input
                placeholder='Item name'
                value={item.name}
                onChange={(text) => handleChange(item.id, 'name', text)}
              />
            </View>
            <View style={{ flexGrow: 1 }}>
              <Input
                placeholder='Quantity'
                value={item.quantity}
                style={{
                  textAlign: 'center',
                }}
                onChange={(text) => handleChange(item.id, 'quantity', text)}
              />
            </View>
            <View>
              <TouchableOpacity onPress={() => removeIngredient(item.id)}>
                <Feather name='minus-circle' size={24} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      <TouchableOpacity
        onPress={addNewIngredient}
        style={{
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View style={{ marginRight: 4 }}>
          <Feather name='plus' size={24} color={colors.palette.neutral90} />
        </View>

        <CustomText bold size={16} line={22.4}>
          Add new Ingredients
        </CustomText>
      </TouchableOpacity>
    </View>
  )
}

export default AddIngredients

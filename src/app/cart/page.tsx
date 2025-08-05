'use client';

import { useSelector, useDispatch } from 'react-redux';
import { Container, Typography, Box, Card, CardContent, Button, IconButton, TextField, Divider } from '@mui/material';
import { Add, Remove, Delete, ShoppingCart } from '@mui/icons-material';
import { RootState } from '../../infrastructure/store';
import { removeFromCart, updateQuantity, clearCart } from '../../infrastructure/store/slices/cartSlice';
import { Layout } from '../../presentation/components/layout/Layout';
import Link from 'next/link';

// Cart page
export default function CartPage() {
  const dispatch = useDispatch();
  const { items, total, itemCount } = useSelector((state: RootState) => state.cart);

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (items.length === 0) {
    return (
      <Layout>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <ShoppingCart sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              Your cart is empty
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Add some products to your cart to get started.
            </Typography>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Button variant="contained" size="large">
                Continue Shopping
              </Button>
            </Link>
          </Box>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom>
          Shopping Cart ({itemCount} items)
        </Typography>

        <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', lg: 'row' } }}>
          {/* Cart items */}
          <Box sx={{ flex: 1 }}>
            {items.map((item) => (
              <Card key={item.id} sx={{ mb: 2 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.name}
                      sx={{
                        width: 80,
                        height: 80,
                        objectFit: 'cover',
                        borderRadius: 1,
                      }}
                    />
                    
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" gutterBottom>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {item.brand}
                      </Typography>
                      <Typography variant="h6" color="primary">
                        ${item.price}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconButton
                          size="small"
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        >
                          <Remove />
                        </IconButton>
                        
                        <TextField
                          value={item.quantity}
                          size="small"
                          sx={{ width: 60 }}
                          inputProps={{ style: { textAlign: 'center' } }}
                          onChange={(e) => {
                            const value = parseInt(e.target.value) || 0;
                            handleUpdateQuantity(item.id, value);
                          }}
                        />
                        
                        <IconButton
                          size="small"
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <Add />
                        </IconButton>
                      </Box>
                      
                      <Typography variant="body2" color="text.secondary">
                        ${(item.price * item.quantity).toFixed(2)}
                      </Typography>
                    </Box>
                    
                    <IconButton
                      color="error"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <Delete />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            ))}
            
            <Button
              variant="outlined"
              color="error"
              onClick={handleClearCart}
              sx={{ mt: 2 }}
            >
              Clear Cart
            </Button>
          </Box>

          {/* Order summary */}
          <Box sx={{ width: { xs: '100%', lg: 300 } }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Order Summary
                </Typography>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography>Subtotal:</Typography>
                  <Typography>${total.toFixed(2)}</Typography>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography>Shipping:</Typography>
                  <Typography>Free</Typography>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography>Tax:</Typography>
                  <Typography>${(total * 0.1).toFixed(2)}</Typography>
                </Box>
                
                <Divider sx={{ my: 2 }} />
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                  <Typography variant="h6">Total:</Typography>
                  <Typography variant="h6" color="primary">
                    ${(total * 1.1).toFixed(2)}
                  </Typography>
                </Box>
                
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{ mb: 2 }}
                >
                  Proceed to Checkout
                </Button>
                
                <Link href="/" style={{ textDecoration: 'none' }}>
                  <Button variant="outlined" fullWidth>
                    Continue Shopping
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
} 